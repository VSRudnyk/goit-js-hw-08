// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import 'simplelightbox/dist/simple-lightbox.min.css';

import simpleLightbox from 'simplelightbox';

console.log(simpleLightbox);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
         `;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
