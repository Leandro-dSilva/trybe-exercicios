const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado; Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.className = 'tech';


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
let techElement = document.querySelector('.tech');
let inputTexto = document.querySelector('#input');

function changeText() {
  techElement.innerText = inputTexto.value;
}

inputTexto.addEventListener("change", changeText);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página; Que tal redirecionar para seu portifólio?
function newWebPage() {
  window.open("https://leandrochs.github.io/");
}

myWebpage.addEventListener("dblclick", newWebPage);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
function changecolor() {
  myWebpage.style.color = 'yellow';
}

myWebpage.addEventListener("mouseover", changecolor);

function returncolor() {
  myWebpage.style.color = 'white';
}

myWebpage.addEventListener("mouseleave", returncolor);


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  
  // O 'event' é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  
  // O 'event' possui várias propriedades, porém a mais usada é o event.target, que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio navegador fará esse trabalho por você, não é legal? Desse jeito, o event.target na nossa função retornará o objeto 'firstLi'.