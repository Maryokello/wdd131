// Step 1: Get references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Step 2: Load existing chapters from localStorage
let chaptersArray = JSON.parse(localStorage.getItem('chapters')) || [];
chaptersArray.forEach(chapter => renderChapter(chapter));

// Step 3: Add new chapter
button.addEventListener('click', () => {
  const chapter = input.value.trim();

  if (chapter !== '') {
    renderChapter(chapter);
    chaptersArray.push(chapter);
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));

    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
});

// Step 4: Press Enter = Add Chapter
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});

// ✅ Step 5: Render function for reusable code
function renderChapter(chapter) {
  const li = document.createElement('li');
  li.textContent = chapter;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${chapter}`);
  li.appendChild(deleteButton);

  // Handle delete
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);

    // Remove from array and localStorage
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
  });

  list.appendChild(li);
}
