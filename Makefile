SHELL:= /bin/bash
.PHONY: build run

help:
	@echo ""
	@echo "build"
	@echo "del"
	@echo "down"
	@echo "rem"
	@echo "run"
	@echo ""

build:
	docker build -t specimina .

del:
	docker rmi specimina

down:
	docker stop specimina; docker rm specimina

rem:
	docker rm specimina

run:
	docker run --name specimina -p 8080:80 -v .:/usr/share/nginx/html/ -d specimina

