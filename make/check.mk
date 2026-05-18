VALID_MODES := dev test prod
VALID_OSES := windows macos debian arch linux unknown

ERR_DOCKER_DOWNLOAD := ⚠️  Внимание: не удалось скачать установщик Docker\, остановка программы
ERR_DOCKER_INSTALL := ⚠️  Внимание: не удалось установить Docker\, остановка программы
ERR_DOCKER_START := ⚠️  Внимание: не удалось запустить Docker service\, остановка программы
ERR_CURL_MISSING := ⚠️  Внимание: curl не установлен. Установка невозможна\, остановка программы
ERR_BREW_MISSING := Homebrew не установлен. Установка невозможна\, остановка программы
ERR_APT_MISSING := ⚠️  Внимание: не удалось установить пакет через apt. Проверьте интернет и sudo\, остановка программы
ERR_PACMAN_MISSING := ⚠️  Внимание: не удалось установить пакет через pacman\, остановка программы
ERR_OS_UNKNOWN := ⚠️  Внимание: неизвестная ОС: $(_CURRENT_OS). Автоматическая установка не поддерживается\, остановка программы

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
			$(warning ⚠️ Внимание: ⚠️  Внимание: не удалось определить операционную систему или она недопустима, остановка системы.)\
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
		$(if $(shell command -v docker.exe >/dev/null 2>&1),,\
			$(if $(shell command -v curl >/dev/null 2>&1),,\
				@curl -L -o DockerDesktopInstaller.exe "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" && \
				./DockerDesktopInstaller.exe && \
				rm -f DockerDesktopInstaller.exe || \
				{ echo "$(ERR_DOCKER_INSTALL)" >&2; exit 1; }\
			)\
		),\
	$(if $(filter $(_CURRENT_OS),macos),\
		$(if $(shell command -v docker >/dev/null 2>&1),,\
			$(if $(shell command -v brew >/dev/null 2>&1),,\
				@brew install --cask docker || { echo "$(ERR_DOCKER_INSTALL)" >&2; exit 1; }\
			)\
		),\
	$(if $(filter $(_CURRENT_OS),debian),\
		$(if $(shell command -v docker >/dev/null 2>&1),,\
			@sudo apt-get update && \
			sudo apt-get install -y docker.io || \
			{ echo "$(ERR_APT_MISSING)" >&2; exit 1; }\
		),\
	$(if $(filter $(_CURRENT_OS),arch),\
		$(if $(shell command -v docker >/dev/null 2>&1),,\
			@sudo pacman -Sy --needed docker || \
			{ echo "$(ERR_PACMAN_MISSING)" >&2; exit 1; } ; \
			sudo systemctl enable docker.service && \
			sudo systemctl start docker.service || \
			{ echo "$(ERR_DOCKER_START)" >&2; exit 1; }\
		),\
	$(if $(filter $(_CURRENT_OS),linux),\
		@echo "$(ERR_OS_UNKNOWN)" >&2; exit 1,\
		@echo "⚠️  Внимание: неизвестная ОС: $(_CURRENT_OS)" >&2; exit 1\
	)))))
endef

define check_docker_compose
	$(eval _CURRENT_OS := $(strip $1))
	$(if $(filter $(_CURRENT_OS),windows),\
		$(if $(shell command -v docker-compose.exe >/dev/null 2>&1),,\
			$(if $(shell command -v curl >/dev/null 2>&1),,\
				@curl -L -o docker-compose.exe "https://github.com/docker/compose/releases/latest/download/docker-compose-Windows-x86_64.exe" && \
				chmod +x docker-compose.exe || \
				{ echo "⚠️  Внимание: не удалось установить docker compose\, остановка программы" >&2; exit 1; }\
			)\
		),\
	$(if $(filter $(_CURRENT_OS),macos),\
		$(if $(shell command -v docker compose >/dev/null 2>&1),,\
			$(if $(shell command -v brew >/dev/null 2>&1),,\
				@brew install docker-compose || { echo "$(ERR_BREW_MISSING)" >&2; exit 1; }\
			)\
		),\
	$(if $(filter $(_CURRENT_OS),debian),\
		$(if $(shell command -v docker compose >/dev/null 2>&1),,\
			@sudo apt-get update && \
			sudo apt-get install -y docker-compose || \
			{ echo "$(ERR_APT_MISSING)" >&2; exit 1; }\
		),\
	$(if $(filter $(_CURRENT_OS),arch),\
		$(if $(shell command -v docker compose >/dev/null 2>&1),,\
			@sudo pacman -Sy --needed docker-compose || \
			{ echo "$(ERR_PACMAN_MISSING)" >&2; exit 1; }\
		),\
	$(if $(filter $(_CURRENT_OS),linux),\
		@echo "Для укажите дистрибутив (debian/arch)" >&2; exit 1,\
		@echo "⚠️  Внимание: неизвестная ОС: $(_CURRENT_OS)" >&2; exit 1\
	)))))
endef

define check_openssl
	$(eval _CURRENT_OS := $(strip $1))
	$(if $(filter $(_CURRENT_OS),windows),\
		$(if $(shell command -v openssl.exe >/dev/null 2>&1),,\
			$(if $(shell command -v choco >/dev/null 2>&1),,\
				@choco install -y openssl || { echo "⚠️  Внимание: не удалось установить OpenSSL через choco" >&2; exit 1; },\
			$(if $(shell command -v scoop >/dev/null 2>&1),,\
				@scoop install openssl || { echo "⚠️  Внимание: не удалось установить OpenSSL через scoop" >&2; exit 1; },\
				@echo "Установите OpenSSL вручную (choco/scoop)" >&2; exit 1\
			))\
		),\
	$(if $(filter $(_CURRENT_OS),macos),\
		$(if $(shell command -v openssl >/dev/null 2>&1),,\
			$(if $(shell command -v brew >/dev/null 2>&1),,\
				@brew install openssl || { echo "$(ERR_BREW_MISSING)" >&2; exit 1; }\
			)\
		),\
	$(if $(filter $(_CURRENT_OS),debian),\
		$(if $(shell command -v openssl >/dev/null 2>&1),,\
			@sudo apt-get update && \
			sudo apt-get install -y openssl || \
			{ echo "$(ERR_APT_MISSING)" >&2; exit 1; }\
		),\
	$(if $(filter $(_CURRENT_OS),arch),\
		$(if $(shell command -v openssl >/dev/null 2>&1),,\
			@sudo pacman -Sy --needed openssl || \
			{ echo "$(ERR_PACMAN_MISSING)" >&2; exit 1; }\
		),\
	$(if $(filter $(_CURRENT_OS),linux),\
		@echo "Укажите дистрибутив для установки OpenSSL" >&2; exit 1,\
		@echo "⚠️  Внимание: неизвестная ОС для OpenSSL: $(_CURRENT_OS)" >&2; exit 1\
	)))))
endef
