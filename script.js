let c/* Estilos gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #121212; /* Cor de fundo escura */
    color: #e0e0e0; /* Texto claro para contraste */
    transition: background-color 0.5s, color 0.5s;
}

header {
    background-color: #3a0a4b; /* Roxo escuro */
    color: white;
    padding: 2rem;
    text-align: center;
    position: relative;
}

.theme-toggle {
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 20px;
    right: 60px;
}

.menu-button {
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 20px;
    right: 20px;
}

.menu {
    display: none;
    background-color: #3a0a4b;
    position: absolute;
    top: 60px;
    right: 20px;
    padding: 1rem;
    border-radius: 8px;
    z-index: 10;
}

.menu.open {
    display: block;
}

.menu ul {
    list-style: none;
}

.menu ul li {
    margin-bottom: 0.5rem;
    position: relative;
}

.submenu {
    display: none; /* Oculta submenus por padrão */
    position: absolute;
    top: 100%; /* Abaixo do item pai */
    left: 0;
    background-color: #3a0a4b;
    padding: 0.5rem;
    border-radius: 8px;
}

.menu ul li:hover > .submenu {
    display: block; /* Exibe submenu ao passar o mouse */
}

#temas {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
}

.tema-box {
    background-color: #2a0a35; /* Cor do quadrado */
    border: 1px solid #ffffff;
    border-radius: 10px;
    width: calc(45% - 20px); /* Ajustar largura dos quadrados */
    padding: 1.5rem;
    margin: 10px;
    transition: transform 0.3s, background-color 0.3s;
}

.tema-box:hover {
    transform: scale(1.05); /* Animação de aumento */
    background-color: #3a0a4b; /* Cor ao passar o mouse */
}

.carousel {
    position: relative;
    width: 80%;
    margin: 2rem auto;
}

.slides {
    display: flex;
    overflow: hidden;
    width: 100%;
}

.slide {
    width: 100%;
    height: auto; /* Ajusta altura */
    transition: transform 0.5s ease;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

button#back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3a0a4b;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

button#back-to-top:hover {
    background-color: #2a0a35;
}

footer {
    background-color: #3a0a4b; /* Roxo escuro */
    color: white;
    padding: 1rem;
    text-align: center;
    margin-top: 2rem;
}

/* Estilos para o tema claro */
body.light-theme {
    background-color: #ffffff; /* Fundo claro */
    color: #333333; /* Texto escuro */
}

header.light-theme, 
.menu.light-theme {
    background-color: #f2c94c; /* Amarelo claro */
    color: #333333; /* Texto escuro */
}

.tema-box.light-theme {
    background-color: #f7f7f7; /* Fundo claro dos quadrados */
    border: 1px solid #cccccc; /* Borda clara */
    color: #333333; /* Texto escuro */
}

.menu-button.active {
    transform: rotate(45deg); /* Rotação para "X" */
}

/* Animações para menu */
.menu-button.active::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #f2c94c; /* Cor do risco */
    transform: rotate(90deg); /* Rotação para criar o "X" */
}

.menu-button.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #f2c94c; /* Cor do risco */
    };
