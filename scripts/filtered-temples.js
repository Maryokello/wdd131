// Reference to the container
const container = document.querySelector("#temples-container");

// Load temples data from global variable (set in filtered-temples-data.js)
let temples = window.temples || [];

/**
 * Utility to safely parse year from dedicated date string
 */
function getYear(dedicatedDate) {
  const year = new Date(dedicatedDate).getFullYear();
  return isNaN(year) ? 0 : year;
}

/**
 * Displays an array of temple objects in the DOM
 */
function displayTemples(templesArray) {
  container.innerHTML = ""; // Clear previous content

  if (templesArray.length === 0) {
    container.innerHTML = `<p class="no-results">No temples found for this filter.</p>`;
    return;
  }

  templesArray.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.name}</h3>
      <img src="${temple.image}" alt="Image of ${temple.name}" loading="lazy" width="300" height="200">
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// Filtering functions
function filterOldTemples() {
  const old = temples.filter(t => getYear(t.dedicated) < 1900);
  displayTemples(old);
}

function filterNewTemples() {
  const newer = temples.filter(t => getYear(t.dedicated) >= 2000);
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

// Add event listeners once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Display all temples initially
  displayTemples(temples);

  // Filter buttons
  document.querySelector("#home")?.addEventListener("click", e => {
    e.preventDefault();
    displayTemples(temples);
  });
  document.querySelector("#old")?.addEventListener("click", e => {
    e.preventDefault();
    filterOldTemples();
  });
  document.querySelector("#new")?.addEventListener("click", e => {
    e.preventDefault();
    filterNewTemples();
  });
  document.querySelector("#large")?.addEventListener("click", e => {
    e.preventDefault();
    filterLargeTemples();
  });
  document.querySelector("#small")?.addEventListener("click", e => {
    e.preventDefault();
    filterSmallTemples();
  });
});
