var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  // grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      400: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});