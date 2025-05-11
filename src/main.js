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
// მთავარი swiper ბოქსებისთვის
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
    nextEl: ".properties-slider .main-nav.swiper-button-next",
    prevEl: ".properties-slider .main-nav.swiper-button-prev",
  },
});

// შიდა swiper-ები სურათებისთვის
document.querySelectorAll(".property-swiper").forEach((swiperEl) => {
  new Swiper(swiperEl, {
    loop: true,
    navigation: {
      nextEl: swiperEl.querySelector(".swiper-button-next"),
      prevEl: swiperEl.querySelector(".swiper-button-prev"),
    },
  });
});
//ფორმის ჯს//
// ძებნის ფორმის გადაგზავნა search.html-ზე
document.querySelector("#main-search-button").addEventListener("click", () => {
  const propertyType = document.querySelector(
    'select[name="propertyType"]'
  ).value;
  const dealType = document.querySelector('select[name="dealType"]').value;
  const status = document.querySelector('select[name="status"]').value;
  const city = document.querySelector('select[name="city"]').value;
  const price = document.querySelector('select[name="price"]').value;
  const area = document.querySelector('select[name="area"]').value;

  const queryParams = new URLSearchParams({
    propertyType,
    dealType,
    status,
    city,
    price,
    area,
  });

  // გადააქვს ძებნის გვერდზე არჩეული პარამეტრებით
  window.location.href = `search.html?${queryParams.toString()}`;
});
