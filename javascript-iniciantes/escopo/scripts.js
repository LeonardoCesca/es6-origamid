// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(var, marca, portas);

/*Resposta: o primeiro parametro do console.log está printando o tipo da variavel (var). as variáveis do tipo const e let não são visiveis pois está sendo printado fora do escopo, logo a variável só existe dentro do escopo.*/

// Como corrigir o erro abaixo?
function somarDois(x) {
    const dois = 2;
    return x + dois;
}

/*Resposta: o const só existe dentro da function somarDois().*/

function dividirDois(x) {
    return x + dois;
}

/*Resposta: o const só existe dentro da function somarDois(). logo não existe dentro da function dividirDois();*/

somarDois(4);
dividirDois(6);

/*Resposta: Se colocar a variável dois fora do escopo das duas funções, ela ficará global e será possível executar as funções. */

// O que fazer para total retornar 500?
const numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);