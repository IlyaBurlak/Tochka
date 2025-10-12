# Настройка ESLint и Prettier

## Установленные инструменты

- **ESLint** - для проверки качества кода
- **Prettier** - для форматирования кода
- **TypeScript** - для проверки типов

## Доступные команды

### Проверка кода
```bash
# Проверка типов TypeScript
npm run type-check

# Проверка ESLint
npm run lint

# Проверка форматирования Prettier
npm run format:check

# Комплексная проверка (типы + ESLint + форматирование)
npm run check
```

### Исправление кода
```bash
# Автоисправление ESLint
npm run lint:fix

# Форматирование файлов в src/
npm run format

# Форматирование всех файлов проекта
npm run format:all

# Комплексное исправление (ESLint + форматирование)
npm run fix
```

## Конфигурационные файлы

- `eslint.config.cjs` - конфигурация ESLint
- `.prettierrc` - конфигурация Prettier
- `.prettierignore` - файлы, исключенные из форматирования
- `tsconfig.json` - конфигурация TypeScript
- `tsconfig.node.json` - конфигурация TypeScript для Node.js файлов

## Рекомендации

1. **Перед коммитом** запускайте `npm run check` для проверки всего кода
2. **Для быстрого исправления** используйте `npm run fix`
3. **В IDE** настройте автоформатирование при сохранении файлов
4. **В CI/CD** добавьте `npm run check` в pipeline

## Настройка IDE

### VS Code
Установите расширения:
- ESLint
- Prettier - Code formatter

Добавьте в настройки:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### WebStorm
1. Включите ESLint в настройках (Languages & Frameworks > JavaScript > Code Quality Tools > ESLint)
2. Включите Prettier в настройках (Languages & Frameworks > JavaScript > Prettier)
3. Настройте автоформатирование при сохранении
