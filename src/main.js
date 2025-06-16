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
      slidesPerView: 4,
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

//ფორმის ჯს//
// ძებნის ფორმის გადაგზავნა search.html-ზე
document.querySelector("#main-search-button").addEventListener("click", () => {
  const propertyType = document.querySelector(
    'select[name="propertyType"]'
  ).value;
  const dealType = document.querySelector('select[name="dealType"]').value;
  const city = document.querySelector('select[name="city"]').value;
  const price = document.querySelector('select[name="price"]').value;
  const area = document.querySelector('select[name="area"]').value;

  const queryParams = new URLSearchParams({
    propertyType,
    dealType,
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
  const selectableItems = document.querySelectorAll(".selectable");

  // მოდალის გახსნა
  filterIcon?.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // მოდალის დახურვა
  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // მონიშვნა (active კლასის დამატება/ამოღება)
  selectableItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
    document.querySelector(".erase").addEventListener("click", () => {
      const selectedFilters = document.querySelectorAll(
        ".modal-label.selectable.selected"
      );
      selectedFilters.forEach((el) => el.classList.remove("selected"));
    });
  });
});
// ენის მოდული//
// const toggle = document.getElementById("languageToggle");
// const modal = document.getElementById("languageModal");

// toggle.addEventListener("click", () => {
//   modal.classList.toggle("hidden");
// });

// document.querySelectorAll(".language-option").forEach((option) => {
//   option.addEventListener("click", () => {
//     document
//       .querySelectorAll(".custom-radio")
//       .forEach((r) => r.classList.remove("active"));
//     option.querySelector(".custom-radio").classList.add("active");
//     const selectedText = option.querySelector(".language-label").textContent;
//     toggle.querySelector("div").textContent = selectedText;
//     modal.classList.add("hidden");
//   });
// });
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

document.querySelectorAll(".language-option").forEach((option) => {
  option.addEventListener("click", () => {
    const img = option.querySelector("img").src;
    const text = option.querySelector("span").innerText;

    toggle.querySelector("img").src = img;
    toggle.querySelector("span").innerText = text;

    options.classList.add("hidden");
    // აქ შეგიძლია ენის ცვლაც გაუკეთო, მაგალითად localStorage.setItem("lang", ...), ან redirect
  });
});

// დახუროს სხვაგან დაჭერისას
document.addEventListener("click", (e) => {
  if (!document.querySelector(".language-dropdown").contains(e.target)) {
    options.classList.add("hidden");
  }
});
