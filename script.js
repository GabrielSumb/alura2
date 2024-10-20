// Inicializa o tema padrão
let currentTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(currentTheme);
updateThemeButton();

// Função para mudar tema
const themeToggleButton = document.querySelector('.theme-toggle');

themeToggleButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', currentTheme);
    updateThemeButton();
});

// Atualiza o botão de tema
function updateThemeButton() {
    themeToggleButton.innerHTML = currentTheme === 'dark' ? '🌞' : '🌙';
}

// Função do menu hambúrguer
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links ul');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Adiciona a funcionalidade de voltar ao topo
const backToTopButton = document.getElementById('back-to-top');

// Mostra ou esconde o botão de voltar ao topo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Função de voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Controle do carrossel de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

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
