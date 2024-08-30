document.querySelector('.menu-hamburguer').addEventListener('click', function() {
    document.querySelector('.menu-cascata').classList.toggle('show');
});

document.querySelector('.menu-sucos > a').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.menu-sucos').classList.toggle('show-sucos');
});




