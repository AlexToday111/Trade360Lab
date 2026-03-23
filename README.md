<h1 align="center">TradeLab</h1>

<p align="center">
  <img src="./frontend/public/Logo.png" alt="Логотип TradeLab" width="320" />
</p>

<p align="center">
  Монорепозиторий платформы для исследования, запуска и сравнения торговых сценариев.
</p>

<h2 align="center">Архитектура</h2>

```mermaid
flowchart LR
    UI[Frontend: Next.js]
    APIProxy[Next API Routes]
    JavaAPI[Backend: Java Spring Boot]
    PyParser[Backend: Python FastAPI Parser]
    DB[(PostgreSQL)]

    UI --> APIProxy
    APIProxy --> JavaAPI
    JavaAPI --> PyParser
    JavaAPI --> DB
    PyParser --> DB
```

<h2 align="center">Текущая структура проекта</h2>

```text
TradeLab/
|-- frontend/               # Next.js приложение (UI + API proxy)
|   |-- app/
|   |-- components/
|   |-- features/
|   |-- lib/
|   `-- public/
|-- backend/
|   |-- java/               # Spring Boot API
|   `-- python/             # FastAPI parser/import service
|-- docs/                   # Проектная документация
|-- archive/                # Архивные материалы
`-- docker-compose.yml      # Оркестрация всего стека
```

<h2 align="center">Стек технологий</h2>

<h3 align="center">Фронтенд</h3>

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Recharts

<h3 align="center">Бэкенд</h3>

- Java 17 + Spring Boot 3
- Python 3.11+ + FastAPI
- PostgreSQL 16
- Docker / Docker Compose

<h2 align="center">Быстрый старт</h2>

<h3 align="center">Вариант A: весь стек в Docker (рекомендуется)</h3>

```bash
docker compose up --build
```

Сервисы:
- Frontend: `http://localhost:3000`
- Java API: `http://localhost:8080`
- Python parser: `http://localhost:8000`
- PostgreSQL: `localhost:5432`

<h3 align="center">Вариант B: локальная разработка</h3>

1. Фронтенд
```bash
cd frontend
npm install
npm run dev
```

2. Python parser
```bash
cd backend/python
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn parser.main:app --host 0.0.0.0 --port 8000
```

3. Java API
```bash
cd backend/java
mvn spring-boot:run
```

<h2 align="center">Подробная документация</h2>

- Фронтенд: [`frontend/README.md`](./frontend/README.md)
- Обзор бэкенда: [`backend/README.md`](./backend/README.md)
- Java API: [`backend/java/README.md`](./backend/java/README.md)
- Python parser: [`backend/python/README.md`](./backend/python/README.md)

