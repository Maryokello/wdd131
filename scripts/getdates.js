// getdates.js

// Dynamically insert the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically insert the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
// Safely insert the current year
const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Safely insert the last modified date
const lastModifiedPara = document.getElementById("lastModified");
if (lastModifiedPara) {
  lastModifiedPara.textContent = "Last Modified: " + document.lastModified;
}

