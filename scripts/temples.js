// ========== Footer Year & Last Modified ==========
const yearSpan = document.querySelector('#year');
const modifiedSpan = document.querySelector('#lastModified');

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
modifiedSpan.textContent = document.lastModified;

// ========== Mobile Navigation Toggle ==========
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

// Toggle nav visibility and accessibility attributes
menuButton.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuButton.textContent = isOpen ? '✖' : '☰';
  menuButton.setAttribute('aria-expanded', isOpen);
});
