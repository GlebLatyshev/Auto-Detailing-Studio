# ✨ Premium Detailing Vladivostok

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS">
  <img src="https://img.shields.io/badge/EmailJS-FFA500?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS">
</div>

<br>

<p align="center">
  <b>Профессиональный детейлинг-центр во Владивостоке.</b><br>
  Современный лендинг для премиального автосервиса с полным спектром услуг по уходу за автомобилями.
</p>

---

## 📋 Оглавление
- [Особенности проекта](#особенности-проекта)
- [Технологический стек](#технологический-стек)
- [Структура проекта](#структура-проекта)
- [Установка и запуск](#установка-и-запуск)
- [Основные компоненты](#основные-компоненты)
- [Цветовая схема](#цветовая-схема)
- [Контакты](#контакты)

---

## 🌟 Особенности проекта

- 🎨 **Современный дизайн** — тёмная тема с акцентным золотым цветом (`#d4a017`)
- 📱 **Адаптивная вёрстка** — корректное отображение на всех устройствах
- 🎥 **Видео-фон** — замедленное видео (0.5x) процесса мойки в hero-секции
- 📬 **Форма обратной связи** — интеграция с EmailJS для отправки заявок без бэкенда
- 🖼️ **Фотогалерея "До/После"** — наглядная демонстрация результатов работы
- ⚡ **Плавная навигация** — скролл к секциям с помощью `react-scroll`

---

## 🛠️ Технологический стек

| Категория | Технологии |
|-----------|------------|
| **Core** | React 18, TypeScript, Vite |
| **Стили** | SCSS, CSS Modules |
| **Формы** | React Hook Form, Yup |
| **Почта** | EmailJS |
| **Навигация** | React Scroll |
| **Иконки** | React Icons |

---

## 📁 Структура проекта

BIBKA/
├── 📂 public/ # Статические файлы
├── 📂 src/
│ ├── 📂 assets/
│ │ ├── 📂 images/
│ │ │ ├── 📂 reviews/ # Фото клиентов
│ │ │ ├── 📂 rezultati/ # Фото "До/После"
│ │ │ └── 📂 services/ # Фото услуг
│ │ ├── 📂 video/ # Видео для фона
│ │ └── 📄 shield-logo.svg # Логотип
│ ├── 📂 components/ # React-компоненты
│ │ ├── 📄 About.tsx # О нас (преимущества)
│ │ ├── 📄 BeforeAfter.tsx # Галерея "До/После"
│ │ ├── 📄 Contacts.tsx # Контакты + форма
│ │ ├── 📄 Footer.tsx # Подвал
│ │ ├── 📄 Header.tsx # Шапка с навигацией
│ │ ├── 📄 Hero.tsx # Главный экран с видео
│ │ ├── 📄 Process.tsx # Этапы работы
│ │ ├── 📄 Reviews.tsx # Отзывы клиентов
│ │ └── 📄 Services.tsx # Услуги
│ ├── 📂 styles/
│ │ └── 📄 global.scss # Глобальные стили
│ ├── 📄 App.tsx # Главный компонент
│ ├── 📄 main.tsx # Точка входа
│ └── 📄 vite-env.d.ts # Типы для Vite
├── 📄 .env # Переменные окружения
├── 📄 index.html
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 vite.config.ts
text


---

## 🚀 Установка и запуск

Следуйте этим простым шагам, чтобы запустить проект локально:

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/yourusername/premium-detailing.git
   cd premium-detailing

    Установить зависимости
    bash

    npm install

    Настройка переменных окружения
    Создайте файл .env в корне проекта и добавьте ваши ключи EmailJS:
    env

    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key

    Запустить в режиме разработки
    bash

    npm run dev

    Собрать для продакшена
    bash

    npm run build

🧩 Основные компоненты
🎬 Hero

Замедленное видео процесса мойки (0.5x) с градиентным оверлеем для читаемости текста и кнопками призыва к действию.
💼 Services

Адаптивная сетка карточек услуг с превью-изображениями и описаниями.
🔄 BeforeAfter

Интерактивное сравнение "До/После" для разных автомобилей с пометками статуса и подписями.
📞 Contacts

    Валидация формы с помощью react-hook-form и yup

    Интеграция с EmailJS для отправки заявок

    Встроенная карта Google Maps с меткой студии

🎨 Цветовая схема
Назначение	Цвет (HEX)
Основной фон	#0f0f14, #0a0a0e
Карточки	#111111, #1a1a1f
Акцент	#d4a017 (золотой)
Текст	#e0e0e0
Границы	#222222, #2a2a2f
📞 Контакты

    📍 Адрес: г. Владивосток, ул. Острякова, 49

    📞 Телефон: +7 (950) 284-36-39

    ⏰ Режим работы: Ежедневно 09:00 – 21:00

Социальные сети:
