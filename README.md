# Infralyra (Инфраструктурная лирика):
"Программный комплекс сканирования и сниффинга сети для идентификации устройств, их типов и параметров".
<br/>
![Hello](./docs/architecture/favicon.png)

## Возможности:
 - Сканирование сетевого трафика устройства;
 - Анализ входящего трафика;

## Этапы развёртывания:
 1) Клонировние репозитория на устройство (сервер): `git clone https://github.com/Terrorick2020/Infralyra.git`;
 2) Перейти в диррескторию проетка: `cd ./Infralyra`;
 3) Установка файлов переменных сред .env в дирректориях [./]; [./apps/api]; [./apps/app] по примерам из .env.example, которые находятся в этих же дирректориях:
    - Windows: `New-Item -Path ".env", "./apps/app/.env", "./apps/api/.env" -ItemType File`;
    - Linux (Debian/Ubuntu, bash): `touch .env ./apps/app/.env ./apps/api/.env`;
    - MacOS: `touch .env ./apps/app/.env ./apps/api/.env`;
 4) Установить утилиту [make]:
    - Windows: `choco install make; make --version`;
    - Linux (Debian/Ubuntu, bash): `sudo apt update && sudo apt install build-essential && make --version`;
    - MacOS: `brew install make && make --version`;
 5) Запустить системы: `make setup`;
