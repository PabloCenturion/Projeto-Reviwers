// Seleciona todos os quadrados
const quadrados = document.querySelectorAll('.quadrado');

quadrados.forEach(quadrado => {
    quadrado.addEventListener('click', () => {
        // Remove a classe 'sobreposto' de todos os quadrados
        quadrados.forEach(q => q.classList.remove('sobreposto'));
        // Adiciona a classe 'sobreposto' apenas ao quadrado clicado
        quadrado.classList.add('sobreposto');
    });
});
