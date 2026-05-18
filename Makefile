include ./make/check.mk
include ./make/generate.mk

MODE ?= dev
OS_NAME ?= unknown

.PHONY: utils generate run stop clean
utils:
	@echo "✨ Подготовка системы"
	@echo "🛠️  Проверка валидности параметров..."
	$(call validate_mode,$(MODE))
	$(call validate_os,$(OS_NAME))
	@echo "🛠️  Определение опрерационной системы..."
	$(call detect_os, $(OS_NAME))
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
	$(call create_generate_ssl,$(MODE),$(OS_NAME))

run: generate
	@echo "✨ Запуск системы"
	$(call run_compose,$(MODE))

stop:
	@echo "✨ Остановка системы"
	$(call sys_stop,$(MODE))

clean:
	@echo "✨ Очистка устройства от зависимостей системы"
	$(call sys_clean,$(MODE))
