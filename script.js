document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const temaBoxes = document.querySelectorAll('.tema-box');
    const backToTopButton = document.getElementById('back-to-top');
    let currentTheme = 'dark';

    // Alternar tema
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'dark') {
            body.classList.add('light-theme');
            temaBoxes.forEach(box => box.classList.add('light-theme')); // Adiciona classe de tema claro a todos os quadrados
            currentTheme = 'light';
            themeToggle.textContent = '🌙'; // Muda para símbolo da lua
        } else {
            body.classList.remove('light-theme');
            temaBoxes.forEach(box => box.classList.remove('light-theme')); // Remove classe de tema claro de todos os quadrados
            currentTheme = 'dark';
            themeToggle.textContent = '☀️'; // Muda para símbolo do sol
        }
    });

    // Menu hambúrguer
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuButton.classList.toggle('active');
    });

    // Botão Voltar ao Topo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
