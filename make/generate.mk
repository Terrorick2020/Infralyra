DEFAULT_SECRET := <Secret>@_retr54o\#wefQwer34tyfvsedw1343452</Secret>

BASE_ENV_PATHES := ./main/apps ./main/apps/app ./main/apps/api
BASE_SSL_PATHES := ./main/apps/nginx ./main/apps/app

TEST_ENV_PATHES := ./test/user-defined-devices/personal-computer \
	./test/user-defined-devices/laptop \
	./test/user-defined-devices/mobile-phone \
	./test/user-defined-devices/iot-device \
	./test/peripheral-devices/printer \
	./test/peripheral-devices/scanner \
	./test/service-devices/file-server \
	./test/service-devices/remote-access-server \
	./test/service-devices/web-server

TEST_SSL_PATHES := ./test/service-devices/web-server \
	./test/user-defined-devices/laptop \
	./test/user-defined-devices/mobile-phone \
	./test/user-defined-devices/personal-computer

define create_env
	$(eval _CURRENT_MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _ENV_PATHES := $(BASE_ENV_PATHES))
	$(if $(filter test,$(_CURRENT_MODE)),\
		$(eval _ENV_PATHES := $(BASE_ENV_PATHES) $(TEST_ENV_PATHES))\
	)
	$(if $(filter windows,$(OS_NAME)),\
		$(foreach p,$(_ENV_PATHES), if exist $(p)\.env del /F /Q $(p)\.env) \
		$(foreach p,$(_ENV_PATHES), mkdir $(p) 2>nul && type nul > $(p)\.env)\
		,\
		$(if $(filter macos linux debian arch,$(OS_NAME)),\
			$(foreach p,$(_ENV_PATHES), mkdir -p $(p) && rm -f $(p)/.env && touch $(p)/.env)\
			,\
			$(warning ⚠️ Неизвестная ОС. Невозможно создать .env файлы)\
		)
	)
endef

define generate_secret
$(strip \
	$(if $(filter windows,$(OS_NAME)),\
		$(if $(shell where openssl 2>NUL),\
			$(shell openssl rand -hex 16),\
			$(DEFAULT_SECRET)\
		),\
		$(if $(shell command -v openssl 2>/dev/null),\
			$(shell openssl rand -hex 16),\
			$(DEFAULT_SECRET)\
		)\
	)\
)
endef

define generate_env
endef

define create_generate_ssl
	$(eval _CURRENT_MODE := $(strip $1))
	$(eval _SSL_PATHES := $(BASE_SSL_PATHES))

	$(if $(filter test,$(_CURRENT_MODE)),\
		$(eval _SSL_PATHES := $(BASE_SSL_PATHES) $(TEST_SSL_PATHES))\
	)

	$(if $(filter windows,$(OS_NAME)),\
		$(foreach p,$(_SSL_PATHES), \
			if not exist $(p)\ssl mkdir $(p)\ssl & \
			if not exist $(p)\ssl\cert.pem type nul > $(p)\ssl\cert.pem & \
			if not exist $(p)\ssl\key.pem type nul > $(p)\ssl\key.pem \
		),\
		$(if $(filter macos debian arch linux,$(OS_NAME)),\
			$(foreach p,$(_SSL_PATHES), \
				mkdir -p $(p)/ssl && \
				[ ! -f $(p)/ssl/cert.pem ] && touch $(p)/ssl/cert.pem; \
				[ ! -f $(p)/ssl/key.pem ] && touch $(p)/ssl/key.pem \
			),\
			$(warning ⚠️ Неизвестная ОС. Невозможно создать SSL файлы)\
		)
	)
endef
