document.addEventListener('DOMContentLoaded', () => {
    // Alternar tema (claro/escuro)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // Definindo o tema padrão como escuro
    body.classList.add('dark-theme');
    themeIcon.textContent = '🌙'; // Ícone de lua para o modo escuro

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeIcon.textContent = '🌙'; // Ícone de lua para o modo escuro
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeIcon.textContent = '🌞'; // Ícone de sol para o modo claro
        }
    });

    // Menu hambúrguer toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links ul');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Função de "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
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

    // Carrossel de imagens
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    }

    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });

    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });

    changeSlide(0);
});
