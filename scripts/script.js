document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");
  const products = [
    "Toaster 3000",
    "Blender Pro",
    "Air Fryer Max",
    "Coffee Maker Deluxe"
  ];

  // Clear fallback options except the first placeholder
  while (productSelect.options.length > 1) {
    productSelect.remove(1);
  }

  // Add dynamic options
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
  });

  // Update last modified date
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;
});


