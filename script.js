const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const galleryItems = [...document.querySelectorAll('.gallery-item')];
document.querySelectorAll('.gallery-item, .gallery-open').forEach((item) => item.addEventListener('click', () => {
  const selected = item.classList.contains('gallery-item') ? item : galleryItems[0];
  const image = selected.querySelector('img');
  lightboxImage.src = image.src; lightboxImage.alt = image.alt;
  lightboxCaption.textContent = selected.querySelector('span').textContent;
  lightbox.showModal();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });

document.querySelector('.availability-form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.form-message').textContent = 'Gracias. Muy pronto podrás comprobar la disponibilidad aquí mismo.';
});
