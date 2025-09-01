document.addEventListener("DOMContentLoaded", () => {
  const step1 = document.querySelector(".step-1");
  const step2 = document.querySelector(".step-2");
  const stepSale = document.querySelector(".step-sale");
  const stepDaily = document.querySelector(".step-daily");

  // ნაბიჯი 1
  const step1Btns = step1.querySelectorAll(".category-btn");
  step1Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      step1Btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      step2.classList.remove("hidden");
    });
  });

  // ნაბიჯი 2
  const step2Btns = step2.querySelectorAll(".category-btn");
  step2Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      step2Btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      stepSale.classList.add("hidden");
      stepDaily.classList.add("hidden");

      const value = btn.getAttribute("data-value");
      if (value === "sale") {
        stepSale.classList.remove("hidden");
      } else if (value === "daily") {
        stepDaily.classList.remove("hidden");
      }
    });
  });
});
