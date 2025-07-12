// Footer year and last modified date
const yearSpan = document.querySelector('#year');
const modifiedSpan = document.querySelector('#lastModified');

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Set last modified date of the document
modifiedSpan.textContent = document.lastModified;

// Responsive hamburger navigation toggle
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

// Add toggle functionality on click
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
