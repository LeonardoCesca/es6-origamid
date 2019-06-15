// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function People(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}
People.prototype.fullName = function () {
    return `${this.name} ${this.lastName}`;
}
const leo = new People('Leo', 'Cesca', 21);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

//li
console.log(li.constructor); //HTMLLIElement
li; 

//click
console.log(li.click.constructor.name); //Function
li.click;

//innerText
console.log(li.innerText.constructor.name); //String
li.innerText;

//value
console.log(li.value.constructor.name); //Number
li.value;

//hidden
console.log(li.hidden.constructor.name); //Boolean
li.hidden;

//offsetLeft
console.log(li.offsetLeft.constructor.name); //Number
li.offsetLeft;

li.click(); //SEM CONSTRUCTOR (undefined)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
 