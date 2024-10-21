
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Função para trocar slides
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

// Toggle do tema
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    // Altera o símbolo do tema
    themeToggle.textContent = body.classList.contains('light') ? '🌙' : '🌞'; // Lua ou Sol
});

// Funcionalidade do menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Adiciona a classe ativa para mostrar o menu
    hamburger.classList.toggle('open'); // Adiciona a classe open para animação
});

// Botão "Voltar ao topo"
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.innerHTML = '↑';
document.body.appendChild(backToTopButton);

// Exibir botão "Voltar ao topo" ao rolar para baixo
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Retorna ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efeito de suavização ao voltar ao topo
    });
});

// Menu cascata para amigos
const amigosMenu = document.querySelector('#amigos');
const submenu = document.querySelector('.submenu');

amigosMenu.addEventListener('click', () => {
    submenu.classList.toggle('active');
});

// Fechar submenu ao clicar fora
document.addEventListener('click', (event) => {
    if (!amigosMenu.contains(event.target) && !submenu.contains(event.target)) {
        submenu.classList.remove('active');
    }
});
