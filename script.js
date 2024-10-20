let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const backToTopBtn = document.getElementById('back-to-top');
const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('nav');

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '&#9728;'; // Ícone de sol
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '&#127769;'; // Ícone de lua
    }
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open'); // Alterna a classe 'open' no menu
    menuButton.classList.toggle('active'); // Animação do botão hamburguer
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block'; // Mostra o botão "voltar ao topo" ao descer
    } else {
        backToTopBtn.style.display = 'none'; // Oculta o botão "voltar ao topo" ao voltar para o topo
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Rolagem suave para o topo
});
