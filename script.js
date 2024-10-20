document.addEventListener('DOMContentLoaded', () => {
    // Alternar tema (claro/escuro)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', () => {
        // Trocar entre os temas claro e escuro
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.textContent = '🌙'; // Ícone de lua para o modo escuro
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.textContent = '🌞'; // Ícone de sol para o modo claro
        }
    });

    // Menu hambúrguer toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links ul');

    hamburgerMenu.addEventListener('click', () => {
        // Alterna a visibilidade do menu
        navLinks.classList.toggle('open');
    });

    // Função de "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            // Mostra o botão quando a página rola mais de 300px
            backToTopButton.style.display = 'block';
        } else {
            // Esconde o botão se não estiver na parte inferior
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        // Animação suave de rolar ao topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Carrossel
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

    // Mudar slide ao clicar nos botões
    nextButton.addEventListener('
