# goit-js-hw-08-gallery

Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного
изображения в модальном окне. Превью результата посмотри

Разбей задание на несколько подзадач:

- Создание и рендер разметки по массиву данных `galleryItems` из `app.js` и
  предоставленному шаблону.
- Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
  изображения.
- Открытие модального окна по клику на элементе галереи.
- Подмена значения атрибута `src` элемента `img.lightbox__image`.
- Закрытие модального окна по клику на кнопку
  `button[data-action="close-lightbox"]`.
- Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
  для того, чтобы при следующем открытии модального окна, пока грузится
  изображение, мы не видели предыдущее.

## Дополнительно

Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой
по работе с событиями.

- Закрытие модального окна по клику на `div.lightbox__overlay`.
- Закрытие модального окна по нажатию клавиши `ESC`.
- Пролистывание изображений галереи в открытом модальном окне клавишами "влево"
  и "вправо".
