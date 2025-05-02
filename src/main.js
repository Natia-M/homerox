//slider//
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
swiper.mount();
//Vips slider//
