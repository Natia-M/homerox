const thumbSwiper = new Swiper(".thumb-swiper", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
});

const mainSwiper = new Swiper(".main-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
});
//რუკა//
const map = L.map("map").setView([41.7949, 44.8361], 15);

// OpenStreetMap ფენა
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// მარკერი ბინაზე
L.marker([41.7949, 44.8361])
  .addTo(map)
  .bindPopup("შერმადინის ქ. 124")
  .openPopup();

//სლაიდერი//
new Swiper(".sideAdSwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
});
