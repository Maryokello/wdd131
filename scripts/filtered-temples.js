(() => {
  const container = document.getElementById("temples-container");

  function displayTemples(templesArray) {
    container.innerHTML = "";
    templesArray.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;
      container.appendChild(card);
    });
  }

  // Make sure 'temples' is defined before this script runs
  if (typeof temples !== "undefined" && Array.isArray(temples)) {
    document.getElementById("home").addEventListener("click", () =>
      displayTemples(temples)
    );

    document.getElementById("old").addEventListener("click", () =>
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
    );

    document.getElementById("new").addEventListener("click", () =>
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
    );

    document.getElementById("large").addEventListener("click", () =>
      displayTemples(temples.filter(t => t.area > 90000))
    );

    document.getElementById("small").addEventListener("click", () =>
      displayTemples(temples.filter(t => t.area < 10000))
    );

    // Display all by default
    displayTemples(temples);
  } else {
    console.error("❌ 'temples' array is not defined or loaded yet.");
  }

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
})();
