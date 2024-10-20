// Seleção de elementos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const themeToggle = document.querySelector('.theme-toggle');
const backToTopButton = document.getElementById('back-to-top');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links ul');

// Função para mudar os slides do carrossel
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

// Função para alternar entre temas
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌙' : '🌞';
});

// Mostrar o botão "Voltar ao Topo" quando rolar a página
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Voltar ao topo da página
backToTopButton.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Abrir e fechar o menu hamburguer
hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    navLinks.classList.toggle('open');
});
