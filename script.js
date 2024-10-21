document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    const submenuItems = document.querySelectorAll('.menu > ul > li');
    const temaBoxes = document.querySelectorAll('.tema-box');
    const backToTopButton = document.getElementById('back-to-top');
    let currentTheme = 'dark';

    // Alternar tema
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'dark') {body.classList.add('light-theme');
            temaBoxes.forEach(box => box.classList.add('light-theme'));
            currentTheme = 'light';
            themeToggle.textContent = '🌙'; // Mudar para o ícone de lua
        } else {
            body.classList.remove('light-theme');
            temaBoxes.forEach(box => box.classList.remove('light-theme'));
            currentTheme = 'dark';
            themeToggle.textContent = '☀️'; // Mudar para o ícone de sol
        }
    });

    // Menu hambúrguer
    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuButton.classList.toggle('active');
    });

    // Exibir submenu
    submenuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });
        item.addEventListener('mouseleave', function() {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });

    // Mostrar botão voltar ao topo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Voltar ao topo
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
