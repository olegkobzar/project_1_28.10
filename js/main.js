const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: "auto",
  spaceBetween: 73,
  loop: true,
  pagination: {
    el: '.special-offers__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers__btn-next',
    prevEl: '.special-offers__btn-prev',
  },
});

const btnMenu = document.querySelector('.hero__header-btn-menu');
const menu = document.querySelector('.hero__nav');
const body = document.querySelector('body');

function toggleMobileMenu() {
  btnMenu.classList.toggle('hero__header-btn-menu--open');
  menu.classList.toggle('hero__nav--open');
  body.classList.toggle('overflow-hidden');
}

btnMenu.addEventListener('click', toggleMobileMenu);
