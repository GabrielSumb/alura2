document.addEventListener('DOMContentLoaded', () => {
    // Alternar tema (claro/escuro)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', () => {
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
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Função de "Voltar ao Topo"
    const backToTopButton = document.getElementById('back-to-top');
