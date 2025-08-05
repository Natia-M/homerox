///////ტექსტის აკრეფის ანიმაცი////
document.addEventListener("DOMContentLoaded", function () {
  const placeholderText = "მოძებნე სააგენტო...";
  const input = document.getElementById("searchInput");
  let index = 0;

  function typeEffect() {
    if (index < placeholderText.length) {
      input.placeholder += placeholderText.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  input.placeholder = "";
  typeEffect();
});
