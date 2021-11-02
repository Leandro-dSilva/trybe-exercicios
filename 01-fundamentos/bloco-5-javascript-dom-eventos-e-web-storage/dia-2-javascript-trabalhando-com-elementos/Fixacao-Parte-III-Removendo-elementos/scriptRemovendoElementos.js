// PARTE I ************************************************************
// 1) Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(ondeVoceEsta);

// 2) Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let elementoPai = ondeVoceEsta.parentNode;
console.log(elementoPai);

let pai = document.getElementById('pai');
pai.style.color = 'blue';

// 3) Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let filhoDeOndeVoceEsta = ondeVoceEsta.childNodes;
console.log(filhoDeOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.innerText = 'Batatinha quando nasce; Espalha a rama pelo chão; O brotinho quando ama; Poe a mão, no coração';

// 4) Acesse o primeiroFilho a partir de pai.
let filhosDoPai = pai.childNodes;
console.log(filhosDoPai);

let primeiroFilhoDoPai = document.getElementById('primeiroFilho');
console.log(primeiroFilhoDoPai);

// 5) Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
let primeiroFilhoOndeVoceEsta = ondeVoceEsta.firstChild;
console.log(primeiroFilhoOndeVoceEsta);

// 6) Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// let texto = ondeVoceEsta.parentElement.innerText.includes('Atenção');
let texto = ondeVoceEsta.parentElement.innerText;

console.log(texto);

// 7) Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = ondeVoceEsta.parentNode.children[2];
console.log(terceiroFilho);

// 8) Agora acesse o terceiroFilho a partir de pai.

let terceiroFilhoDoPai = pai.children[2]
console.log(terceiroFilhoDoPai);

// PARTE II ************************************************************
// 1) Crie um irmão para elementoOndeVoceEsta .
//encontra pai:
let novoIrmao = document.getElementById('elementoOndeVoceEsta').parentNode;
// insere documento filho do pai:
let elementoParaNovoIrmão = novoIrmao.appendChild(document.createElement('section'));
//insere id:
elementoParaNovoIrmão.setAttribute("id", "novoIrmao");

console.log(novoIrmao);

//reposiciona section logo após elementoOndeVoceEsta
// document.body.insertBefore(elementoParaNovoIrmão, ondeVoceEsta);

// 2)Crie um filho para elementoOndeVoceEsta .
let filhoElementoOndeVoceEsta = ondeVoceEsta.appendChild(document.createElement('section'))

// outra maneira de inserir id:
filhoElementoOndeVoceEsta.id = 'novoFilho';
// equivalente a: filhoElementoOndeVoceEsta.setAttribute('id', 'novoFilho');
// para inserir classe:
filhoElementoOndeVoceEsta.className = 'classeNovoFilho';

console.log(filhoElementoOndeVoceEsta);

// localizar com querySelector:
console.log(document.querySelector('#novoFilho'));

// 3) Crie um filho para primeiroFilhoDoFilho.
// recupera 
let neto = primeiroFilhoDoFilho.appendChild(document.createElement('section'));
neto.setAttribute('id' , 'neto');

console.log(document.querySelector('#neto'));
// ou
console.log(neto);

// 4) A partir desse filho criado (neto), acesse terceiroFilho:

//sobe um nível
let a = neto.parentNode;
console.log(a);                // retornou primeiroFilhoDoFilho

// sobe mais um nível
let b = a.parentNode;
console.log(b);                // retornou elementoOndeVoceEsta

// sobe mais um nível
let c = b.parentNode;
console.log(c);                // retornou pai

// consulta filhos do pai
let consultaC = c.childNodes;  //retornou índice [5]
console.log(consultaC);

// acessa índice 5 que é o terceiroFilho
let  d = c.childNodes[5];
console.log(d);

// tudo em uma única linha
let inline = neto.parentNode.parentNode.parentNode.childNodes[5];
console.log(inline);


// PARTE III ************************************************************

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

//consulta body
console.log(document.body);

//consulta filhos de paiDoPai
let filhosDePaiDoPai = document.querySelector('#paiDoPai')
console.log(filhosDePaiDoPai); 

//consulta filhos de Pai
let filhosDePai = document.querySelector('#pai')
console.log(filhosDePai); 

// #primeiroFilho está dentro de #pai
// recupera <section id="primeiroFilho"></section>
let elementoPrimeiroFilho = document.querySelector('#primeiroFilho');
console.log(elementoPrimeiroFilho);

// remove 
filhosDePai.removeChild(elementoPrimeiroFilho);

// próximo: recupera <section id="terceiroFilho"></section>
let elementoTerceiroFilho = document.querySelector('#terceiroFilho');
console.log(elementoTerceiroFilho);

filhosDePai.removeChild(elementoTerceiroFilho);

// próximo: recupera <section id="quartoEUltimoFilho"></section>
let elementoQuartoEUltimoFilho = document.querySelector('#quartoEUltimoFilho');
console.log(elementoQuartoEUltimoFilho);

filhosDePai.removeChild(elementoQuartoEUltimoFilho);

// próximo: recupera <section id="novoIrmao"></section>
let elementoNovoIrmao = document.querySelector('#novoIrmao');
console.log(elementoNovoIrmao);

filhosDePai.removeChild(elementoNovoIrmao);

// remove elementos de elementoOndeVoceEsta
console.log(ondeVoceEsta);

// próximo: recupera <section id="segundoEUltimoFilhoDoFilho"></section>
let elementoSegundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
console.log(elementoSegundoEUltimoFilhoDoFilho);

ondeVoceEsta.removeChild(elementoSegundoEUltimoFilhoDoFilho);

// próximo: recupera <section id="novoFilho" class="classeNovoFilho"></section>
let elementoNovoFilho = document.querySelector('#novoFilho');
console.log(elementoNovoFilho);

ondeVoceEsta.removeChild(elementoNovoFilho);

// remove "neto" de "primeiroFilhoDoFilho"
// recupera <section id="neto"></section></section>

primeiroFilhoDoFilho.removeChild(neto);

// remove textos
primeiroFilhoDoFilho.innerText = '';

// pai.innerText = '';

// resultado
console.log(document.body);
