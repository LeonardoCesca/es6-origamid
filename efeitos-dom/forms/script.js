const contato = document.querySelector('#contato');
const texto = document.querySelector('.texto');

function handleKeyUp(event) {
    console.log(event.target.value);
    texto.innerText = event.target.value; 
}

contato.addEventListener('change', handleKeyUp);