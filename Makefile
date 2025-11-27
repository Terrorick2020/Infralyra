SHELL := /bin/bash

check_docker:
	@if ! command -v docker >/dev/null 2>&1; then \
		echo "Docker not found — installing..."; \
		if command -v apt >/dev/null 2>&1; then \
			sudo apt update; \
			sudo apt install -y ca-certificates curl gnupg lsb-release; \
			curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker.gpg; \
			echo "deb [arch=$$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null; \
			sudo apt update; \
			sudo apt install -y docker-ce docker-ce-cli containerd.io; \
		elif command -v dnf >/dev/null 2>&1; then \
			sudo dnf -y install dnf-plugins-core; \
			sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo; \
			sudo dnf install -y docker-ce docker-ce-cli containerd.io; \
		elif command -v pacman >/dev/null 2>&1; then \
			sudo pacman -Sy --noconfirm docker; \
		elif [[ "$$(uname -s)" == "Darwin" ]]; then \
			echo "Please install Docker Desktop manually on macOS"; exit 1; \
		else \
			echo "Unsupported OS"; exit 1; \
		fi; \
		sudo systemctl enable docker || true; \
		sudo systemctl start docker || true; \
	fi

check_docker_compose:
	@if ! command -v docker-compose >/dev/null 2>&1; then \
		echo "docker-compose not found — installing..."; \
		if command -v apt >/dev/null 2>&1; then \
			sudo apt update; \
			sudo apt install -y docker-compose; \
		elif command -v dnf >/dev/null 2>&1; then \
			sudo dnf install -y docker-compose; \
		elif command -v pacman >/dev/null 2>&1; then \
			sudo pacman -Sy --noconfirm docker-compose; \
		elif [[ "$$(uname -s)" == "Darwin" ]]; then \
			brew install docker-compose; \
		else \
			echo "Unsupported OS"; exit 1; \
		fi; \
	fi

install_pcap:
	@if command -v apt >/dev/null 2>&1; then \
		echo "Detected apt"; \
		sudo apt update && sudo apt install -y libpcap-dev; \
	elif command -v dnf >/dev/null 2>&1; then \
		echo "Detected dnf"; \
		sudo dnf install -y libpcap-devel; \
	elif command -v yum >/dev/null 2>&1; then \
		echo "Detected yum"; \
		sudo yum install -y libpcap-devel; \
	elif command -v pacman >/dev/null 2>&1; then \
		echo "Detected pacman"; \
		sudo pacman -Sy --noconfirm libpcap; \
	elif [[ "$$(uname -s)" == "Darwin" ]]; then \
		echo "Detected macOS"; \
		brew install libpcap; \
	else \
		echo "Unsupported OS"; exit 1; \
	fi

up: check_docker check_docker_compose install_pcap
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose down
	docker-compose up -d

full_restart:
	docker-compose down -v
	docker system prune -af --volumes
	docker-compose up -d

setup: check_docker check_docker_compose install_pcap up
	@echo "Setup completed: Docker, Docker Compose и libpcap установлены, контейнеры запущены"
