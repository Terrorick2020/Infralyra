# Определение переменных
MODE ?= dev # Режим работы программы: dev | test | prod
OUT_MODE ?= all # Режим остановки сервисов: all | dev | test | prod

OS_NAME := $(strip \
    $(if $(filter Windows_NT,$(OS)),windows, \
    $(if $(filter Linux,$(shell uname -s)),linux, \
    $(if $(filter Darwin,$(shell uname -s)),macos,unknown)))) # ОС устройства: windows | linux | macos | unknown

DCKR_CMPS_DEV_PATH = ./main/docker-compose.dev.yaml # Путь до конфигурации Docker Compose режима dev
DCKR_CMPS_TEST_PATH = ./docker-compose.yaml # Путь до конфигурации Docker Compose режима test
DCKR_CMPS_PROD_PATH = ./main/docker-compose.prod.yaml # Путь до конфигурации Docker Compose режима prod

ENV_MAIN_PATH = ./main # Путь к главному .env файлу
ENV_API_PATH = ./main/apps/api # Путь к серверному .env файлу
ENV_APP_PATH = ./main/apps/app # Путь к клиентскому .env файлу

POSTGRES_DB = psql_db # имя БД Postgres
POSTGRES_USER = psql_sys_user # имя пользователя системы БД Postgres
POSTGRES_PASSWORD := psql_sys_pswd # пароль пользователя системы БД Postgres

POSTGRES_DEFAULT_USER  = root # имя админимтратора системы по умолчанию
POSTGRES_DEFAULT_ROLE  = root # роль администратора по системы по умолчанию
POSTGRES_DEFAULT_LOGIN = psql_root_user # логин администратора системы по умолчанию
POSTGRES_DEFAULT_PASS  = psql_root_pswd # пароль администратора по системы по умолчанию

REDIS_PASSWORD = redis_sys_pswd # пароль БД Redis

AUTH_SECRET = auth_sys_secret # секрет системы токена авторизации 

# Проверка Docker
define check_docker
$(if $(shell command -v docker 2>NUL),,\
    $(info Docker не найден, пытаемся установить...) \
    $(if $(filter linux,$(OS_NAME)),\
        $(shell curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh),\
    $(if $(filter macos,$(OS_NAME)),\
        $(info Установите Docker Desktop вручную),\
    $(if $(filter windows,$(OS_NAME)),\
        $(shell choco install -y docker-desktop),\
        $(error Docker не поддерживается на этой ОС))))))
endef

