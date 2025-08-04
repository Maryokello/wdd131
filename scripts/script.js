// Product array
const products = [
  { id: 1, name: "Toaster 3000" },
  { id: 2, name: "Blender X" },
  { id: 3, name: "Coffee Maker Pro" },
  { id: 4, name: "Air Fryer Max" }
];

// Populate select options
window.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('product');
  if (select) {
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }
});

