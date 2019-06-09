// Adicione a classe ativo a todos os itens do menu
const GET_MENU = document.querySelectorAll('.menu a');
GET_MENU.forEach((item) => {
    item.classList.add('ativo');
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
GET_MENU.forEach((item) => {
    item.classList.remove('ativo');
});
GET_MENU[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const IMGS = document.querySelectorAll('img');
IMGS.forEach((img) => {
    console.log(img.hasAttribute('alt'));
});
// Modifique o href do link externo no menu
const LINK = document.querySelector('a[href^="http"]');
LINK.setAttribute('href', 'https://www.google.com.br');
console.log(LINK);
