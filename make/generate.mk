BASE_ENV_PATHES := ./main ./main/apps/app ./main/apps/api
BASE_SSL_PATHES := ./main/apps/nginx ./main/apps/app

TEST_ENV_PATHES := ./ \
 ./test/user-defined-devices/personal-computer \
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

HOSTNAME := 0.0.0.0
TARGET_HOSTNAME := localhost

PERIPH_PORT := 9100
SMB_PORT := 445
NFS_PORT := 2049
FTP_PORT := 21
SSH_PORT := 22
MQTT_PORT := 1883
HTTP_PORT := 8080
UDP_PORT := 5683
TELEMETRY_PORT := 6543
RPC_PORT := 135
NETBIOS_PORT := 139
HTTPS_PORT := 443
RDP_PORT := 3389
ADB_PORT := 5555
HTTP_MOB_PORT := 8080
HTTPS_MOB_PORT := 8443
BINDER_PORT := 4000
TELEPHONY_PORT := 5000
DOCKER_PORT := 2375
SYSLOG_PORT := 514
TARGET_PORT := 3000
APP_PORT := 3475

POSTGRES_DB := postgres
POSTGRES_USER := postgres
POSTGRES_DEFAULT_USER := admine
POSTGRES_DEFAULT_LOGIN := admine
POSTGRES_DEFAULT_ROLE := admine
PSWD := Pswd1234
SECRET := <Secret>@_retr54o\#wefQwer34tyfvsedw1343452</Secret>

define create_env
	$(eval _CURRENT_MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _ENV_PATHES := $(BASE_ENV_PATHES))
	$(if $(filter test,$(_CURRENT_MODE)),\
		$(eval _ENV_PATHES := $(BASE_ENV_PATHES) $(TEST_ENV_PATHES))\
	)
	$(if $(filter windows,$(_CURRENT_OS)),\
		$(foreach p,$(_ENV_PATHES), if exist "$(p)\.env" del /F /Q "$(p)\.env" & mkdir "$(p)" 2>nul & type nul > "$(p)\.env" & )\
		,\
		$(if $(filter macos linux debian arch,$(_CURRENT_OS)),\
			$(foreach p,$(_ENV_PATHES), mkdir -p "$(p)" && rm -f "$(p)/.env" && touch "$(p)/.env"; )\
			,\
			$(warning ⚠️ Неизвестная ОС. Невозможно создать .env файлы)\
		)
	)
endef

define generate_secret
	$(strip $(if $(filter windows,$(strip $1)),\
		$(if $(shell where openssl 2>NUL),$(shell openssl rand -hex 16),$(DEFAULT_SECRET)),\
		$(if $(shell command -v openssl 2>/dev/null),$(shell openssl rand -hex 16),$(DEFAULT_SECRET))\
	))
endef

define generate_password
	$(strip $(strip $(if $(filter windows,$(strip $1)),\
		$(if $(shell where openssl 2>NUL),$(shell openssl rand -hex 4),$(DEFAULT_PASSWORD)),\
		$(if $(shell command -v openssl 2>/dev/null),$(shell openssl rand -hex 4),$(DEFAULT_PASSWORD))\
	)))
endef

