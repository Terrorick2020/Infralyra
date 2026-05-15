VALID_MODES := dev test prod
VALID_OSES := windows macos debian arch linux unknown

define validate_mode
	$(eval _MODE_CHECK := $(strip $1))
	$(if $(filter $(_MODE_CHECK),$(VALID_MODES)),\
		,\
		$(warning ⚠️  Значение MODE недопустимо: '$(_MODE_CHECK)'. Допустимые значения: '$(VALID_MODES)'. Используется 'dev' по умолчанию.)\
		$(eval MODE := dev)\
	)
endef

define validate_os
	$(eval _OS_CHECK := $(strip $1))
	$(if $(filter $(_OS_CHECK),$(VALID_OSES)),\
		,\
		$(warning ⚠️  Внимание: значение OS_NAME недопустимо: '$(_OS_CHECK)'. Допустимые значения: '$(VALID_OSES)'. Используется 'unknown' по умолчанию.)\
		$(eval OS_NAME := unknown)\
	)
endef

define detect_os
	$(eval _CURRENT_OS := $(strip $1))
	$(if $(filter $(_CURRENT_OS),unknown),\
		$(eval _UNAME := $(shell uname -s 2>/dev/null))\
		$(if $(filter $(_UNAME),Linux),\
			$(eval _ID := $(shell grep -m1 '^ID=' /etc/os-release 2>/dev/null | cut -d= -f2 | tr -d '"'))\
			$(if $(filter $(_ID),debian),\
				$(eval OS_NAME := debian),\
			$(if $(filter $(_ID),arch),\
				$(eval OS_NAME := arch),\
				$(eval OS_NAME := linux)\
			)\
		),\
		$(if $(filter $(_UNAME),Darwin),\
			$(eval OS_NAME := macos),\
		)\
		$(if $(filter MINGW% MSYS% CYGWIN% Windows_NT,$(_UNAME)),\
			$(eval OS_NAME := windows),\
			$(warning ⚠️ Внимание: Не удалось определить операционную систему или она недопустима, остановка системы.)\
			$(eval OS_NAME := unknown)\
			$(error Определение ОС завершилось ошибкой)\
		)\
	),\
		$(eval OS_NAME := $(_CURRENT_OS))\
	)
endef

define check_docker
	$(eval _CURRENT_OS := $(strip $1))
	$(if $(filter $(_CURRENT_OS),windows),\
		$(if $(shell command -v docker >/dev/null 2>&1; echo $$?),\
			$(if $(shell command -v curl >/dev/null 2>&1; echo $$?),\
				@curl -L -o DockerDesktopInstaller.exe "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" || \
				{ \
					$(warning ⚠️  Внимание: Не удалось скачать установщик Docker, остановка программы) \
					exit 1; \
				} \
				@./DockerDesktopInstaller.exe || \
				{ \
					$(warning ⚠️  Внимание: Установка Docker Desktop не удалась, остановка программы) \
					rm -f DockerDesktopInstaller.exe; \
					exit 1; \
				} \
				@rm -f DockerDesktopInstaller.exe;\
				$(warning ⚠️  Внимание: curl не установлен. Для установки Docker Desktop потребуется ручное подтверждение в графическом интерфейсе, остановка программы) \
				exit 1\
			),\
		),\
		$(if $(filter $(_CURRENT_OS),macos),\
			$(if $(shell command -v docker >/dev/null 2>&1; echo $$?),\
				$(if $(shell command -v brew >/dev/null 2>&1; echo $$?),\
					@brew install --cask docker || \
					{ \
						$(warning ⚠️  Внимание: Не удалось установить Docker через Homebrew, остановка программы) \
						exit 1; \
					},\
					$(warning ⚠️  Внимание: Homebrew не установлен. Установка Docker Desktop невозможна, остановка программы) \
					exit 1\
				),\
			),\
			$(if $(filter $(_CURRENT_OS),debian),\
				$(if $(shell command -v docker >/dev/null 2>&1; echo $$?),\
					@sudo apt-get update && \
					sudo apt-get install -y docker.io || \
					{ \
						$(warning ⚠️  Внимание: Не удалось установить Docker. Проверьте подключение к интернету и права sudo, остановка программы) \
						exit 1; \
					},\
				),\
				$(if $(filter $(_CURRENT_OS),arch),\
					$(if $(filter 1,$(shell command -v docker >/dev/null 2>&1; echo $$?)),\
						@sudo pacman -Sy --needed docker || \
						{ \
							$(warning ⚠️  Внимание: Не удалось установить Docker, остановка программы); \
							exit 1; \
						} ; \
						@sudo systemctl enable docker.service && \
						sudo systemctl start docker.service || \
						{ \
							$(warning ⚠️  Внимание: Не удалось запустить Docker service, остановка программы); \
							exit 1; \
						}\
					),\
					$(if $(filter $(_CURRENT_OS),linux),\
						$(warning ⚠️  Внимание: Для Linux рекомендуется указать конкретный дистрибутив (debian, arch и т. д.). Автоматическая установка не выполняется, остановка программы); \
						exit 1,\
						$(warning ⚠️  Внимание: Неизвестная ОС: $(_CURRENT_OS). Автоматическая установка Docker не поддерживается, остановка программы); \
						exit 1;\
					)\
				)\
			)\
		)\
	)
endef

