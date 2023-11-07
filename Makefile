SHELL:= /bin/bash
.PHONY: help build del down rem re run start stop

help:
	@echo ""
	@echo "build"
	@echo "del"
	@echo "down"
	@echo "rem"
	@echo "re"
	@echo "run"
	@echo "start"
	@echo "stop"
	@echo ""

build:
	@echo "BUILD DEV IMAGE"
	docker build -t specimina .

del:
	@echo "REMOVE DEV IMAGE"
	docker rmi specimina

down:
	@echo "STOP & REMOVE DEV CONTAINER"
	docker stop specimina; docker rm specimina

rem:
	@echo "REMOVE DEV CONTAINER"
	docker rm specimina

re:
	@echo "RESTART DEV CONTAINER"
	docker restart specimina

run:
	@echo "RUN DEV CONTAINER"
	docker run --name specimina -p 8080:80 -v .:/usr/share/nginx/html/ -d specimina

start:
	@echo "START DEV CONTAINER"
	docker start specimina

stop:
	@echo "STOP DEV CONTAINER"
	docker stop specimina

