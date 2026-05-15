DEV_PATH := ./main/ocker-compose.dev.yaml
TEST_PATH := ./docker-compose.yaml
PROD_PATH := ./main/ocker-compose.prod.yaml

define sys_run
	$(eval _MODE := $(strip $1))
	$(if $(filter dev,$(_MODE)),\
		docker-compose -f $(DEV_PATH) up --build -d,\
	$(if $(filter test,$(_MODE)),\
		docker-compose -f $(TEST_PATH) up --build ,\
	$(if $(filter prod,$(_MODE)),\
		docker-compose -f $(PROD_PATH) up --build,\
		$(warning ⚠️ Неизвестный MODE: $(_MODE))\
	)))
endef

define sys_stop
	$(eval _MODE := $(strip $1))
	$(if $(filter dev,$(_MODE)),\
		docker-compose -f $(DEV_PATH) down,\
	$(if $(filter test,$(_MODE)),\
		docker-compose -f $(TEST_PATH) down,\
	$(if $(filter prod,$(_MODE)),\
		docker-compose -f $(PROD_PATH) down,\
		$(warning ⚠️ Неизвестный MODE: $(_MODE))\
	)))
endef

define sys_clean
	$(eval _MODE := $(strip $1))
	$(if $(filter dev,$(_MODE)),\
		docker-compose -f $(DEV_PATH) down --rmi all -v --remove-orphans,\
	$(if $(filter test,$(_MODE)),\
		docker-compose -f $(TEST_PATH) down --rmi all -v --remove-orphans,\
	$(if $(filter prod,$(_MODE)),\
		docker-compose -f $(PROD_PATH) down --rmi all -v --remove-orphans,\
		$(warning ⚠️ Неизвестный MODE: $(_MODE))\
	)))

endef
