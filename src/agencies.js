///////ტექსტის აკრეფის ანიმაცი////
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");

  const texts = ["მოძებნე სააგენტო...", "ჩაწერე სახელი ან ტელეფონი..."];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!input) return;

    const currentText = texts[textIndex];
    const visibleText = currentText.slice(0, charIndex);

    input.placeholder = visibleText;

    if (!isDeleting) {
      charIndex++;
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // პაუზა აკრეფის შემდეგ
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // შემდეგ ტექსტზე გადასვლა
      }
    }

    setTimeout(typeEffect, 100); // სიჩქარე
  }

  typeEffect();
});
