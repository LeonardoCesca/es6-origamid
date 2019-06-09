// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

// Crie duas expressões que retornem NaN
let nan1 = 'String test';
console.log(+nan1);
let nan2 = 'value 10'/2;
console.log(nan2);

// Somar a string '200' com o número 50 e retornar 250
let valueString = '200';
let valueNumber = 50;
let sum = +valueString + valueNumber;
console.log(sum);

// Incremente o número 5 e retorne o seu valor incrementado
let number = 5;
console.log(++number);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

let division = +numero / 2;
console.log(division);
