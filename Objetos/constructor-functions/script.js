// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}

function People(name, age) {
    this.name = name,
        this.age = age,
        this.walk = function () {
            console.log(name + ' nruwalk');
        }
}

People('Leonardo', 21);

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new People('Joao', 20);
const maria = new People('Maria', 25);
const bruno = new People('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
    const elementList = document.querySelectorAll(selector);
    this.elements = elementList;
    this.addClass = function (obj) {
        elementList.forEach((element) => {
            element.classList.add(obj);
        });
    }

    this.removeClass = function (obj) {
        elementList.forEach((element) => {
            element.classList.remove(obj);
        });
    }
}

const itensList = new Dom('li');
itensList.addClass('active');
itensList.removeClass('active');

