// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const allParagraphs = document.querySelectorAll('p');
const totalCaracters = Array.prototype.reduce.call(allParagraphs, (last, item) => {
  return last + item.innerText.length;
}, 0);

console.log(totalCaracters);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createElement(tag, classe, conteudo) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  conteudo ? element.innerHTML = conteudo : null;
  return element;
}

console.log(createElement('li', 'azul', 'Esse é o conteúdo'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Title = createElement.bind(null, 'h1', 'titulo');

const courseJS = h1Title('Javascript Course');
const courseCSS = h1Title('CSS Course');

console.log(courseJS);
console.log(courseCSS);