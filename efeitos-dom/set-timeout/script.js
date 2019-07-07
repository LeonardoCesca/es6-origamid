// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeColor() {
    document.body.classList.toggle('active');
}
setInterval(changeColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
