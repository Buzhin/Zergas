const themeBtn = document.getElementById('theme-btn');
const root = document.documentElement;
const moonIcon = '<i class="fas fa-moon"></i>';
const sunIcon = '<i class="fas fa-sun"></i>';

let isDarkMode = false;

themeBtn.addEventListener('click', () => {
    if (isDarkMode) {
        root.classList.remove('dark');
        root.style.setProperty('--background-color', '#f5f5f5');
        root.style.setProperty('--text-color', '#333');
        themeBtn.innerHTML = sunIcon;
    } else {
        root.classList.add('dark');
        root.style.setProperty('--background-color', '#333');
        root.style.setProperty('--text-color', '#f9f9f9');
        themeBtn.innerHTML = moonIcon;
    }
    isDarkMode = !isDarkMode;
});
