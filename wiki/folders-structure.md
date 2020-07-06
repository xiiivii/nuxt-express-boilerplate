# Файловая структура

## Client

```bash
.
+-- base           # общие инструменты:
|   +-- mixins     # - Vue-миксины
|   +-- directives # - Vue-директивы
|   +-- ...        # - Vue-...
|   +-- styles     # - SASS словари, миксины, ресеты и т.д.
|   +-- utils      # - вспомогательные js-функции
|
+-- components     # компоненты в стиле Atomic Design:
|   +-- atoms      # - атомарные компоненты
|   +-- molecules  # - составные компоненты
|   +-- organisms  # - сложные составные компоненты
|
+-- layouts        # стандартная папка Nuxt для лейаутов:
|   +-- ...        # https://nuxtjs.org/guide/views#layouts
|
+-- pages          # стандартная папка Nuxt для страниц:
|   +-- ...        # https://nuxtjs.org/guide/views#pages
|
+-- static         # стандартная папка Nuxt для статики:
|   +-- ...        # https://nuxtjs.org/guide/assets#static
|
+-- store          # стандартная папка Nuxt для Vuex
    +-- ...        # https://nuxtjs.org/guide/vuex-store

```


## Server


```bash
.
+-- controllers
|   +-- ...
|
+-- middlewares
|   +-- ...
|
+-- mocks       # временная папка для моков
|   +-- ...
|
+-- models
|   +-- ...
|
+-- routers
|   +-- ...
|
+-- utils
|   +-- ...
|
+-- index.js    # точка входа сервера
+-- *.js        # файлы, используемые в точке входа
```