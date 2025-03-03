// script.js
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000'; // Change to black on scroll
    } else {
        navbar.style.backgroundColor = '#222'; // Original dark background
    }
});
