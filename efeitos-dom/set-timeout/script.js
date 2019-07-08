// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function changeColor() {
    document.body.classList.toggle('active');
}
setInterval(changeColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const time = document.querySelector('.time');

start.addEventListener('click', startTime);
pause.addEventListener('click', pauseTime);
pause.addEventListener('dblclick', resetTime);

let i = 0;
let timer;

function startTime() {
    timer = setInterval(() => {
        time.innerText = i++;
    }, 100);
    start.setAttribute('disabled', '');
}

function pauseTime() {
    clearInterval(timer);  
    start.removeAttribute('disabled');
}

function resetTime() {
    time.innerText = 0;
    i = 0;
}