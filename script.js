// Variáveis para elementos do DOM
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const themeToggle = document.querySelector('.theme-toggle');
const slides = document.querySelectorAll('.slide');
const backToTopButton = document.getElementById('back-to-top');

let currentSlide = 0;

// Função para alternar o menu hamburger
menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuButton.classList.toggle('active'); // Animação do hamburger
});

// Função para alternar o tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    // Mudar ícone de tema
    if (document.body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '🌙'; // Lua para tema escuro
    } else {
        themeToggle.innerHTML = '☀️'; // Sol para tema claro
    }
});

// Navegação do carrossel
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

// Mostrar/ocultar botão "Voltar ao Topo"
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
});
