document.querySelectorAll("#menu li").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll("#menu li")
      .forEach((li) => li.classList.remove("active"));
    item.classList.add("active");

    document
      .querySelectorAll(".content-box")
      .forEach((box) => box.classList.remove("active"));
    const contentId = item.getAttribute("data-content");
    document.getElementById(contentId).classList.add("active");
  });
});
