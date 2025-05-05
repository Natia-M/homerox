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
// შიდა ფოტო სლაიდერებისთვის
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".property-swiper").forEach((swiperEl) => {
    const nextEl = swiperEl.querySelector(".swiper-button-next");
    const prevEl = swiperEl.querySelector(".swiper-button-prev");

    new Swiper(swiperEl, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl,
        prevEl,
      },
    });
  });

  // გარე ბოქსების სლაიდერი
  new Swiper(".myPropertiesSwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".properties-slider .swiper-button-next",
      prevEl: ".properties-slider .swiper-button-prev",
    },
  });
});
