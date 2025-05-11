// ფუნქცია, რომელიც იღებს ყველა URL პარამეტრს
function getAllQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    propertyType: params.get("propertyType") || "",
    dealType: params.get("dealType") || "",
    status: params.get("status") || "",
    city: params.get("city") || "",
    price: params.get("price") || "",
    area: params.get("area") || "",
  };
}

// ვიღებთ ყველა პარამეტრს
const filters = getAllQueryParams();

// საძიებო ველების შევსება მიღებული პარამეტრებით
document.querySelector('select[name="propertyType"]').value =
  filters.propertyType;
document.querySelector('select[name="dealType"]').value = filters.dealType;
document.querySelector('select[name="status"]').value = filters.status;
document.querySelector('select[name="city"]').value = filters.city;
document.querySelector('select[name="price"]').value = filters.price;
document.querySelector('select[name="area"]').value = filters.area;

// შედეგები (დემო მონაცემები, მოგვიანებით შეგიძლიათ შეცვალოთ რეალური მონაცემებით)
const demoResults = [
  {
    title: "სტუდიო ბათუმის ცენტრში",
    location: "ბათუმი",
    price: "₾100 დღიურად",
    image: "../images/flat1.avif",
    propertyType: "ბინა",
    dealType: "ქირავდება",
    city: "ბათუმი",
  },
  {
    title: "სტუდიო ბათუმის ცენტრში",
    location: "ბათუმი",
    price: "₾100 დღიურად",
    image: "../images/flat2.jpeg",
    propertyType: "ბინა",
    dealType: "ქირავდება",
    city: "ბათუმი",
  },
  {
    title: "სახლი ზღვის ხედით",
    location: "ბათუმი",
    price: "₾250 დღიურად",
    image: "https://via.placeholder.com/300x160?text=სახლი",
    propertyType: "სახლი",
    dealType: "ქირავდება",
    city: "ბათუმი",
  },
  {
    title: "ბინა ქუთაისში",
    location: "ქუთაისი",
    price: "₾80 დღიურად",
    image: "https://via.placeholder.com/300x160?text=ქუთაისი",
    propertyType: "ბინა",
    dealType: "ქირავდება",
    city: "ქუთაისი",
  },
];

// ფილტრაცია - თუ პარამეტრები შეიცავს მნიშვნელობებს
const filteredResults = demoResults.filter((item) => {
  return (
    (!filters.propertyType || item.propertyType === filters.propertyType) &&
    (!filters.dealType || item.dealType === filters.dealType) &&
    (!filters.city || item.city === filters.city)
  );
});

// შედეგების გამოჩენა
const resultsDiv = document.getElementById("results");
const resultsTitle = document.getElementById("resultsTitle");

// შედეგების ტექსტი
resultsTitle.textContent = `"${filters.city || "ყველა"}" - შედეგები:`;

// ყოველ შედეგზე ბარათის შექმნა
filteredResults.forEach((item) => {
  const card = document.createElement("div");
  card.className = "property-card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="property-info">
      <h3>${item.title}</h3>
      <p>${item.location}</p>
      <p class="price">${item.price}</p>
    </div>
  `;

  resultsDiv.appendChild(card);
});
