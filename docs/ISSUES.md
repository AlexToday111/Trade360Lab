# TradeLab Board Issues

Документ содержит стартовый набор issues для продуктовой доски TradeLab. Формулировки сделаны так, чтобы задачи можно было почти без правок переносить в GitHub Issues, Linear или Jira.

## Правила оформления

- `Type`: `epic`, `feature`, `backend`, `frontend`, `infra`, `docs`
- `Priority`: `P0`, `P1`, `P2`
- `Status`: для старта все задачи считаются `Backlog`
- `Owner`: пока не назначен

## Epic 1. Desktop-first workflow

### ISSUE-001
- Title: `feat(frontend): связать "Рабочий стол" с выбранным проектом`
- Type: `frontend`
- Priority: `P0`
- Status: `Backlog`
- Goal: экран `Рабочий стол` должен открываться в контексте конкретного проекта, а не на моковом `projects[0]`.
- Scope:
  - добавить источник выбранного проекта;
  - передавать `projectId` через роут или store;
  - показать состояние, если проект не найден.
- DoD:
  - открытие `Рабочего стола` зависит от выбранного проекта;
  - все карточки, действия и графики берут данные из проектного контекста.

### ISSUE-002
- Title: `feat(frontend): добавить переход из "Главное" в проектный рабочий стол`
- Type: `frontend`
- Priority: `P0`
- Status: `Backlog`
- Goal: карточки проектов на главном экране должны реально открывать проект.
- Scope:
  - добавить кликабельность карточек;
  - поддержать переход по кнопке и по всей карточке;
  - сохранить единый hover/active state.
- DoD:
  - каждая карточка проекта ведет на `Рабочий стол`;
  - нет мертвых элементов интерфейса.

### ISSUE-003
- Title: `feat(frontend): спроектировать UI загрузки файлов стратегии`
- Type: `frontend`
- Priority: `P0`
- Status: `Backlog`
- Goal: подготовить пользовательский сценарий загрузки файлов вместо встроенного редактора.
- Scope:
  - drag-and-drop зона;
  - список загруженных файлов;
  - статусы валидации;
  - ошибки структуры проекта.
- DoD:
  - в `Рабочем столе` есть отдельный блок загрузки файлов;
  - пользователь видит, что загружено и что не прошло проверку.

### ISSUE-004
- Title: `feat(frontend): добавить блок управления запуском сценария`
- Type: `frontend`
- Priority: `P1`
- Status: `Backlog`
- Goal: на `Рабочем столе` должен появиться явный сценарий подготовки запуска.
- Scope:
  - выбор датасета;
  - выбор конфигурации;
  - базовые параметры запуска;
  - CTA `Запустить`.
- DoD:
  - пользователь понимает, какие данные участвуют в запуске;
  - форма готова к подключению реального API.

### ISSUE-005
- Title: `feat(frontend): подключить реальные графические виджеты проекта`
- Type: `frontend`
- Priority: `P1`
- Status: `Backlog`
- Goal: графики на `Рабочем столе` должны отображать данные выбранного проекта и выбранного запуска.
- Scope:
  - equity;
  - drawdown;
  - переключение периода;
  - empty/loading/error states.
- DoD:
  - графики не завязаны на глобальные моковые данные;
  - есть явные состояния загрузки и отсутствия данных.

### ISSUE-006
- Title: `feat(frontend): собрать единый дизайн-kit экранов продукта`
- Type: `frontend`
- Priority: `P1`
- Status: `Backlog`
- Goal: перестать дорабатывать экраны точечно и зафиксировать повторно используемые паттерны.
- Scope:
  - стандартизовать `PageHeader`, `SurfaceCard`, таблицы, empty states, KPI-блоки;
  - выделить состояния hover/selected/disabled;
  - описать правила в дизайн-документе.
- DoD:
  - новые экраны собираются из фиксированного набора shared-компонентов;
  - в `docs/DESIGN.md` отражены актуальные правила.

## Epic 2. Java control plane

### ISSUE-007
- Title: `feat(backend-java): поднять Spring Boot сервис control plane`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: завести основной backend-сервис, который будет хранить проекты, файлы, запуски и статусы.
- Scope:
  - Spring Boot приложение;
  - базовая конфигурация;
  - health/readiness endpoints;
  - docker-compose профиль для локальной разработки.
- DoD:
  - сервис стартует локально;
  - есть `/actuator/health`;
  - структура проекта готова к расширению.

### ISSUE-008
- Title: `feat(backend-java): описать доменную модель и миграции PostgreSQL`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: зафиксировать минимальную серверную модель данных.
- Scope:
  - таблицы `projects`, `project_files`, `runs`, `run_artifacts`, `datasets`;
  - foreign keys;
  - индексы под списки и фильтры;
  - Flyway или Liquibase.
- DoD:
  - схема раскатывается миграциями;
  - сущности соответствуют UI-сценариям.

