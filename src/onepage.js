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
const sideSwiper = new Swiper(".sideAdSwiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
//ვალუტის ცვლის ჯს//
const switcherBtn = document.querySelector(".currency-switcher button");
const priceEl = document.querySelector(".price");

let currentCurrency = "gel";

switcherBtn.addEventListener("click", () => {
  let priceText = priceEl.textContent.trim();
  let priceValue = parseFloat(priceText.replace(/[^\d.]/g, ""));

  if (currentCurrency === "gel") {
    let usd = (priceValue / 2.5).toFixed(2);
    priceEl.textContent = `$${usd}`;
    currentCurrency = "usd";
  } else {
    let gel = (priceValue * 2.5).toFixed(0);
    priceEl.textContent = `${gel} ₾`;
    currentCurrency = "gel";
  }
});
//დარეკვა და ნომრის ჩვენება//
const callBtn = document.querySelector(".call-btn");

callBtn.addEventListener("click", () => {
  callBtn.textContent = "📞 557 93 34 88";
});
