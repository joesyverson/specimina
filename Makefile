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
	docker build -t specimina .

del:
	docker rmi specimina

down:
	docker stop specimina; docker rm specimina

rem:
	docker rm specimina

re:
	docker restart specimina

run:
	docker run --name specimina -p 8080:80 -v .:/usr/share/nginx/html/ -d specimina

start:
	docker start specimina

stop:
	docker stop specimina

