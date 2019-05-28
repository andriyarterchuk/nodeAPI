application:
	@docker build --target node_ms -t node_ms:latest .
	@docker build --target gateway -t gateway:latest .
	@docker-compose up