
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = toggleButton.querySelector('i');

  if (!toggleButton) return;

  // Initialize theme and icon
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  } else {
    // Default dark mode
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    }
  });
});


const settingsBtn = document.getElementById('settingsBtn');
const themePanel = document.getElementById('themePanel');
const colorPicker = document.getElementById('colorPicker');
const headerHeading = document.querySelector('.header h1');
const headerHeadinga = document.querySelector('.portfolio-section h2');
const headerHeadingc = document.querySelector('#apps-projects h2');

const headerHeadingb = document.querySelectorAll('.portfolio-grid h3');



// Toggle theme panel visibility on settings icon click
settingsBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Yeh zaroori hai taake click event document tak na jaye
  themePanel.classList.toggle('hidden');
});

// Close theme panel when clicking outside it
document.addEventListener('click', (e) => {
  if (!themePanel.classList.contains('hidden')) {
    // Agar click themePanel ke andar nahi hai aur settingsBtn pe bhi nahi
    if (!themePanel.contains(e.target) && !settingsBtn.contains(e.target)) {
      themePanel.classList.add('hidden');
    }
  }
});

// Change heading color on color picker change
colorPicker.addEventListener('input', (e) => {
  headerHeading.style.color = e.target.value;
  
});

// Change heading color on color picker change
colorPicker.addEventListener('input', (e) => {
  headerHeadinga.style.color = e.target.value;
  
});
// Change heading color on color picker change
colorPicker.addEventListener('input', (e) => {
  headerHeadingc.style.color = e.target.value;
  
});

colorPicker.addEventListener('input', (e) => {
  headerHeadingb.forEach(h3 => {
    h3.style.color = e.target.value;
  });
});
