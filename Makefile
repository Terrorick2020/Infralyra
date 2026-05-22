include ./make/check.mk
include ./make/generate.mk
include ./make/management.mk

MODE ?= dev
OS_NAME ?= unknown

.PHONY: settings utils generate run stop clean
settings:
	@echo "✨ Подготовка системы"
	@echo "🛠️  Проверка валидности параметров..."
	$(call validate_mode,$(MODE))
	$(call validate_os,$(OS_NAME))
	@echo "🛠️  Определение опрерационной системы..."
	$(call detect_os, $(OS_NAME))

utils: settings
	@echo "✨ Подготовка сервисов системы"
	@echo "🛠️  Проверка и установка необходимых зависимотей..."
	$(call check_docker, $(OS_NAME))
	$(call check_docker_compose, $(OS_NAME))
	$(call check_openssl, $(OS_NAME))

generate: utils
	@echo "✨ Подготовка среды системы"
	@echo "🛠️  Создание и генерация переменных сред..."
	$(call create_env,$(MODE),$(OS_NAME))
	$(call generate_env,$(MODE),$(OS_NAME))
	@echo "🛠️  Создание и генерация сертификатов секретности..."
	$(call create_ssl,$(MODE),$(OS_NAME))
	$(call generate_ssl,$(MODE),$(OS_NAME))

run: generate
	@echo "✨ Запуск системы"
	$(call sys_run,$(MODE),$(OS_NAME))

stop: settings
	@echo "✨ Остановка системы"
	$(call sys_stop,$(MODE),$(OS_NAME))

clean: settings
	@echo "✨ Очистка устройства от зависимостей системы"
	$(call sys_clean,$(MODE),$(OS_NAME))
