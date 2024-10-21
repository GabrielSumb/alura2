document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    // Função para exibir apenas a imagem atual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none'; // Apenas a imagem atual visível
        });
    }

    // Exibir o slide inicial
    showSlide(currentSlide);

    // Botão "Próximo" - Trocar para o próximo slide
    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length; // Vai para o próximo slide, reinicia ao final
        showSlide(currentSlide);
    });

    // Botão "Anterior" - Trocar para o slide anterior
    prevButton.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Vai para o slide anterior
        showSlide(currentSlide);
    });
});