### ISSUE-009
- Title: `feat(backend-java): реализовать API проектов`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: дать фронтенду CRUD для проектов.
- Scope:
  - создание проекта;
  - список проектов;
  - карточка проекта;
  - обновление метаданных проекта.
- DoD:
  - API покрывает сценарии экрана `Главное`;
  - есть OpenAPI-описание.

### ISSUE-010
- Title: `feat(backend-java): реализовать API загрузки файлов проекта`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: подготовить серверную модель для ручного сабмита файлов стратегии.
- Scope:
  - создание upload session;
  - presigned upload или локальный multipart endpoint;
  - сохранение метаданных файла;
  - статусы валидации.
- DoD:
  - фронтенд может загрузить файл и увидеть его в проекте;
  - файл связан с конкретным проектом.

### ISSUE-011
- Title: `feat(backend-java): реализовать lifecycle API для запусков`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: backend должен уметь создавать запуск и отслеживать его жизненный цикл.
- Scope:
  - `create run`;
  - `list runs`;
  - `get run details`;
  - статусы `draft`, `queued`, `running`, `done`, `failed`, `cancelled`.
- DoD:
  - фронтенд может инициировать запуск;
  - run details собираются через один контракт.

### ISSUE-012
- Title: `feat(backend-java): добавить state machine и audit trail для runs`
- Type: `backend`
- Priority: `P1`
- Status: `Backlog`
- Goal: переходы между статусами должны быть валидируемыми и наблюдаемыми.
- Scope:
  - allowed transitions;
  - история изменений статуса;
  - причина ошибки/отмены;
  - timestamps по этапам.
- DoD:
  - нельзя перевести run в недопустимое состояние;
  - история изменений доступна через API.

### ISSUE-013
- Title: `feat(backend-java): реализовать API артефактов и отчетов`
- Type: `backend`
- Priority: `P1`
- Status: `Backlog`
- Goal: результаты запуска должны храниться отдельно и отдаваться в UI.
- Scope:
  - manifest артефактов;
  - ссылки на логи, отчеты, метрики и графики;
  - типы артефактов.
- DoD:
  - экран `Run details` может получать артефакты из API;
  - артефакты отделены от основного объекта `run`.

## Epic 3. Python execution plane

### ISSUE-014
- Title: `feat(backend-python): поднять worker для исполнения запусков`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: отделить управление запуском от исполнения стратегии.
- Scope:
  - отдельный Python-сервис;
  - polling очереди или подписка на задачи;
  - обработка одной задачи end-to-end;
  - возврат статуса в control plane.
- DoD:
  - worker умеет забрать задачу и завершить ее с финальным статусом;
  - обмен данными между Java и Python формализован.

### ISSUE-015
- Title: `feat(backend-python): реализовать валидацию пакета файлов стратегии`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: до запуска проверять, что пользователь загрузил корректную структуру проекта.
- Scope:
  - проверка обязательных файлов;
  - проверка entrypoint;
  - проверка манифеста/конфига;
  - человекочитаемые ошибки.
- DoD:
  - при невалидной структуре запуск не уходит в исполнение;
  - UI получает список ошибок валидации.

### ISSUE-016
- Title: `feat(backend-python): описать execution contract для запуска стратегии`
- Type: `backend`
- Priority: `P0`
- Status: `Backlog`
- Goal: зафиксировать входной контракт для Python-исполнителя.
- Scope:
  - project files;
  - dataset reference;
  - runtime config;
  - expected outputs.
- DoD:
  - есть JSON schema или pydantic-модель;
  - контракт согласован с Java API.

### ISSUE-017
- Title: `feat(backend-python): реализовать расчет метрик и временных рядов`
- Type: `backend`
- Priority: `P1`
- Status: `Backlog`
- Goal: метрики и графики должны считаться вне фронтенда.
- Scope:
  - equity curve;
  - drawdown;
  - PnL;
  - Sharpe;
  - trade statistics.
- DoD:
  - Python формирует результат, готовый для `Run details` и `Compare`;
  - фронтенд перестает считать метрики сам.

### ISSUE-018
- Title: `feat(backend-python): реализовать генерацию artifact manifest`
- Type: `backend`
- Priority: `P1`
- Status: `Backlog`
- Goal: после завершения запуска worker должен публиковать единый манифест результатов.
- Scope:
  - ссылки на отчеты;
  - логи;
  - графические данные;
  - сериализованные метрики.
- DoD:
  - Java backend может сохранить manifest без знания внутренностей Python-пайплайна.

### ISSUE-019
- Title: `feat(backend-python): подготовить sandbox-исполнение для пользовательских файлов`
- Type: `backend`
- Priority: `P1`
- Status: `Backlog`
- Goal: запуск пользовательского кода должен происходить в изолированной среде.
- Scope:
  - отдельный runtime;
  - лимиты CPU/RAM/time;
  - изоляция временных файлов;
  - безопасная очистка артефактов выполнения.
