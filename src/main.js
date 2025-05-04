//super vip slider//
er = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  padding: "5rem",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 600,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// vip slider//
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".property-swiper").forEach((swiperEl) => {
    new Swiper(swiperEl, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  });
});
