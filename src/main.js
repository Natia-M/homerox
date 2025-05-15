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
//ფასის ფანჯარა//
document.addEventListener("DOMContentLoaded", function () {
  // ფასი
  const toggleBtn = document.querySelector(".price-toggle");
  const popup = document.querySelector(".price-popup");
  const applyBtn = document.querySelector(".price-apply");

  toggleBtn.addEventListener("click", () => {
    popup.classList.toggle("hidden");
  });

  applyBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // ფართი
  const areaToggle = document.querySelector(".area-toggle");
  const areaPopup = document.querySelector(".area-popup");
  const areaApply = document.querySelector(".area-apply");

  areaToggle.addEventListener("click", () => {
    areaPopup.classList.toggle("hidden");
  });

  areaApply.addEventListener("click", () => {
    areaPopup.classList.add("hidden");
  });

  // გარეთ კლიკით ორივეს დახურვა
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".custom-price-dropdown").contains(e.target)) {
      popup.classList.add("hidden");
    }
    if (!document.querySelector(".custom-area-dropdown").contains(e.target)) {
      areaPopup.classList.add("hidden");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const filterIcon = document.querySelector(".filter");
  const modal = document.getElementById("filterModal");
  const closeBtn = document.querySelector(".close-filter");

  filterIcon.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
