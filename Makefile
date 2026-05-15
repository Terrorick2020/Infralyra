include ./make/check.mk
include ./make/generate.mk

MODE ?= dev
OS_NAME ?= unknown

.PHONY: utils generate run stop clean
utils:
	@echo "✨ Подготовка системы"
	@echo "🛠️  Проверка валидности параметров..."
	$(eval $(call validate_mode,$(MODE)))
	$(eval $(call validate_os,$(OS_NAME)))
	@echo "🛠️  Определение опрерационной системы..."
	$(eval $(call detect_os, $(OS_NAME)))
	@echo "🛠️  Проверка и установка необходимых зависимотей..."
	$(eval $(call check_docker, $(OS_NAME)))
	$(eval $(call check_docker_compose, $(OS_NAME)))
	$(eval $(call check_openssl, $(OS_NAME)))

generate: utils
	@echo "✨ Подготовка среды системы"
	@echo "🛠️  Создание и генерация переменных сред..."
	$(eval $(call create_env,$(MODE),$(OS_NAME)))
	$(eval $(call generate_env,$(MODE),$(OS_NAME)))
	@echo "🛠️  Создание и генерация сертификатов секретности..."
	$(eval $(call create_generate_ssl,$(MODE),$(OS_NAME)))

run: generate
	@echo "✨ Запуск системы"
	$(eval $(call run_compose,$(MODE)))

stop:
	@echo "✨ Остановка системы"
	$(eval $(call sys_stop,$(MODE)))

clean:
	@echo "✨ Очистка устройства от зависимостей системы"
	$(eval $(call sys_clean,$(MODE)))
