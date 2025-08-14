// Navigation click handlers
document.querySelector('.navname').addEventListener('click', function() {
  window.location.href = window.location.pathname;
});

document.querySelector('.hire-me').addEventListener('click', function() {
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.portfolio').addEventListener('click', function() {
  document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.projects').addEventListener('click', function() {
  window.location.href = 'project.html';
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Typed intro lines
const lines = [
  "Hello",
  "I'm Haseeb Khan",
  "a Web & Android App Developer"
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    let currentLineElement = document.getElementById(`line${lineIndex + 1}`);

    if (charIndex < lines[lineIndex].length) {
      currentLineElement.innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 100);
    } else {
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 500);
    }
  }
}
typeLine();

// Theme panel toggle and color picker
const settingsBtn = document.getElementById('settingsBtn');
const themePanel = document.getElementById('themePanel');
const colorPicker = document.getElementById('colorPicker');

settingsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  themePanel.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!themePanel.classList.contains('hidden')) {
    if (!themePanel.contains(e.target) && !settingsBtn.contains(e.target)) {
      themePanel.classList.add('hidden');
    }
  }
});

const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
colorPicker.addEventListener('input', (e) => {
  const selectedColor = e.target.value;
  headings.forEach(heading => {
    heading.style.color = selectedColor;
  });
});

// Theme toggle with Font Awesome icons
const themeToggleBtn = document.getElementById('themeToggle');

// Make sure themeToggleBtn contains an <i> element for icon, e.g. <button id="themeToggle"><i class="fa fa-moon"></i></button>

function updateButtonIcon() {
  const icon = themeToggleBtn.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  updateButtonIcon();
});

// Initialize icon on page load
updateButtonIcon();
