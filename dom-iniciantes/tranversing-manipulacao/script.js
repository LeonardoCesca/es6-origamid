// Duplique o menu e adicione ele em copy
const MENU = document.querySelector('.menu');
const CLONE_MENU = MENU.cloneNode(true);

const COPY = document.querySelector('.copy');
COPY.appendChild(CLONE_MENU);

// Selecione o primeiro DT da dl de Faq
const FAQ = document.querySelector('.faq');
const FIRST_DT = FAQ.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const NEXT_DD = FIRST_DT.nextElementSibling;
console.log(NEXT_DD);

// Substitua o conteúdo html de .faq pelo de .animais

const ANIMALS = document.querySelector('.animais');

FAQ.innerHTML = ANIMALS.innerHTML;