define check_docker_compose
	$(eval _CURRENT_OS := $(strip $1))
	$(if $(filter $(_CURRENT_OS),windows),\
		$(if $(shell command -v docker-compose >/dev/null 2>&1; echo $$?),\
			$(if $(shell command -v curl >/dev/null 2>&1; echo $$?),\
				@echo "Скачивание docker-compose для Windows..." >&2\
				@curl -L -o docker-compose.exe "https://github.com/docker/compose/releases/latest/download/docker-compose-Windows-x86_64.exe" || \
				{ \
					$(warning ⚠️ Внимание: Не удалось скачать docker-compose, остановка программы) \
					exit 1; \
				} \
				@chmod +x docker-compose.exe || \
				{ \
					$(warning ⚠️ Внимание: Не удалось установить права выполнения для docker-compose, остановка программы) \
					exit 1; \
				},\
				$(warning ⚠️ Внимание: curl не установлен. Автоматическая установка docker-compose невозможна, остановка программы) \
				exit 1 \
			),\
		),\
		$(if $(filter $(_CURRENT_OS),macos),\
			$(if $(shell command -v docker-compose >/dev/null 2>&1; echo $$?),\
				$(if $(shell command -v brew >/dev/null 2>&1; echo $$?),\
					@brew install docker-compose || \
					{ \
						$(warning ⚠️ Внимание: Не удалось установить docker-compose через Homebrew, остановка программы) \
						exit 1; \
					},\
					$(warning ⚠️ Внимание: Homebrew не установлен. Установка docker-compose невозможна, остановка программы) \
					exit 1\
				),\
			),\
			$(if $(filter $(_CURRENT_OS),debian),\
				$(if $(shell command -v docker-compose >/dev/null 2>&1; echo $$?),\
					@sudo apt-get update && \
					sudo apt-get install -y docker-compose || \
					{ \
						$(warning ⚠️ Внимание: Не удалось установить docker-compose. Проверьте подключение к интернету и права sudo, остановка программы) \
						exit 1; \
					},\
				),\
				$(if $(filter $(_CURRENT_OS),arch),\
					$(if $(shell command -v docker-compose >/dev/null 2>&1; echo $$?),\
						@sudo pacman -Sy --needed docker-compose || \
						{ \
							$(warning ⚠️ Внимание: Не удалось установить docker-compose, остановка программы) \
							exit 1; \
						},\
					),\
					$(if $(filter $(_CURRENT_OS),linux),\
						$(warning ⚠️ Внимание: Для Linux рекомендуется указать конкретный дистрибутив (debian, arch и т. д.). Автоматическая установка не выполняется, остановка программы) \
						exit 1, \
						$(warning ⚠️ Внимание: Неизвестная ОС: $(_CURRENT_OS). Автоматическая установка docker-compose не поддерживается, остановка программы) \
						exit 1; \
					)\
				)\
			)\
		)\
	)
endef

define check_openssl
	$(eval _CURRENT_OS := $(strip $1))
	$(if $(filter $(_CURRENT_OS),windows),\
		$(if $(shell command -v openssl >/dev/null 2>&1; echo $$?),\
			$(if $(shell command -v choco >/dev/null 2>&1; echo $$?),\
				@choco install openssl || \
				{ \
					$(warning ⚠️ Внимание: Не удалось установить OpenSSL через Chocolatey, остановка программы) \
					exit 1; \
				},\
				$(if $(shell command -v scoop >/dev/null 2>&1; echo $$?),\
					@scoop install openssl || \
					{ \
						$(warning ⚠️ Внимание: Не удалось установить OpenSSL через Scoop, остановка программы) \
						exit 1; \
					},\
					$(warning ⚠️ Внимание: OpenSSL не установлен. Для установки используйте Chocolatey (choco install openssl) или Scoop (scoop install openssl), остановка программы) \
					exit 1\
				)\
			),\
		),\
		$(if $(filter $(_CURRENT_OS),macos),\
			$(if $(shell command -v openssl >/dev/null 2>&1; echo $$?),\
				$(if $(shell command -v brew >/dev/null 2>&1; echo $$?),\
					@brew install openssl || \
					{ \
						$(warning ⚠️ Внимание: Не удалось установить OpenSSL через Homebrew, остановка программы) \
						exit 1; \
					},\
					$(warning ⚠️ Внимание: Homebrew не установлен. Установка OpenSSL невозможна, остановка программы) \
					exit 1\
				),\
			),\
			$(if $(filter $(_CURRENT_OS),debian),\
				$(if $(shell command -v openssl >/dev/null 2>&1; echo $$?),\
					@sudo apt-get update && \
					sudo apt-get install -y openssl || \
					{ \
						$(warning ⚠️ Внимание: Не удалось установить OpenSSL. Проверьте подключение к интернету и права sudo, остановка программы) \
						exit 1; \
					},\
				),\
				$(if $(filter $(_CURRENT_OS),arch),\
					$(if $(shell command -v openssl >/dev/null 2>&1; echo $$?),\
						@sudo pacman -Sy --needed openssl || \
						{ \
							$(warning ⚠️ Внимание: Не удалось установить OpenSSL, остановка программы) \
							exit 1; \
						},\
					),\
					$(if $(filter $(_CURRENT_OS),linux),\
						$(warning ⚠️ Внимание: Для Linux рекомендуется указать конкретный дистрибутив (debian, arch и т. д.). Автоматическая установка не выполняется, остановка программы) \
						exit 1, \
						$(warning ⚠️ Внимание: Неизвестная ОС. Автоматическая установка OpenSSL не поддерживается, остановка программы) \
						exit 1; \
					)\
				)\
			)\
		)\
	)
endef
