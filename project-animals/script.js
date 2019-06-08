// Retorne no console todas as imagens do site
const ALL_IMGS = document.querySelectorAll('img');
console.log(ALL_IMGS);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const IMG = document.querySelectorAll('img[src^="img/imagem"]');
console.log(IMG);

// Selecione todos os links internos (onde o href começa com #)
const INTERNAL_LINKS = document.querySelectorAll('[href^="#"]');
console.log(INTERNAL_LINKS);

// Selecione o primeiro h2 dentro de .animais-descricao
const FIRST_H2 = document.querySelector('.animais-descricao h2');
console.log(FIRST_H2);
//OR
const FIRST_ANIMAL = document.querySelector('h2');
console.log(FIRST_ANIMAL);

// Selecione o último p do site
const PARAGRAPHS = document.querySelectorAll('p');
console.log(PARAGRAPHS[PARAGRAPHS.length - 1]);
//OR
console.log(PARAGRAPHS[--PARAGRAPHS.length]);
