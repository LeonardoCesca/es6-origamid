const contato = document.querySelector('#contato');
const texto = document.querySelector('.texto');
const dados = {};

function handleKeyUp(event) {
    const target = event.target;
    const texto = document.querySelector('.texto');

    if(!target.checkValidity()) {    
        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
    }
        console.log(event.target.checkValidity());
        console.log(event.target.value);
        texto.innerText = event.target.value; 
}

function changeBackground(event) {
    document.body.style.backgroundColor = event.target.value;
}   

function checkBox(event) {
    if(event.target.checked) {
        console.log(event.target.value);
    }
}

function handleChange(events) {
    dados[event.target.name] = event.target.value;
    console.log(dados);
}

contato.addEventListener('change', handleKeyUp);
contato.addEventListener('change', changeBackground);
contato.addEventListener('change', checkBox);
contato.addEventListener('change', handleChange);
