// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

let yearsWon = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(let i = 0; i < yearsWon.length; i++) {
    console.log(`O brasil ganhou na copa de ${yearsWon[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let fruits = 0; fruits < frutas.length; fruits++) {
    console.log(frutas[fruits]);
    if(frutas[fruits] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let lastFruit = frutas[frutas.length - 1];
console.log(lastFruit);