let nove;
let dez;
let numeros = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'] 

let removerNumero = ['nove', 'dez'];

for (let i = 0; i < removerNumero.length; i += 1) {
  let remover = removerNumero[i];

  for (let i = 0; i < numeros.length; i += 1) {
    let numero = numeros[i];
    
    if (remover === numero) {
      // ul1.removeChild(novali);
      let message = 'Removeu ' + numero;
      console.log(message);
    }
    
  }
}