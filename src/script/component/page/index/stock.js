import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

new Swiper('.stock-slider', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".stock__button-next",
    prevEl: ".stock__button-prev",
  },
  grabCursor: true,
  pagination: {
    el: ".stock__pagination",
    clickable: true,
    bulletClass: 'stock__pagination-bullet',
    bulletActiveClass: "active",
    renderBullet: function (index, className) {
      return `<span class="stock__pagination-bullet ${className}"></span>`;
    },
  },
  slidesPerView: 1,
  spaceBetween: 20,
  slideActiveClass: "active",
  watchSlidesProgress: true,
  slideVisibleClass: 'visible',
  breakpoints: {

    600: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
  },
}) 