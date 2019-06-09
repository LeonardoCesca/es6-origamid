// Verifique a distância da primeira imagem
// em relação ao topo da página
const FIRST_IMG = document.querySelector('img');
console.log(FIRST_IMG.offsetTop);

// Retorne a soma da largura de todas as imagens
function sumImages() {
  const IMGS = document.querySelectorAll('img');
  let sum = 0;
  IMGS.forEach((image) => {
    sum += image.offsetWidth;
  });
  console.log(sum);
}
window.onload = (() => {
  sumImages();
});

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const LINKS = document.querySelectorAll('a');
LINKS.forEach((link) => {
  const LINK_WIDTH = link.offsetWidth;
  const LINK_HEIGHT = link.offsetHeight;

  if (LINK_WIDTH > 48 && LINK_HEIGHT > 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const BROWSER_SMALL = window.matchMedia('(max-width: 720px)').matches;
if(BROWSER_SMALL) {
  const MENU = document.querySelector('.menu');
  MENU.classList.add('menu-mobile');
}