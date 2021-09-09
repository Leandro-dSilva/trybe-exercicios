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
let texto = ondeVoceEsta.parentElement.innerText;
console.log(texto);

// 7) Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = ondeVoceEsta.parentNode.children[2];
console.log(terceiroFilho);

// 8) Agora acesse o terceiroFilho a partir de pai.

let terceiroFilhoDoPai = pai.children[2]
console.log(terceiroFilhoDoPai);
