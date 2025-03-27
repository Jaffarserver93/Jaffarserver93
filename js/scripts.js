// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themes = ['system', 'light', 'dark'];
let currentTheme = localStorage.getItem('theme') || 'system';

function applyTheme() {
    if (currentTheme === 'system') {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.toggle('theme-dark', systemDark);
        body.classList.toggle('theme-light', !systemDark);
    } else {
        body.classList.add(`theme-${currentTheme}`);
        body.classList.remove(...themes.filter(t => t !== currentTheme).map(t => `theme-${t}`));
    }
    localStorage.setItem('theme', currentTheme);
}

// Add all other JavaScript here
