// Retorne o url da página atual utilizando o objeto window
let url = document.location.href;
console.log(url);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementActive = document.querySelector('.ativo');

// Retorne a linguagem do navegador
const language = window.navigator.language;
console.log(language);

// Retorne a largura da janela 
const getWidth = window.innerWidth;
console.log(getWidth);