up:
	docker-compose --env-file ./.env up --build
down:
	docker-compose --env-file ./.env down --volumes --remove-orphans
bash:
	docker exec -it renditions sh
