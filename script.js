let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const themeToggleButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('nav.menu');
const backToTopButton = document.getElementById('back-to-top');

// Função para mudar o slide
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

// Função para mudar tema
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.querySelector('header').classList.toggle('light-theme');
    menu.classList.toggle('light-theme');
    themeToggleButton.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        themeToggleButton.innerHTML = '🌙'; // Lua
    } else {
        themeToggleButton.innerHTML = '☀️'; // Sol
    }
});

// Função para abrir/fechar o menu hambúrguer
menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuButton.classList.toggle('active');

    if (menuButton.classList.contains('active')) {
        menuButton.innerHTML = '✖'; // Mudar para X
    } else {
        menuButton.innerHTML = '☰'; // Voltar para 3 riscos
    }
});

// Função para voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animação suave
    });
});

// Mostrar botão "voltar ao topo"
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Inicialização do carrossel
changeSlide(0);
