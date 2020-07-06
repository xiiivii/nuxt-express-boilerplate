# Линтинг

## Автоматический линтинг

Линтинг запускается каждый раз перед коммитом, а также может быть запущен с помощью команд `npm run lint` или `npm run lint-fix`.

## Рекомендованные настройки IDE

### VS Code

1. Поставить плагин [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
после установки добавить в settings.json:
```json
{
    "eslint.format.enable": true,
    "eslint.run": "onSave",
    "eslint.validate": ["javascript", "vue"]
}
```

2. Поставить [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
после установки отключить встроенный линтинг в settings.json:
```json
{
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false,
}
```

3. Добавить автофикс при сохранении в settings.json
```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    }
}
```

### WebStorm

[WIP]