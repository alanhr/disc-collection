build:
	yarn
	yarn build

build-docker:
	-docker-compose down
	docker-compose up -d --build
	cat db.sql | docker-compose exec -T  db mysql -u"disc" -p"disc@123" disc-collection-db

build-mysql:
	-docker-compose down
	docker-compose up -d --build db
	sleep 10
	cat db.sql | docker-compose exec -T  db mysql -u"disc" -p"disc@123" disc-collection-db

start:	build	build-docker
