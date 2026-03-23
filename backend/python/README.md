# TradeLab Python Parser Service

FastAPI service for importing exchange candles into PostgreSQL.
It is called by the Java backend (`/api/imports/candles`) and can also run standalone.

## Stack

- Python 3.11+
- FastAPI + Uvicorn
- Psycopg (PostgreSQL)
- Requests

## Structure

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

## API

- `GET /health`
- `POST /internal/import/candles`

Example request:

```json
{
  "exchange": "binance",
  "symbol": "BTCUSDT",
  "interval": "1h",
  "from": "2024-01-01T00:00:00Z",
  "to": "2024-01-10T00:00:00Z"
}
```

## Environment

Create `.env` in `backend/python` from `.env.example`.

Key variables:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `BINANCE_BASE_URL`
- `BINANCE_API_KEY`
- `BINANCE_API_SECRET`
- `PYTHON_SERVICE_PORT`

## Run Locally

```bash
cd backend/python
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn parser.main:app --host 0.0.0.0 --port 8000
```

On startup, the service initializes schema from `parser/schema.sql`.

## Optional Local PostgreSQL

```powershell
cd backend/python
powershell -ExecutionPolicy Bypass -File .\run_local_postgres.ps1
```

This script creates a local cluster on `localhost:55432` with:

- DB: `tradelab`
- User: `postgres`
- Password: `postgres`

## Docker

```bash
docker build -t tradelab-python ./backend/python
```

