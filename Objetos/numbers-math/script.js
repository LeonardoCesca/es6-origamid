// Retorne um número aleatório
// entre 1050 e 2000
const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(randomNumber);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumbers = numeros.split(', ');
const maxNumber = Math.max(...arrayNumbers);
console.log(maxNumber);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];

  function clearPrice(price) {
    price = +price.toUpperCase().replace('R$', '').trim().replace(',', '.');
    price = +price.toFixed(2);
    return price;
  }

  let sum = 0;
  listaPrecos.forEach((price) => {
    sum += clearPrice(price);
  })

  console.log(sum.toLocaleString('pt-br', {style:'currency', currency: 'BRL'}));

  clearPrice(listaPrecos[1]);