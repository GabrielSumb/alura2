// Alternar entre temas (escuro e claro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️'; // Ícone de sol para o tema claro
    } else {
        themeIcon.textContent = '🌙'; // Ícone de lua para o tema escuro
    }
});

// Carrossel de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

// Menu hambúrguer
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Botão "voltar ao topo"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
