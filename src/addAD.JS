document.addEventListener("DOMContentLoaded", () => {
  const step1 = document.querySelector(".step-1");
  const step2 = document.querySelector(".step-2");
  const step3 = document.querySelector(".step-3");

  // პირველი სექციის ღილაკები
  const step1Btns = step1.querySelectorAll(".category-btn");
  step1Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      step1Btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      step2.classList.remove("hidden"); // მეორე სექციის ჩვენება
    });
  });

  // მეორე სექციის ღილაკები
  const step2Btns = step2.querySelectorAll(".category-btn");
  step2Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      step2Btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      step3.classList.remove("hidden"); // მესამე სექციის ჩვენება
    });
  });
});
