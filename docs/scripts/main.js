// scripts/main.js

const featuredProducts = [
  { name: "Smart Plug", price: 19.99, description: "Works with Alexa & Google Assistant", image: "images/smart-plug.webp" },
  { name: "Smart Bulb", price: 12.99, description: "Energy-saving LED bulb", image: "images/smart-bulb.webp" },
  { name: "Smart Camera", price: 49.99, description: "1080p HD security camera", image: "images/smart-camera.webp" }
];

function displayFeaturedProducts() {
  const container = document.getElementById("featured-products");
  container.innerHTML = "";

  featuredProducts.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
        <button onclick="addToFavorites('${product.name}')">Add to Favorites</button>
      </div>
    `;
    container.innerHTML += productCard;
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

displayFeaturedProducts();
