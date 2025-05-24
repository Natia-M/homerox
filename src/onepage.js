//რუკა//
const map = L.map("map").setView([41.7949, 44.8361], 15);

// OpenStreetMap ფენა
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// მარკერი ბინაზე
L.marker([41.7949, 44.8361])
  .addTo(map)
  .bindPopup("შერმადინის ქ. 124")
  .openPopup();
