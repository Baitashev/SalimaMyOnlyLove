# Живая открытка для любимой девушки

Это статический сайт для GitHub Pages: HTML + CSS + JavaScript. Backend, Tomcat, Servlet и Spring Boot не нужны.

## Как вставить свои фотографии

1. Открой папку `images`.
2. Удали SVG-заглушки или оставь их как пример.
3. Добавь свои фото, например: `salima1.jpg`, `salima2.jpg`, `salima3.jpg`.
4. Открой `js/script.js` и поменяй массив `photos`:

```js
const photos = [
  { src: 'images/salima1.jpg', caption: 'Твой текст к фото' },
  { src: 'images/salima2.jpg', caption: 'Еще один теплый момент' }
];
```

## Как изменить имя

В `index.html` замени `Салима` на нужное имя.
В `js/script.js` замени текст переменной `letterText`.

## Как опубликовать на GitHub Pages

1. Создай новый репозиторий на GitHub, например `love-card`.
2. Загрузи в него все файлы из этой папки.
3. Открой Settings → Pages.
4. В Source выбери ветку `main`, папку `/root`.
5. Нажми Save.
6. Через несколько минут сайт будет доступен по ссылке вида:
   `https://ТВОЙ_ЛОГИН.github.io/love-card/`

## Файлы проекта

- `index.html` — структура сайта.
- `css/style.css` — красивая стилистика, адаптив, анимации.
- `js/script.js` — живая логика: печатающийся текст, сердца, галерея, модальное окно, кнопка поддержки.
- `images` — фотографии.
- `.nojekyll` — отключает Jekyll-сборку, чтобы GitHub Pages отдавал файлы как есть.
