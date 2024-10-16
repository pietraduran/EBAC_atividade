const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(document.getElementById('campoA').value);
    const valorB = parseFloat(document.getElementById('campoB').value);

    if (valorB > valorA) {
        mensagem.textContent = 'Formulário válido! B é maior que A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido! B deve ser maior que A.';
        mensagem.style.color = 'red';
    }
});