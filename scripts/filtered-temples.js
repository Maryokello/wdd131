// filtered-temples.js

// Reference to the container
const container = document.querySelector("#temples-container");

// Load temples data from the global variable (set in filtered-temples-data.js)
let temples = window.temples || [];

// Function to display temples
function displayTemples(templesArray) {
  container.innerHTML = ""; // Clear previous content

  templesArray.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.name}</h3>
      <img src="${temple.image}" alt="${temple.name}">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Filtering functions
function filterOldTemples() {
  const old = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(old);
}

function filterNewTemples() {
  const newer = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
  displayTemples(newer);
}

function filterLargeTemples() {
  const large = temples.filter(t => t.area > 90000);
  displayTemples(large);
}

function filterSmallTemples() {
  const small = temples.filter(t => t.area < 10000);
  displayTemples(small);
}

// Event listeners for filter buttons
document.querySelector("#home").addEventListener("click", () => displayTemples(temples));
document.querySelector("#old").addEventListener("click", filterOldTemples);
document.querySelector("#new").addEventListener("click", filterNewTemples);
document.querySelector("#large").addEventListener("click", filterLargeTemples);
document.querySelector("#small").addEventListener("click", filterSmallTemples);

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  // Update footer year and last modified
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = document.lastModified;
});
