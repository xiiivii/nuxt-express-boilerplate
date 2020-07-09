# Особенности, связанные с SASS

## Основные правила

+ При всех импортах scss файлов c нижним подчеркиванием обязательно указывать нижнее подчеркивание – это делает однозначным факт того, что подключены "сервисные" стили
+ Необходимо сохранять SASS максимально простым: стараться избегать лишней логики, циклов, вычислений и "магии". Если таковые появляются, то обязательно документировать данные изменения как минимум в комментариях в файлах
+ Форматирование импортов должно выглядеть следующим образом:
```scss
@import './_name';
@import './_vars';

@import './elems/elem_1';
@import './elems/elem_2';

@import './mods/mods_1';
@import './mods/mods_2';


#{$block}
{
    // ...
}
```

## Файлы в компонентах

### _name.scss

Файл, который должен быть у каждого компонента, который имеет `styles.scss`. Имя указывается с префиксом `ga` и пишется в `kebab-case`:

```scss
$name: 'ga-header';
$block: '.' + $name;
```

Затем этот файл импортируется в `styles.scss` и используется для написания селекторов и имен анимаций:

```scss
@import './_name';


#{$block}
{
    color: #f00;

    &__elem
    {
        animation: #{$name}-jumping .5s;
    }
}

@keyframes #{$name}-jumping
{
    // ...
}
```


### _vars.scss

Необязательный файл, который используется для проксирования значений из глобальных (базовых) в локальные, а также централизации "подвижных частей" компонента. Именно здесь стоит импортировать файлы с базовыми миксинами, чтобы затем их использовать в `styles.scss`.

_vars.scss
```scss
@import '~/base/styles/_colors';
@import '~/base/styles/_states';


$link-padding: 20px;

$link-color: get-color('foreground');
$link-color-hover: get-color('accent-primary');
```

styles.scss
```scss
@import './_name';
@import './_vars';


#{$block}
{
    &__link
    {
        padding: $link-padding;

        color: $link-color;

        @include state-hover
        {
            &:hover
            {
                color: $link-color-hover;
            }
        }
    }
}
```

## Решение: _states.scss

В данный момент реализация компонента `App` выставляет классы для `body` в зависимости от поддержки / определения следующих фич:

1. Поддержка выражения `@media (hover)`  
    `ga-app_hover_unsupported` – не поддерживается  
    `ga-app_hover_supported` – поддерживается

2. Способ получения фокуса интерактивным элементом  
    `ga-app_focus_keyboard` – с помощью клавиатуры  
    `ga-app_focus_pointer` – с помощью указателя

Можно использовать эти классы, чтобы определять необходимый кейс:

```scss
@media (hover: hover)
{
    .ga-app_hover_supported .ga-link:hover
    {
        // ...
    }
}

.ga-app_focus_keyboard .ga-link:focus
{
    // ...
}
```

Очевидно, такой способ не является самым удобным, поэтому был создан файл `_states.scss`, который включает в себя три миксина: `state-hover`, `state-focus` и `state-any`.

### `state-hover`

Используется для описания `:hover` и `:active`

Оборачивает переданные селекторы в конструкцию, которая будет применять их только в случае, если устройство попадает под выражение `@media (hover: hover)`, либо не поддерживает данное выражение вовсе:

```scss
$block: '.ga-link';

#{$block}
{
    @include state-hover
    {
        &:hover
        {
            color: #f00;
        }
    }
}

// превратится в

@media (hover: hover)
{
    .ga-app_hover_supported .ga-link:hover
    {
        color: #f00;
    }
}

.ga-app_hover_unsupported .ga-link:hover
{
    color: #f00;
}
```

### `state-focus`
Используется для описания `:focus`

Оборачивает переданные селекторы в конструкцию, которая будет применять их только в случае, если фокус был получен с помощью клавиатуры:

```scss
$block: '.ga-link';

#{$block}
{
    @include state-focus
    {
        &:focus
        {
            outline-color: #f00;
        }
    }
}

// превратится в

.ga-app_focus_keyboard .ga-link:focus
{
    outline-color: #f00;
}
```

### `state-any`
Используется для любых других состояний после `state-*`

Оборачивает переданные селекторы в конструкцию, которая просто увеличит их специфичность, чтобы иметь возможность перебить ранее описанные стили:

```scss
$block: '.ga-link';

#{$block}
{
    @include state-any
    {
        &:disabled
        {
            opacity: .5;
        }

        &[readonly]
        {
            opacity: .75;
        }
    }
}

// превратится в

.ga-app .ga-link:disabled
{
    opacity: .5;
}

.ga-app .ga-link[readonly]
{
    opacity: .75;
}
```

### Проблемы c комбинированием
В виду особенности работы миксинов в SASS, существует проблема использования комбинированных селекторов со `state-*`.

```scss
$block: '.ga-link';

#{$block}
{
    @include state-focus
    {
        &__inner &__text:focus
        {
            color: #f00;
        }
    }
}

// превратится в

.ga-app_focus_keyboard .ga-link__inner .ga-app_focus_keyboard .ga-link__text:focus
{
    color: #f00;
}
```

Дело в том, что к каждому `&` в  записи подставится обёртка. Чтобы решить проблему нужно немного изменить код:

```scss
$block: '.ga-link';

#{$block}
{
    @include state-focus
    {
        &__inner #{$block}__text:focus
        {
            color: #f00;
        }
    }
}
```

Обёртка применится к `&` и не применится к `#{$block}`, в итоге мы получим необходимый код:

```scss
.ga-app_focus_keyboard .ga-link__inner .ga-link__text:focus
{
    color: #f00;
}
```