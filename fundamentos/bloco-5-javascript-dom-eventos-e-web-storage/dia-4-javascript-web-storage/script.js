// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:

// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

const backgroundColorUp = document.querySelector('#background-color-up');
const backgroundColorDown= document.querySelector('#background-color-down');

const textColorUp= document.querySelector('#text-color-up');
const textColorDown= document.querySelector('#text-color-down');

const fontSizeUp= document.querySelector('#font-size-up');
const fontSizeDown= document.querySelector('#font-size-down');

const spacingUp= document.querySelector('#spacing-up');
const spacingDown= document.querySelector('#spacing-down');

const fontTypeUp= document.querySelector('#font-type-up');
const fontTypeDown= document.querySelector('#font-type-down');
const fontTypeContainer= document.querySelector('#font-type-container');

// Cor de fundo da tela;
const body = document.body;
const headerArticleContainer = document.querySelector('#header-article-container');

let b = 215;
let h = 250;
backgroundColorUp.addEventListener('click', () => {
  b += 10;
  body.style.backgroundColor = `rgb(${b}, ${b}, ${b})`;
  h += 10;
  headerArticleContainer.style.backgroundColor = `rgb(${h}, ${h}, ${h})`;
});

backgroundColorDown.addEventListener('click', () => {
  b -= 10;
  body.style.backgroundColor = `rgb(${b}, ${b}, ${b})`;
  h -= 10;
  headerArticleContainer.style.backgroundColor = `rgb(${h}, ${h}, ${h})`;
});

// Cor do texto;
const header = document.querySelector('#header')
const article = document.querySelector('#article')

let a = 50;
textColorUp.addEventListener('click', () => {
  a += 25;
  header.style.color = `rgb(${a}, ${a}, ${a})`;
  article.style.color = `rgb(${a}, ${a}, ${a})`;
});

textColorDown.addEventListener('click', () => {
  a -= 25;
  header.style.color = `rgb(${a}, ${a}, ${a})`;
  article.style.color = `rgb(${a}, ${a}, ${a})`;
});

// Tamanho da fonte;
let f = 18;
fontSizeUp.addEventListener('click', () => {
  f += 2;
  article.style.fontSize = `${f}px`;  
});

fontSizeDown.addEventListener('click', () => {
  f -= 2;
  article.style.fontSize = `${f}px`; 
});

// Espaçamento entre as linhas do texto;
let s = 150;
spacingUp.addEventListener('click', () => {
  s += 20;
  article.style.lineHeight = `${s}%`;  
});

spacingDown.addEventListener('click', () => {
  s -= 20;
  article.style.lineHeight = `${s}%`; 
});

let legend = document.querySelector('#legend');


let fontsFamily = ['Arial', 'Times', 'sans-serif', 'Georgia', 'FreeMono', 'monospace', 'cursive'];

let ff = 0;

fontTypeUp.addEventListener('click', () => {
  ff += 1;
  if (ff === 7) { ff = 0; }
  article.style.fontFamily = `${fontsFamily[ff]}`;
  console.log(fontsFamily[ff]);
  legend.innerText = `${fontsFamily[ff]}`;
});

fontTypeDown.addEventListener('click', () => {
  ff -= 1;
  if (ff === -1) { ff = 6; }
  article.style.fontFamily = `${fontsFamily[ff]}`;
  console.log(fontsFamily[ff]);
  legend.innerText = `${fontsFamily[ff]}`;
});
