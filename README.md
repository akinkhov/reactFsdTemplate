# React FSD Template

[![Use this template](https://img.shields.io/badge/-Use%20this%20template-blue?logo=github&style=for-the-badge)](https://github.com/akinkhov/reactFsdTemplate/generate)

Шаблон проекта на **React + TypeScript + Vite**, построенный по архитектуре **FSD (Feature-Sliced Design)**.

---

## 🔧 Технологии

- ⚛️ React 18
- 🧠 TypeScript
- ⚡ Vite
- 🧩 SCSS Modules + cls
- 🔁 React Router DOM
- 🧰 Redux Toolkit
- 📁 FSD-структура

---

## 📁 Структура

```
src/
├── app/           # Инициализация, роутинг, стили
├── entities/      # Бизнес-сущности (User, Product)
├── features/      # Отдельные фичи (поиск, авторизация)
├── pages/         # Страницы приложения
├── shared/        # Переиспользуемое: UI, lib, config
│   ├── assets/
│   ├── types/
│   └── ui/
├── widgets/       # Крупные UI-секции (Header, Sidebar)
└── index.tsx
```

---

## 🚀 Быстрый старт

```bash
npm install
npm run dev
```

---

## 📦 Создан как шаблон

Этот репозиторий отмечен как **template**, поэтому ты можешь создать новый проект по кнопке:

👉 [Use this template](https://github.com/akinkhov/reactFsdTemplate/generate)

---
