function updateFooterDates() {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (modifiedSpan) {
    const modifiedDate = new Date(document.lastModified);
    const formatted = modifiedDate.toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    modifiedSpan.textContent = formatted;
  }
}

function setupMobileMenuToggle() {
  const menuButton = document.getElementById("menu");
  const nav = document.getElementById("nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.textContent = isOpen ? "✖" : "☰";
      menuButton.setAttribute("aria-expanded", isOpen);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateFooterDates();
  setupMobileMenuToggle();
});