- DoD:
  - один запуск не влияет на другой;
  - есть понятные ограничения исполнения.

## Epic 4. Integration and platform

### ISSUE-020
- Title: `feat(infra): поднять локальный stack для Postgres, Redis и MinIO`
- Type: `infra`
- Priority: `P0`
- Status: `Backlog`
- Goal: локальная среда должна поддерживать файлы, очереди и метаданные.
- Scope:
  - docker-compose;
  - переменные окружения;
  - примеры конфигурации;
  - проверка старта всех сервисов.
- DoD:
  - backend и worker могут работать локально без ручной настройки.

### ISSUE-021
- Title: `feat(infra): выбрать транспорт между Java control plane и Python worker`
- Type: `infra`
- Priority: `P0`
- Status: `Backlog`
- Goal: зафиксировать способ доставки задач исполнения.
- Scope:
  - вариант `Redis queue`;
  - вариант `Postgres job table`;
  - оценка retry/visibility timeout;
  - итоговое ADR-решение.
- DoD:
  - выбран один механизм;
  - решение задокументировано и применено в коде.

### ISSUE-022
- Title: `feat(infra): организовать хранение загруженных файлов и артефактов`
- Type: `infra`
- Priority: `P0`
- Status: `Backlog`
- Goal: бинарные объекты не должны жить в основной БД.
- Scope:
  - бакеты для project files и run artifacts;
  - naming convention;
  - lifecycle policy;
  - локальный MinIO и future-ready S3 abstraction.
- DoD:
  - backend хранит только метаданные;
  - все бинарные данные лежат в object storage.

### ISSUE-023
- Title: `feat(infra): настроить сквозной локальный e2e сценарий "загрузка -> запуск -> результат"`
- Type: `infra`
- Priority: `P1`
- Status: `Backlog`
- Goal: проверить целевой пользовательский поток целиком.
- Scope:
  - создать проект;
  - загрузить файлы;
  - создать запуск;
  - дождаться результата;
  - получить артефакты.
- DoD:
  - сценарий воспроизводится локально по инструкции;
  - основные интеграционные ошибки ловятся до ручного тестирования UI.

### ISSUE-024
- Title: `feat(infra): добавить логирование и трассировку запуска`
- Type: `infra`
- Priority: `P1`
- Status: `Backlog`
- Goal: каждый запуск должен быть наблюдаем от API до worker.
- Scope:
  - correlation id;
  - структурные логи;
  - базовые метрики;
  - логирование ошибок исполнения.
- DoD:
  - можно отследить run по одному идентификатору через все сервисы.

## Epic 5. Product and docs

### ISSUE-025
- Title: `docs(api): описать OpenAPI для проектов, файлов и запусков`
- Type: `docs`
- Priority: `P0`
- Status: `Backlog`
- Goal: сначала зафиксировать контракты, потом подключать UI и worker.
- Scope:
  - проекты;
  - файлы проекта;
  - run lifecycle;
  - artifacts;
  - errors.
- DoD:
  - команды фронтенда, Java и Python используют единый контракт.

### ISSUE-026
- Title: `docs(architecture): оформить ADR по разбиению Java/Python ответственности`
- Type: `docs`
- Priority: `P1`
- Status: `Backlog`
- Goal: зафиксировать, почему control plane пишется на Java, а execution/data plane на Python.
- Scope:
  - зона ответственности каждого сервиса;
  - границы API;
  - что не должно протекать между слоями;
  - критерии будущего масштабирования.
- DoD:
  - есть короткий архитектурный документ, который снимает повторяющиеся вопросы по стеку.

### ISSUE-027
- Title: `docs(product): описать roadmap MVP до первого реального запуска стратегии`
- Type: `docs`
- Priority: `P1`
- Status: `Backlog`
- Goal: превратить набор задач в понятный пошаговый план релиза.
- Scope:
  - MVP scope;
  - что не входит в MVP;
  - зависимости между задачами;
  - milestone 1 / 2 / 3.
- DoD:
  - можно разложить backlog по спринтам без повторного анализа.

## Рекомендуемый порядок запуска в работу

### Спринт 1
- ISSUE-007
- ISSUE-008
- ISSUE-009
- ISSUE-010
- ISSUE-014
- ISSUE-015
- ISSUE-016
- ISSUE-020
- ISSUE-021
- ISSUE-025

### Спринт 2
- ISSUE-001
- ISSUE-002
- ISSUE-003
- ISSUE-004
- ISSUE-011
- ISSUE-012
- ISSUE-017
- ISSUE-022

### Спринт 3
- ISSUE-005
- ISSUE-006
- ISSUE-013
- ISSUE-018
- ISSUE-019
- ISSUE-023
- ISSUE-024
- ISSUE-026
- ISSUE-027
