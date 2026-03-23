# TradeLab Java API

Spring Boot service that exposes REST endpoints for datasets and candles, and orchestrates candle import through the Python parser.

## Stack

- Java 17
- Spring Boot 3
- Spring Web
- Spring Data JPA
- PostgreSQL driver
- Maven

## Project Structure

```text
backend/java/
|-- src/main/java/com/example/back/
|   |-- controller/
|   |-- service/
|   |-- repository/
|   |-- entity/
|   |-- dto/
|   `-- client/           # Python parser HTTP client
`-- src/main/resources/
    |-- application.yml
    `-- schema.sql
```

## API Endpoints

- `GET /api/health`
- `GET /api/python/health`
- `GET /api/datasets`
- `POST /api/datasets`
- `PATCH /api/datasets/{id}`
- `POST /api/datasets/{id}/duplicate`
- `DELETE /api/datasets/{id}`
- `GET /api/candles`
- `POST /api/imports/candles`

## Configuration

`src/main/resources/application.yml` supports these key env overrides:

- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `PYTHON_PARSER_BASE_URL`

Default local ports:

- Java API: `8080`
- Python parser: `8000`
- PostgreSQL: `5432` (or custom)

## Run Locally

```bash
cd backend/java
mvn spring-boot:run
```

## Build JAR

```bash
cd backend/java
mvn clean package -DskipTests
```

## Docker

```bash
docker build -t tradelab-java ./backend/java
```

