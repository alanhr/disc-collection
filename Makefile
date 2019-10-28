build:
	yarn
	yarn build

build-docker:
	-docker-compose down
	docker-compose up -d --build
	cat db.sql | docker-compose exec -T  db mysql -u"disc" -p"disc@123" disc-collection-db

build-myql:
	-docker-compose down
	docker-compose up -d --build db
	cat db.sql | docker-compose exec -T  db mysql -u"disc" -p"disc@123" disc-collection-db

start:	build	build-docker
