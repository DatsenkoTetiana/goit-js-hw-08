// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const boxGallery = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

boxGallery.insertAdjacentHTML("beforeend", markup);

function createMarkup(items) {
  return  items
  .map(item => { 
    return `
    <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  `;
  })
  .join(" ");
};
new SimpleLightbox(`.gallery a`, {
    captionsData: `alt`,
    captionsDelay: 250,
});

console.log(galleryItems);
