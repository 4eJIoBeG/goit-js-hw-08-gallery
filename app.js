import galleryItems from './gallery-items.js';

const root = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
};

//Create Gallery
const createGallery = () => {
  const images = galleryItems
    .map(
      image =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>`,
    )
    .join('');

  root.gallery.insertAdjacentHTML('afterbegin', images);
};

createGallery();

//Open modal
const openModal = event => {
  event.preventDefault();
  window.addEventListener('keydown', closeModal);
  if (event.target.nodeName === 'IMG') {
    root.modal.classList.add('is-open');
    root.modalImage.src = event.target.dataset.source;
    root.modalImage.alt = event.target.alt;
  }
  return;
};
//Close modal
const closeModal = event => {
  if (
    event.target.dataset.action === 'close-lightbox' ||
    event.target.className === 'lightbox__overlay' ||
    event.code === 'Escape'
  ) {
    root.modalImage.src = '';
    root.modalImage.alt = '';
    root.modal.classList.remove('is-open');
    window.removeEventListener('keydown', closeModal);
  }
  return;
};

root.modal.addEventListener('click', closeModal);
root.gallery.addEventListener('click', openModal);
root.modalImage.addEventListener('keydown', closeModal);
