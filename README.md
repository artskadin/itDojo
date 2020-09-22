# itDojo

Бот для прохождения собеседований


## Установка и запуск:

1. Установить все зависимости `npm i`
2. Настроить конфигурацию подключения к бд (config.example.json -> config.json)
3. Настроить конфиг для CLI typeorm (ormconfig.example.json)


## Команды запуска

Запуск тестового сервера:
```
npm start 
```

Автоматическая миграция схемы бд:

```
npm run db:sync
```

Запуск Seed базы данных:

```
npm run db:seed %название функции%
```

Запуск миграции:

```
npm run migrate
```

Откат миграции:

```
npm run migrate:rollback
```

Создание миграции:

```
npx typeorm migration:generate -n НазваниеМиграции
```