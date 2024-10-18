// script.js
let indiceSlide = 0;
mostrarSlide(indiceSlide);

function mudarSlide(n) {
    mostrarSlide(indiceSlide += n);
}

function mostrarSlide(n) {
    const slides = document.querySelectorAll(".slide");
    
    if (n >= slides.length) {
        indiceSlide = 0;
    }
    if (n < 0) {
        indiceSlide = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === indiceSlide) ? "block" : "none";
    });
}
