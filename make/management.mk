DEV_PATH := ./main/docker-compose.dev.yaml
TEST_PATH := ./docker-compose.yaml
PROD_PATH := ./main/docker-compose.prod.yaml

define get_compose_path
	$(strip $(if $(filter windows,$(strip $1)),\
		$(subst /,\,$(strip $2)),\
		$(strip $2)\
	))
endef

define sys_run
	$(eval _MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _COMPOSE_FILE := $(if $(filter dev,$(_MODE)),$(DEV_PATH),$(if $(filter test,$(_MODE)),$(TEST_PATH),$(PROD_PATH))))
	$(eval _COMPOSE_PATH := $(call get_compose_path,$(_CURRENT_OS),$(_COMPOSE_FILE)))

	$(if $(filter windows,$(_CURRENT_OS)),\
		$(if $(filter dev,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" up --build -d,\
		$(if $(filter test,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" up --build,\
		$(if $(filter prod,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" up --build,\
			$(warning ⚠️  Неизвестный MODE: $(_MODE))\
		))),\
	$(if $(filter macos linux debian arch,$(_CURRENT_OS)),\
		$(if $(filter dev,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" up --build -d,\
		$(if $(filter test,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" up --build,\
		$(if $(filter prod,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" up --build,\
			$(warning ⚠️  Неизвестный MODE: $(_MODE))\
		))),\
		$(warning ⚠️  Неизвестная ОС: $(_CURRENT_OS). Невозможно запустить систему)\
	))
endef

define sys_stop
	$(eval _MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _COMPOSE_FILE := $(if $(filter dev,$(_MODE)),$(DEV_PATH),$(if $(filter test,$(_MODE)),$(TEST_PATH),$(PROD_PATH))))
	$(eval _COMPOSE_PATH := $(call get_compose_path,$(_CURRENT_OS),$(_COMPOSE_FILE)))

	$(if $(filter windows,$(_CURRENT_OS)),\
		$(if $(filter dev,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" down,\
		$(if $(filter test,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" down,\
		$(if $(filter prod,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" down,\
			$(warning ⚠️  Неизвестный MODE: $(_MODE))\
		))),\
	$(if $(filter macos linux debian arch,$(_CURRENT_OS)),\
		$(if $(filter dev,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" down,\
		$(if $(filter test,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" down,\
		$(if $(filter prod,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" down,\
			$(warning ⚠️  Неизвестный MODE: $(_MODE))\
		))),\
		$(warning ⚠️  Неизвестная ОС: $(_CURRENT_OS). Невозможно остановить систему)\
	))
endef

define sys_clean
	$(eval _MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _COMPOSE_FILE := $(if $(filter dev,$(_MODE)),$(DEV_PATH),$(if $(filter test,$(_MODE)),$(TEST_PATH),$(PROD_PATH))))
	$(eval _COMPOSE_PATH := $(call get_compose_path,$(_CURRENT_OS),$(_COMPOSE_FILE)))

	$(if $(filter windows,$(_CURRENT_OS)),\
		$(if $(filter dev,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" down --rmi all -v --remove-orphans,\
		$(if $(filter test,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" down --rmi all -v --remove-orphans,\
		$(if $(filter prod,$(_MODE)),\
			docker compose -f "$(_COMPOSE_PATH)" down --rmi all -v --remove-orphans,\
			$(warning ⚠️  Неизвестный MODE: $(_MODE))\
		))),\
	$(if $(filter macos linux debian arch,$(_CURRENT_OS)),\
		$(if $(filter dev,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" down --rmi all -v --remove-orphans,\
		$(if $(filter test,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" down --rmi all -v --remove-orphans,\
		$(if $(filter prod,$(_MODE)),\
			sudo docker compose -f "$(_COMPOSE_PATH)" down --rmi all -v --remove-orphans,\
			$(warning ⚠️  Неизвестный MODE: $(_MODE))\
		))),\
		$(warning ⚠️  Неизвестная ОС: $(_CURRENT_OS). Невозможно очистить систему)\
	))
endef
