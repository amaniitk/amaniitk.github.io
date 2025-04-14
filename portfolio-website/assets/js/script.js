const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage to maintain user's theme preference
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});
