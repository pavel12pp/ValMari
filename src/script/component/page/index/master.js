import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

new Swiper('.master-slider', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".master__button-next",
    prevEl: ".master__button-prev",
    disabledClass: "disabled",
  },
  grabCursor: true,
  pagination: {
    el: ".master__pagination",
    clickable: true,
    bulletClass: 'master__pagination-bullet',
    bulletActiveClass: "active",
    renderBullet: function (index, className) {
      return `<span class="master__pagination-bullet ${className}"></span>`;
    },
  },
  slidesPerView: 1,
  spaceBetween: 20,
  slideActiveClass: "active",
  watchSlidesProgress: true,
  slideVisibleClass: 'visible',
  breakpoints: {

    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      spaceBetween: 153,
      slidesPerView: 2,
    },
  },
}) 