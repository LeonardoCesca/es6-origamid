const pessoa = new Object({
    nome: 'Léo'
})

console.log(pessoa.nome);

const carro = {
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro);
honda.init('Honda');

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar());

const funcaoAutomovel = { 
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    }
}

const moto = {
    rodas: 2,
    capacete: true
}

Object.assign(moto, funcaoAutomovel);
console.log(moto)