const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // ← Fixed selector

const PI = 3.14159;

let radius = 10;
let area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area.toFixed(2); // Optional: round to 2 decimal places

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;       // ← Fixed: don't reassign the variable!
areaOutput.textContent = area.toFixed(2);
