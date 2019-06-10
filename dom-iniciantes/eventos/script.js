// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const LINKS = document.querySelectorAll('a[href^="#"]');
console.log(LINKS);

function handleLinks(event) {
  event.preventDefault();
  LINKS.forEach((item) => {
    item.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

LINKS.forEach((link) => {
  link.addEventListener('click', handleLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const ALL_ELEMENTS = document.querySelectorAll('body *');

function handleElement(event) {
  event.currentTarget;
}

ALL_ELEMENTS.forEach((element) => {
  element.addEventListener('click', handleElement);
});
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleElement(event) {
  event.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textsize');
  }
}

window.addEventListener('keydown', handleClickT);