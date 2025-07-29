// Get reference to container
const container = document.getElementById("temples-container");

// Sort/filter buttons
const homeBtn = document.getElementById("home");
const oldBtn = document.getElementById("old");
const newBtn = document.getElementById("new");
const largeBtn = document.getElementById("large");
const smallBtn = document.getElementById("small");

// Render function
function renderTemples(temples) {
  container.innerHTML = ""; // Clear previous content
  temples.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;
    container.appendChild(card);
  });
}

// Initial render
renderTemples(temples);

// Filter logic
homeBtn.addEventListener("click", () => renderTemples(temples));

oldBtn.addEventListener("click", () => {
  const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[1]) < 1900);
  renderTemples(oldTemples);
});

newBtn.addEventListener("click", () => {
  const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[1]) >= 2000);
  renderTemples(newTemples);
});

largeBtn.addEventListener("click", () => {
  const largeTemples = temples.filter(t => t.area > 90000);
  renderTemples(largeTemples);
});

smallBtn.addEventListener("click", () => {
  const smallTemples = temples.filter(t => t.area < 10000);
  renderTemples(smallTemples);
});

// Footer year and modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
