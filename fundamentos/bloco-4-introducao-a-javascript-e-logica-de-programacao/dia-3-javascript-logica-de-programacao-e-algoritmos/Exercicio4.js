// Exercício 4
// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 8;
let a = '';
let l;

for (let i = 0; i <= n; i += 1) { 
  a += '*';
  if (i%2 === 0) {
    let x = (n-i)/2;
    let e = '';
    for (let i = 0; i < x; i += 1) {
      e += ' ';      
    }
    l = e + a + e;
    console.log(l);
  }
}
