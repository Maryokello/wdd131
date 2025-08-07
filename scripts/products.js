// scripts/products.js

const products = [
  { name: "Smart Plug", price: 19.99, category: "Power", image: "images/smart-plug.webp" },
  { name: "Smart Bulb", price: 12.99, category: "Lighting", image: "images/smart-bulb.webp" },
  { name: "Smart Camera", price: 49.99, category: "Security", image: "images/smart-camera.webp" },
  { name: "Smart Thermostat", price: 89.99, category: "Climate", image: "images/smart-thermostat.webp" }
];

function displayProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products.forEach(product => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
        <button onclick="addToFavorites('${product.name}')">Add to Favorites</button>
      </div>
    `;
  });
}

function addToFavorites(productName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(productName)) {
    favorites.push(productName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${productName} added to favorites!`);
  } else {
    alert(`${productName} is already in favorites.`);
  }
}

displayProducts();
