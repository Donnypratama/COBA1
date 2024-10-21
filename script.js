const toggleButton = document.getElementById('toggleButton');
let isDarkMode = false;

toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    toggleButton.textContent = isDarkMode ? 'Ubah ke Mode Terang' : 'Ubah ke Mode Gelap';
});