define generate_env
	$(eval _CURRENT_MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _ENV_PATHES := $(BASE_ENV_PATHES))
	$(if $(filter test,$(_CURRENT_MODE)),$(eval _ENV_PATHES := $(BASE_ENV_PATHES) $(TEST_ENV_PATHES)))

	# Генерируем секреты заранее (один раз на весь цикл)
	$(eval _GEN_SECRET := $(call generate_secret,$(_CURRENT_OS)))
	$(eval _GEN_PSWD := $(call generate_password,$(_CURRENT_OS)))

	$(if $(filter windows,$(_CURRENT_OS)),\
		$(foreach p,$(_ENV_PATHES),\
			if exist "$(p)\.env.example" (\
				copy /Y "$(p)\.env.example" "$(p)\.env" >NUL &\
				powershell -NoProfile -Command "\
					$$c = Get-Content '$(p)\.env' -Raw; \
					$$c = $$c \
						.Replace('{{HOSTNAME}}', '$(HOSTNAME)') \
						.Replace('{{TARGET_HOSTNAME}}', '$(TARGET_HOSTNAME)') \
						.Replace('{{PERIPH_PORT}}', '$(PERIPH_PORT)') \
						.Replace('{{SMB_PORT}}', '$(SMB_PORT)') \
						.Replace('{{NFS_PORT}}', '$(NFS_PORT)') \
						.Replace('{{FTP_PORT}}', '$(FTP_PORT)') \
						.Replace('{{SSH_PORT}}', '$(SSH_PORT)') \
						.Replace('{{MQTT_PORT}}', '$(MQTT_PORT)') \
						.Replace('{{HTTP_PORT}}', '$(HTTP_PORT)') \
						.Replace('{{UDP_PORT}}', '$(UDP_PORT)') \
						.Replace('{{TELEMETRY_PORT}}', '$(TELEMETRY_PORT)') \
						.Replace('{{RPC_PORT}}', '$(RPC_PORT)') \
						.Replace('{{NETBIOS_PORT}}', '$(NETBIOS_PORT)') \
						.Replace('{{HTTPS_PORT}}', '$(HTTPS_PORT)') \
						.Replace('{{RDP_PORT}}', '$(RDP_PORT)') \
						.Replace('{{ADB_PORT}}', '$(ADB_PORT)') \
						.Replace('{{HTTP_MOB_PORT}}', '$(HTTP_MOB_PORT)') \
						.Replace('{{HTTPS_MOB_PORT}}', '$(HTTPS_MOB_PORT)') \
						.Replace('{{BINDER_PORT}}', '$(BINDER_PORT)') \
						.Replace('{{TELEPHONY_PORT}}', '$(TELEPHONY_PORT)') \
						.Replace('{{DOCKER_PORT}}', '$(DOCKER_PORT)') \
						.Replace('{{SYSLOG_PORT}}', '$(SYSLOG_PORT)') \
						.Replace('{{TARGET_PORT}}', '$(TARGET_PORT)') \
						.Replace('{{APP_PORT}}', '$(APP_PORT)') \
						.Replace('{{POSTGRES_DB}}', '$(POSTGRES_DB)') \
						.Replace('{{POSTGRES_USER}}', '$(POSTGRES_USER)') \
						.Replace('{{POSTGRES_DEFAULT_USER}}', '$(POSTGRES_DEFAULT_USER)') \
						.Replace('{{POSTGRES_DEFAULT_LOGIN}}', '$(POSTGRES_DEFAULT_LOGIN)') \
						.Replace('{{POSTGRES_DEFAULT_ROLE}}', '$(POSTGRES_DEFAULT_ROLE)') \
						.Replace('{{MODE}}', '$(_CURRENT_MODE)') \
						.Replace('{{PSWD}}', '$(_GEN_PSWD)') \
						.Replace('{{SECRET}}', '$(_GEN_SECRET)'); \
					Set-Content -Path '$(p)\.env' -Value $$c" &\
			) &\
		),\
		$(if $(filter macos linux debian arch,$(_CURRENT_OS)),\
			$(foreach p,$(_ENV_PATHES),\
				if [ -f "$(p)/.env.example" ]; then \
					echo "✅ Копирование $(p)/.env"; \
					cp "$(p)/.env.example" "$(p)/.env" || { echo "❌ cp failed"; exit 1; }; \
					echo "⚙️ Замена переменных..."; \
					sed -i.bak \
						-e "s|{{HOSTNAME}}|$(HOSTNAME)|g" \
						-e "s|{{TARGET_HOSTNAME}}|$(TARGET_HOSTNAME)|g" \
						-e "s|{{PERIPH_PORT}}|$(PERIPH_PORT)|g" \
						-e "s|{{SMB_PORT}}|$(SMB_PORT)|g" \
						-e "s|{{NFS_PORT}}|$(NFS_PORT)|g" \
						-e "s|{{FTP_PORT}}|$(FTP_PORT)|g" \
						-e "s|{{SSH_PORT}}|$(SSH_PORT)|g" \
						-e "s|{{MQTT_PORT}}|$(MQTT_PORT)|g" \
						-e "s|{{HTTP_PORT}}|$(HTTP_PORT)|g" \
						-e "s|{{UDP_PORT}}|$(UDP_PORT)|g" \
						-e "s|{{TELEMETRY_PORT}}|$(TELEMETRY_PORT)|g" \
						-e "s|{{RPC_PORT}}|$(RPC_PORT)|g" \
						-e "s|{{NETBIOS_PORT}}|$(NETBIOS_PORT)|g" \
						-e "s|{{HTTPS_PORT}}|$(HTTPS_PORT)|g" \
						-e "s|{{RDP_PORT}}|$(RDP_PORT)|g" \
						-e "s|{{ADB_PORT}}|$(ADB_PORT)|g" \
						-e "s|{{HTTP_MOB_PORT}}|$(HTTP_MOB_PORT)|g" \
						-e "s|{{HTTPS_MOB_PORT}}|$(HTTPS_MOB_PORT)|g" \
						-e "s|{{BINDER_PORT}}|$(BINDER_PORT)|g" \
						-e "s|{{TELEPHONY_PORT}}|$(TELEPHONY_PORT)|g" \
						-e "s|{{DOCKER_PORT}}|$(DOCKER_PORT)|g" \
						-e "s|{{SYSLOG_PORT}}|$(SYSLOG_PORT)|g" \
						-e "s|{{TARGET_PORT}}|$(TARGET_PORT)|g" \
						-e "s|{{APP_PORT}}|$(APP_PORT)|g" \
						-e "s|{{POSTGRES_DB}}|$(POSTGRES_DB)|g" \
						-e "s|{{POSTGRES_USER}}|$(POSTGRES_USER)|g" \
						-e "s|{{POSTGRES_DEFAULT_USER}}|$(POSTGRES_DEFAULT_USER)|g" \
						-e "s|{{POSTGRES_DEFAULT_LOGIN}}|$(POSTGRES_DEFAULT_LOGIN)|g" \
						-e "s|{{POSTGRES_DEFAULT_ROLE}}|$(POSTGRES_DEFAULT_ROLE)|g" \
						-e "s|{{MODE}}|$(_CURRENT_MODE)|g" \
						-e "s|{{PSWD}}|$(_GEN_PSWD)|g" \
						-e "s|{{SECRET}}|$(_GEN_SECRET)|g" \
						"$(p)/.env" || { echo "❌ sed failed в $(p)/.env"; exit 1; }; \
					rm -f "$(p)/.env.bak"; \
					echo "✅ Готово: $(p)/.env"; \
				else \
					echo "⚠️ Пропуск: не найден $(p)/.env.example"; \
				fi; \
			) \
		,\
			$(warning ⚠️ Неизвестная ОС. Невозможно сгенерировать .env файлы)\
		)\
	)
