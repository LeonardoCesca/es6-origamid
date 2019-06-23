// function darOi(nome, idade) {
//   console.log('Oi para você ' + nome + idade);
// }

// darOi.call(null, 'Léo', 21);

// window.marca = 'Carro';
// window.ano = 2019;

// function descricaoCarro() {
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro.call({ marca: 'Honda', ano: 2016 });

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pera'];

// carros.forEach.call(carros, (item) => {
//   console.log(item);
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe) {
//   this.element.classList.add(classe);
// }

// // const ul = new Dom('ul');

// const li = {
//   element: document.querySelector('li')
// }

// Dom.prototype.ativo.call(li, 'ativo');

// // ul.ativo.call(li, 'ativo');
// // console.log(ul);

const arrayLike = {
  0: 'Item 1',
  1: 'Item 2',
  2: 'Item 3',
  length: 3,
}

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const filtro = arrayLi.filter(item => {
  return item.classList.contains('ativo');
})

console.log(filtro);