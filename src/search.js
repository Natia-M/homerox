function getAllQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    propertyType: params.get("propertyType") || "",
    dealType: params.get("dealType") || "",
    status: params.get("status") || "",
    city: params.get("city") || "",
    minPrice: params.get("minPrice") || "",
    maxPrice: params.get("maxPrice") || "",
    minArea: params.get("minArea") || "",
    maxArea: params.get("maxArea") || "",
    searchQuery: params.get("searchQuery") || "",
  };
}

// დემო მონაცემები
const demoResults = [
  {
    title: "სტუდიო ბათუმის ცენტრში",
    location: "ბათუმი",
    price: 100,
    area: 40,
    image: "../images/flat1.avif",
    propertyType: "ბინა",
    dealType: "ქირავდება",
    city: "ბათუმი",
  },
  {
    title: "ბინა ბათუმი",
    location: "ბათუმი",
    price: 80,
    area: 35,
    image: "../images/flat1.avif",
    propertyType: "ბინა",
    dealType: "ქირავდება",
    city: "ბათუმი",
  },
  {
    title: "სახლი ზღვის ხედით",
    location: "ბათუმი",
    price: 250,
    area: 120,
    image: "../images/flat1.avif",
    propertyType: "სახლი",
    dealType: "იყიდება",
    city: "ბათუმი",
  },
  {
    title: "კომერციული ფართი თბილისში",
    location: "თბილისი",
    price: 500,
    area: 200,
    image: "../images/flat1.avif",
    propertyType: "კომერციული ფართი",
    dealType: "ქირავდება",
    city: "თბილისი",
  },
];

// მთავარი ლოგიკა
document.addEventListener("DOMContentLoaded", () => {
  const filters = getAllQueryParams();
  const resultsDiv = document.getElementById("results");
  const resultsTitle = document.getElementById("resultsTitle");

  // ფილტრაცია
  const filteredResults = demoResults.filter((item) => {
    const matchProperty =
      !filters.propertyType || item.propertyType === filters.propertyType;
    const matchDeal = !filters.dealType || item.dealType === filters.dealType;
    const matchCity = !filters.city || item.city === filters.city;
    const matchMinPrice =
      !filters.minPrice || item.price >= parseInt(filters.minPrice);
    const matchMaxPrice =
      !filters.maxPrice || item.price <= parseInt(filters.maxPrice);
    const matchMinArea =
      !filters.minArea || item.area >= parseInt(filters.minArea);
    const matchMaxArea =
      !filters.maxArea || item.area <= parseInt(filters.maxArea);
    const matchSearch =
      !filters.searchQuery || item.title.includes(filters.searchQuery);

    return (
      matchProperty &&
      matchDeal &&
      matchCity &&
      matchMinPrice &&
      matchMaxPrice &&
      matchMinArea &&
      matchMaxArea &&
      matchSearch
    );
  });

  // თუ შედეგი არ მოიძებნა
  if (filteredResults.length === 0) {
    resultsDiv.innerHTML = "<p>შედეგი ვერ მოიძებნა.</p>";
    return;
  }

  // შედეგების ჩვენება
  filteredResults.forEach((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="result-box">
          <img class="result-image" src="${item.image}" alt="${item.title}" width="300" height="160">
          <div class="result-description">
          <h3>${item.title}</h3>
          <p>მდებარეობა: ${item.location}</p>
          <p>ფასი: ₾${item.price}</p>
          <p>ფართი: ${item.area} მ²</p>
          </div>
        </div>
          `;
    resultsDiv.appendChild(card);
  });
});
document.querySelectorAll(".list-image").forEach((button) => {
  button.addEventListener("click", (e) => {
    const view = e.target.dataset.view;
    const results = document.getElementById("results");

    results.classList.remove("grid4-view", "grid2-view", "list1-view");

    if (view === "grid4") {
      results.classList.add("grid4-view");
    } else if (view === "grid2") {
      results.classList.add("grid2-view");
    } else if (view === "list1") {
      results.classList.add("list1-view");
    }
  });
});
