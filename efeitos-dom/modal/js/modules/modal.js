export default function initModal() {
   
}

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const container = document.querySelector('[data-modal="container"]');

if(botaoAbrir && botaoFechar && container) {
    function abrirModal(event) {
        event.preventDefault();
        container.classList.add('ativo');
    }

    function fecharModal(event) {
        event.preventDefault();
        container.classList.remove('ativo');
    }

    function cliqueForaModal(event) {
        if(event.target === this) 
        fecharModal(event);
    }

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    container.addEventListener('click', cliqueForaModal);
}