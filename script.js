let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const themeToggleButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
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

// Função para alternar entre tema claro e escuro
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');
    themeToggleButton.innerHTML = isLightTheme ? '🌙' : '☀️'; // Alterar ícone
});

// Função para abrir/fechar menu hambúrguer
menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuButton.classList.toggle('open');
});

// Mostrar botão "Voltar ao Topo" ao rolar
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Função para voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
