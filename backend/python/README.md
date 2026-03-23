<h1 align="center">TradeLab Python Parser</h1>

<p align="center">
  FastAPI сервис для импорта рыночных свечей в PostgreSQL.
</p>

<h2 align="center">Стек</h2>

- Python 3.11+
- FastAPI + Uvicorn
- Psycopg (PostgreSQL)
- Requests

<h2 align="center">Структура</h2>

```text
backend/python/
|-- parser/
|   |-- main.py
|   |-- config.py
|   |-- db.py
|   |-- schema.sql
|   |-- exchanges/
|   |   `-- binance/
|   |-- repositories/
|   `-- services/
|-- requirements.txt
`-- run_local_postgres.ps1
```

<h2 align="center">API</h2>

- `GET /health`
- `POST /internal/import/candles`

Пример запроса:

```json
{
  "exchange": "binance",
  "symbol": "BTCUSDT",
  "interval": "1h",
  "from": "2024-01-01T00:00:00Z",
  "to": "2024-01-10T00:00:00Z"
}
```

<h2 align="center">Переменные окружения</h2>

Создай `.env` в `backend/python` на основе `.env.example`.

Ключевые переменные:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `BINANCE_BASE_URL`
- `BINANCE_API_KEY`
- `BINANCE_API_SECRET`
- `PYTHON_SERVICE_PORT`

<h2 align="center">Запуск локально</h2>

```bash
cd backend/python
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn parser.main:app --host 0.0.0.0 --port 8000
```

При старте сервис применяет `parser/schema.sql`.

<h2 align="center">Локальный PostgreSQL (опционально)</h2>

```powershell
cd backend/python
powershell -ExecutionPolicy Bypass -File .\run_local_postgres.ps1
```

Скрипт поднимает кластер на `localhost:55432`:

- БД: `tradelab`
- Пользователь: `postgres`
- Пароль: `postgres`

<h2 align="center">Docker</h2>

```bash
docker build -t tradelab-python ./backend/python
```