endef

define create_ssl
	$(eval _CURRENT_MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _SSL_PATHES := $(BASE_SSL_PATHES))

	$(if $(filter test,$(_CURRENT_MODE)),\
		$(eval _SSL_PATHES := $(BASE_SSL_PATHES) $(TEST_SSL_PATHES))\
	)

	$(if $(filter windows,$(_CURRENT_OS)),\
		$(foreach p,$(_SSL_PATHES), if not exist "$(p)\ssl" mkdir "$(p)\ssl" & type nul > "$(p)\ssl\cert.pem" & type nul > "$(p)\ssl\key.pem" & )\
		,\
		$(if $(filter macos debian arch linux,$(_CURRENT_OS)),\
			$(foreach p,$(_SSL_PATHES), mkdir -p "$(p)/ssl" && touch "$(p)/ssl/cert.pem" "$(p)/ssl/key.pem"; )\
			,\
			$(warning ⚠️ Неизвестная ОС. Невозможно создать SSL файлы)\
		)
	)
endef

define generate_ssl
	$(eval _CURRENT_MODE := $(strip $1))
	$(eval _CURRENT_OS := $(strip $2))
	$(eval _SSL_PATHES := $(BASE_SSL_PATHES))

	$(if $(filter test,$(_CURRENT_MODE)),\
		$(eval _SSL_PATHES := $(BASE_SSL_PATHES) $(TEST_SSL_PATHES))\
	)

	$(if $(filter windows,$(_CURRENT_OS)),\
		$(foreach p,$(_SSL_PATHES), openssl req -x509 -newkey rsa:4096 -keyout "$(p)\ssl\key.pem" -out "$(p)\ssl\cert.pem" -days 3650 -nodes -subj "/CN=localhost" -batch 2>NUL & )\
		,\
		$(if $(filter macos linux debian arch,$(_CURRENT_OS)),\
			$(foreach p,$(_SSL_PATHES), openssl req -x509 -newkey rsa:4096 -keyout "$(p)/ssl/key.pem" -out "$(p)/ssl/cert.pem" -days 3650 -nodes -subj "/CN=localhost" -batch 2>/dev/null; )\
			,\
			$(warning ⚠️ Неизвестная ОС. Невозможно сгенерировать SSL сертификаты)\
		)
	)
endef