# Проверка Docker Compose
define check_docker_compose
$(if $(shell command -v docker-compose 2>NUL),,\
    $(info Docker Compose не найден, пытаемся установить...) \
    $(if $(filter linux,$(OS_NAME)),\
        $(shell sudo curl -L "https://github.com/docker/compose/releases/download/v2.28.0/docker-compose-$(shell uname -s)-$(shell uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose),\
    $(if $(filter macos,$(OS_NAME)),\
        $(info Установите Docker Compose через Docker Desktop вручную),\
    $(if $(filter windows,$(OS_NAME)),\
        $(shell choco install -y docker-compose),\
        $(error Docker Compose не поддерживается на этой ОС))))))
endef

# Проверка OpenSSL
define check_openssl
$(if $(shell command -v openssl 2>NUL),,\
    $(info OpenSSL не найден, пытаемся установить...) \
    $(if $(filter linux,$(OS_NAME)),\
        $(shell sudo apt-get update && sudo apt-get install -y openssl || sudo yum install -y openssl),\
    $(if $(filter macos,$(OS_NAME)),\
        $(shell brew install openssl),\
    $(if $(filter windows,$(OS_NAME)),\
        $(shell choco install -y openssl.light),\
        $(error OpenSSL не поддерживается на этой ОС))))))
endef

# Генерация случайных секретов
define generate_secret
$(if $(shell command -v openssl 2>NUL),\
    $(shell openssl rand -hex 16),\
    $(if $(filter windows,$(OS_NAME)),\
        $(shell powershell -Command "[guid]::NewGuid().ToString('N')"),\
        $(error Не удалось сгенерировать секрет: OpenSSL не найден))\
)
endef

# Запись переменных в .env файлы
define write_env
ifeq ($(OS_NAME),windows)
	@if not exist $1 mkdir $1
	@> $1\.env
	$(foreach kv,$2,@echo $(kv) >> $1\.env;)
else
	@mkdir -p $1
	@> $1/.env
	$(foreach kv,$2,@echo $(kv) >> $1/.env;)
endif

@echo "Переменные среды $($1) установлены"
endef

# Проверка корректности значения MODE
check_mode:
ifeq ($(filter $(MODE),$(VALID_MODES)),)
	$(error Недопустимое значение MODE: $(MODE). Допустимые: dev | test | prod)
endif

# Запуск сервисов по MODE
define docker_cmps_start
$(call check_mode)
$(info Запуск сервисов Docker Compose...)
ifeq ($(MODE),dev)
	@docker-compose -f $(DCKR_CMPS_DEV_PATH) up
else ifeq ($(MODE),test)
	@docker-compose -f $(DCKR_CMPS_TEST_PATH) up
else ifeq ($(MODE),prod)
	@docker-compose -f $(DCKR_CMPS_PROD_PATH) up -d
endif
endef

# Остановка сервисов по OUT_MODE
define docker_cmps_stop
ifeq ($(MODE),all)
	$(info Остановка сервисов Docker Compose...)
	@docker-compose -f $(DCKR_CMPS_DEV_PATH) down -v
	@docker-compose -f $(DCKR_CMPS_TEST_PATH) down -v
	@docker-compose -f $(DCKR_CMPS_PROD_PATH) down -v
else
	$(call check_mode)
	$(info Остановка сервисов Docker Compose...)
	ifeq ($(MODE),dev)
		@docker-compose -f $(DCKR_CMPS_DEV_PATH) down -v
	else ifeq ($(MODE),test)
		@docker-compose -f $(DCKR_CMPS_TEST_PATH) down -v
	else ifeq ($(MODE),prod)
		@docker-compose -f $(DCKR_CMPS_PROD_PATH) down -v
	endif
endif
endef

# Очистка сервисов по OUT_MODE
define docker_cmps_clear
ifeq ($(MODE),all)
	$(info Очистка сервисов Docker Compose...)
	@docker-compose -f $(DCKR_CMPS_DEV_PATH) --rmi all --volumes --remove-orphans
	@docker-compose -f $(DCKR_CMPS_TEST_PATH) --rmi all --volumes --remove-orphans
	@docker-compose -f $(DCKR_CMPS_PROD_PATH) --rmi all --volumes --remove-orphans
else
	$(call check_mode)
	$(info Очистка сервисов Docker Compose...)
	ifeq ($(MODE),dev)
		@docker-compose -f $(DCKR_CMPS_DEV_PATH) --rmi all --volumes --remove-orphans
	else ifeq ($(MODE),test)
		@docker-compose -f $(DCKR_CMPS_TEST_PATH) --rmi all --volumes --remove-orphans
	else ifeq ($(MODE),prod)
		@docker-compose -f $(DCKR_CMPS_PROD_PATH) --rmi all --volumes --remove-orphans
	endif
endif
endef

# Очистка переменных среды
define env_clear
$(if $(wildcard $(ENV_MAIN_PATH)), \
    $(info Удаляем $(ENV_MAIN_PATH)) \
    $(shell rm -f $(ENV_MAIN_PATH)))
$(if $(wildcard $(ENV_API_PATH)), \
    $(info Удаляем $(ENV_API_PATH)) \
    $(shell rm -f $(ENV_API_PATH)))
$(if $(wildcard $(ENV_APP_PATH)), \
    $(info Удаляем $(ENV_APP_PATH)) \
    $(shell rm -f $(ENV_APP_PATH)))
endef

# Mодуль подготовки среды
.PHONY: preparation_for_work
preparation_for_work:
	@echo "Начало настройки среды ПК. Режим работы: $(MODE)"
	@echo "Установка необходимых зависимостей"
	$(call check_docker)
	$(call check_docker_compose)
	$(call check_openssl)
	@echo "Установка надежных секретов системы"
	$(eval POSTGRES_PASSWORD := $(call generate_secret))
	$(eval REDIS_PASSWORD := $(call generate_secret))
	$(eval AUTH_SECRET := $(call generate_secret))
	@echo "Установка переменных окружения"
	$(call write_env,$(ENV_MAIN_PATH),"MODE=$(MODE) POSTGRES_DB=$(POSTGRES_DB) POSTGRES_USER=$(POSTGRES_USER) POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) POSTGRES_DEFAULT_USER=$(POSTGRES_DEFAULT_USER) POSTGRES_DEFAULT_LOGIN=$(POSTGRES_DEFAULT_LOGIN) POSTGRES_DEFAULT_ROLE=$(POSTGRES_DEFAULT_ROLE) POSTGRES_DEFAULT_PASS=$(POSTGRES_DEFAULT_PASS) REDIS_PASSWORD=$(REDIS_PASSWORD)")
	$(call write_env,$(ENV_API_PATH),"POSTGRES_USER=$(POSTGRES_USER) POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) REDIS_PASSWORD=$(REDIS_PASSWORD) AUTH_SECRET=$(AUTH_SECRET)")
	$(call write_env,$(ENV_APP_PATH),"MODE=$(MODE)")
	@echo "Настройка среды ПК успешно завершена"

# Mодуль запуска сервисов
.PHONY: launching_software_services
launching_software_package:
	@echo "Начало запуска сервисов ПК. Режим работы: $(MODE)"
	$(eval OUT_MODE := $(MODE))
	$(call docker_cmps_stop)
	$(call docker_cmps_start)
	@echo "Запуск сервисов ПК успешно завершён"

# Mодуль остановки сервисов
.PHONY: stopping_software_services
stopping_software_services:
	@echo "Начало остановки сервисов ПК. Режим остановки: $(OUT_MODE)"
	$(call docker_cmps_stop)
	@echo "Остановка сервисов ПК успешно завершён"

# Mодуль очистки ресурсов ПК
.PHONY: clear_software
clear_software:
	@echo "Начало очистки ресурсов ПК. Режим остановки: $(OUT_MODE)"
	$(call docker_cmps_stop)
	$(call docker_cmps_clear)
	$(call env_clear)
	@echo "Очистка ресурсов ПК успешно завершёна"

# Модуль запуска ПК
.PHONY: start
start:
	@echo "Запуск системы"
	@$(MAKE) clear_software
	@$(MAKE) preparation_for_work
	@$(MAKE) launching_software_package
	@echo "Системы успешно запущена"
