// ========== Footer Year & Last Modified ==========
function updateFooterDates() {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
}

// ========== Mobile Navigation Toggle ==========
function setupMobileMenuToggle() {
  const menuButton = document.getElementById("menu");
  const navMenu = document.querySelector(".navigation");

  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuButton.textContent = isOpen ? "✖" : "☰";
      menuButton.setAttribute("aria-expanded", isOpen);
    });
  }
}

// ========== Initialize ==========
export function initializeApp() {
  updateFooterDates();
  setupMobileMenuToggle();
}
