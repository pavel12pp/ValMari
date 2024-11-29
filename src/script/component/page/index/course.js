import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

new Swiper('.course-slider', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".course__button-next",
    prevEl: ".course__button-prev",
    disabledClass: "disabled",
  },
  grabCursor: true,
  pagination: {
    el: ".course__pagination",
    clickable: true,
    bulletActiveClass: "active",
    renderBullet: function (index, className) {
      return `<span class="course__pagination-bullet ${className}"></span>`;
    },
  },
  slidesPerView: 1,
  spaceBetween: 21,
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
      spaceBetween: 56,
      slidesPerView: 3,
    },


  },
}) 