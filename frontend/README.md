<h1 align="center">TradeLab Frontend</h1>

<p align="center">
  Фронтенд-приложение на Next.js (App Router) для работы с проектами, датасетами, бэктестами и результатами запусков.
</p>

<h2 align="center">Стек</h2>

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Recharts

<h2 align="center">Структура</h2>

```text
frontend/
|-- app/                 # страницы и API proxy маршруты
|-- components/          # shell, shared, ui
|-- features/            # доменная логика интерфейса
|-- lib/                 # демо-данные, типы, утилиты
|-- public/              # статические ассеты (иконки, лого, favicon)
`-- styles/              # глобальные стили и токены
```

<h2 align="center">Ключевые маршруты</h2>

- `/workspace` - обзорный дашборд
- `/desktop` - рабочий стол проекта
- `/data` - датасеты и импорт
- `/backtests` - запуски и фильтрация
- `/runs/[id]` - карточка запуска
- `/compare` - сравнение запусков

<h2 align="center">Интеграция с API</h2>

Фронтенд использует Next API routes (`app/api/*`) как proxy к Java API.

Переменная окружения:
- `BACKEND_API_BASE_URL` (по умолчанию: `http://127.0.0.1:8080`)

<h2 align="center">Локальный запуск</h2>

```bash
cd frontend
npm install
npm run dev
```

<h2 align="center">Полезные команды</h2>

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`

