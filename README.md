# Prometheus &middot; [![Build Status](https://travis-ci.com/GTech1256/TestTaskFrontEnd-6.svg?branch=master)](https://travis-ci.com/GTech1256/TestTaskFrontEnd-6)

## Установка

### Prerequriements

1. [Node](https://nodejs.org/en/download/)
1. [Yarn](https://yarnpkg.com/getting-started).
1. [Firebase](https://firebase.google.com/docs/cli)

## Сборка

### Установка зависимостей

Все зависимости подтянутся и попадут в папку npm_modules

```bash
yarn
```

### Инициализация Firebase

1. Создать проект на Firebase
1. Вести `firebase login`
1. Вести `firebase init`
1. Выбрать только Hosting и слудующие параметры:
    1. *? What do you want to use as your public directory?* **build**
    1. *? Configure as a single-page app (rewrite all urls to /index.html)?* **Yes**
    1. *? File build/index.html already exists. Overwrite?* **No**
1. Создать Базу Данных от Firebase
1. Вписать путь до БД, который указан на сайте в REACT_APP_API_HOST

### Development-режим

Инициализация dev окружения по умолчанию

```bash
cp .env.dev .env
```

Проект соберется, запустится мелкий сервер статики на 3000 порту, изменения файлов будут отслеживаться и проект пересобираться

```bash
yarn start
```

### Production-режим

#### Инициализация prod окружения по умолчанию

```bash
cp .env.prod .env
```

#### Создание папки `build` с собранным приложением для развертывания

```bash
yarn build
```

#### Развертывание на Firebase

```bash
firebase deploy
```

## Настройка окружения вручную

По умолчанию параметры вычитываются из файла `.env` (в git не выкладывается) и могут быть переопределены через переменные окружения системы (приоритет у переменных окружения системы).
В корне проекта доступны примеры файлов `.env` для разных режимов запуска (их можно использовать для формирования локального `.env`):

- `.env.dev` - параметры для запуска в development-режиме;
- `.env.prod` - параметры для запуска в production-режиме.

Доступные параметры:

| Код                | Код в Docker | Описание                                         |
|--------------------|--------------|--------------------------------------------------|
| REACT_APP_API_HOST | -            | хост API backend                                 |
| REACT_APP_API_ROOT | -            | корневой URL API backend (относительно API_HOST) |
|                    |              |                                                  |

## Управление зависимостями

Управление зависимостями осуществляется с помощью [Yarn](https://yarnpkg.com/getting-started).

Текущие используемые версии зафиксированы в `yarn.lock`.

Добавление и удаление зависимостей должно осуществлятся **только** средвствами `YARN`

- `yarn add <package>@[version]`
- `yarn up [package]@[version]`
- `yarn remove <package>`
