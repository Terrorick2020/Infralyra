# Infralyra (Инфраструктурная лирика)
![Hello](./docs/architecture/favicon.png)
Программный комплекс сканирования и сниффинга сети для идентификации устройств, их типов и параметров.

## Возможности:
 - Сканирование сетевого трафика устройства
 - Анализ входящего трафика

## Этапы развёртывания
 1) Установка docker и docker compose:
  - Windows: скачивание по ссылке -> `https://www.docker.com/products/docker-desktop`
  - Linux(Ubuntu / Debian): выполнение команды -> `sudo apt update && sudo apt upgrade -y && sudo apt install docker && sudo apt install docker-compose`
 2) Клонирование репозитория на устройство / сервер
 3) Установка файлов переменных сред .env в дирректориях [./]; [./apps/api]; [./apps/app] по примерам из .env.example, которые находятся в этих же дирректориях
 4) Запуск сервиса: выполнение команды -> `docker compose up -d`
