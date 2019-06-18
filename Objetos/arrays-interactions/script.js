// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const allCourses = document.querySelectorAll('.curso');
const arrayCourses = Array.from(allCourses);

const objectCourses = arrayCourses.map((course) => {
  const title = course.querySelector('h1').innerText;
  const desc = course.querySelector('p').innerText;
  const classrooms = course.querySelector('.aulas').innerText;
  const hours = course.querySelector('.horas').innerText;

  return {
    titulo: title,
    descricao: desc,
    aula: classrooms,
    horas: hours
  }
})
console.log(objectCourses);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const moreThan100 = numeros.filter(num => num > 100);

console.log(moreThan100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const isTrue = instrumentos.some((item) => {
  return item === 'Baixo';
});

console.log(isTrue);

// Retorne o valor total das compras
const compras = [{
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

// compras.forEach((item) => {
//   const itemPrice = +item.preco.replace('R$', '').trim().replace(',', '.');
//   totalPrice += itemPrice;

const totalValue = compras.reduce((deposit, withdrawn) => {
  const itemPrice = +withdrawn.preco.replace('R$', '').trim().replace(',', '.');
  return deposit + itemPrice;
}, 0)

console.log(totalValue);