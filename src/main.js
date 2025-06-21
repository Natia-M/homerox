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
      slidesPerView: 3.8,
    },
    1400: {
      slidesPerView: 4,
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
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
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
//ვალუტის ცვლა//
document.querySelectorAll(".currency-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const container = e.target.closest(".property-price");
    const valueEl = container.firstChild;
    const price = parseFloat(valueEl.textContent);

    container
      .querySelectorAll(".currency-btn")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.textContent.trim() === "$") {
      valueEl.textContent = (price / 2.7).toFixed(2); // მაგ: ₾ → $
    } else {
      valueEl.textContent = (price * 2.7).toFixed(2); // $ → ₾
    }
  });
});

// DOM ჩატვირთვის შემდეგ
document.addEventListener("DOMContentLoaded", function () {
  // ======= ძებნის ფორმის გადაგზავნა search.html-ზე =======
  document
    .querySelector("#main-search-button")
    .addEventListener("click", (e) => {
      e.preventDefault(); // თავიდან აიცილე ფორმის სტანდარტული გაგზავნა

      const propertyType = document.querySelector(
        'select[name="propertyType"]'
      ).value;
      const dealType = document.querySelector('select[name="dealType"]').value;
      const city = document.querySelector('select[name="city"]').value;
      const minPrice = document.querySelector('input[name="minPrice"]').value;
      const maxPrice = document.querySelector('input[name="maxPrice"]').value;
      const minArea = document.querySelector('input[name="minArea"]').value;
      const maxArea = document.querySelector('input[name="maxArea"]').value;
      const searchQuery = document.querySelector(
        'input[name="searchQuery"]'
      ).value;

      const queryParams = new URLSearchParams({
        propertyType,
        dealType,
        city,
        minPrice,
        maxPrice,
        minArea,
        maxArea,
        searchQuery,
      });

      // გადაამისამართე search.html-ზე პარამეტრებით
      window.location.href = `search.html?${queryParams.toString()}`;
    });

  // ======= ფასის popup =======
  const priceToggleBtn = document.querySelector(".price-toggle");
  const pricePopup = document.querySelector(".price-popup");
  const priceApplyBtn = document.querySelector(".price-apply");

  priceToggleBtn?.addEventListener("click", () => {
    pricePopup.classList.toggle("hidden");
  });

  priceApplyBtn?.addEventListener("click", () => {
    pricePopup.classList.add("hidden");
  });

  // ======= ფართობის popup =======
  const areaToggleBtn = document.querySelector(".area-toggle");
  const areaPopup = document.querySelector(".area-popup");
  const areaApplyBtn = document.querySelector(".area-apply");

  areaToggleBtn?.addEventListener("click", () => {
    areaPopup.classList.toggle("hidden");
  });

  areaApplyBtn?.addEventListener("click", () => {
    areaPopup.classList.add("hidden");
  });

  // ======= გარე კლიკით დახურვა ორივეს =======
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".custom-price-dropdown")?.contains(e.target)) {
      pricePopup.classList.add("hidden");
    }
    if (!document.querySelector(".custom-area-dropdown")?.contains(e.target)) {
      areaPopup.classList.add("hidden");
    }
  });

  // ======= დეტალური ფილტრის მოდალი =======
  const filterIcon = document.querySelector(".filter");
  const modal = document.getElementById("filterModal");
  const closeBtn = document.querySelector(".close-filter");
  const selectableItems = document.querySelectorAll(".modal-label.selectable");

  filterIcon?.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // მონიშვნის მექანიკა (active კლასის ტოგლი)
  selectableItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  // გასუფთავება
  const eraseBtn = document.querySelector(".erase");
  eraseBtn?.addEventListener("click", () => {
    const activeItems = document.querySelectorAll(
      ".modal-label.selectable.active"
    );
    activeItems.forEach((el) => el.classList.remove("active"));
  });
});
//შენახვის ბუქმარქი//
function toggleSave(button) {
  button.classList.toggle("active");

  const isSaved = button.classList.contains("active");

  if (isSaved) {
    alert("შენახულია!");
  } else {
    alert("ამოღებულია შენახვებიდან");
  }
}

const toggle = document.getElementById("languageToggle");
const options = document.getElementById("languageOptions");

toggle.addEventListener("click", () => {
  options.classList.toggle("hidden");
});
//language//
document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", () => {
    const img = option.querySelector("img").src;
    const text = option.querySelector("span").innerText;

    toggle.querySelector("img").src = img;
    toggle.querySelector("span").innerText = text;

    options.classList.add("hidden");
  });
});

document.addEventListener("click", (e) => {
  if (!document.querySelector(".language-dropdown").contains(e.target)) {
    options.classList.add("hidden");
  }
});
//ads slider//
new Swiper(".adSwiper", {
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
