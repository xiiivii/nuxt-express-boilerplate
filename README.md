# nuxt-express-boilerplate

## Команды

### Быстрый старт

```bash
# установить зависимости
$ npm i

# запустить dev-сервер
$ npm run dev
```

### Production сборка

```bash
# собрать проект
$ npm run build

# запустить сервер
$ npm run start
```

### Линтинг

```bash
# проверка всего проекта
$ npm run lint

# проверка всего проекта c фиксами, где это можно сделать
$ npm run lint-fix
```

### Очистка файлов Nuxt.js

```bash
$ npm run clean
```


## Организация проекта
- [Файловая структура](wiki/folders-structure)
- [Линтинг](wiki/linting)
- [Vue](wiki/code-vue)
- [SASS](wiki/code-sass)
- [Git](wiki/git)

## Документация
- [Vue.js 2.x](https://vuejs.org/v2/guide/)
- [Nuxt.js](https://nuxtjs.org)
- [SASS](https://sass-lang.com/)

## Нерешённые проблемы
- `eslint-plugin-vue` проверяет только `*.vue`  
*необходимо подружить `eslint-plugin-vue` с `*.js`*

- при изменении кода в папке `./server` перезапускается сборка `nuxt`  
*необходимо реализовать только перезапуск сервера, не затрагивая `nuxt`*
- не получилось настроить Webpack так, чтобы можно было получать в `*.js`-файлах переменную `$name` с помощью `:export` из файлов `_name.scss`  
*необходимо разобраться в сборке*