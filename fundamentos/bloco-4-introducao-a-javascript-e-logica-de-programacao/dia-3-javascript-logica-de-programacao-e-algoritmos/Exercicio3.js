// Exercício 3
// Agora inverta o lado do triângulo.
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 7;
let x;
let y;
let l = '';

for (let i = 1; i <= n; i += 1) {
  x = n-i;
  y = i;
  let p1 = '';
  for (let i = 0; i < x; i += 1) {
    p1 += ' ';
  }
  let p2 = '';
  for (let i = 0; i < y; i += 1) {
    p2 += '*';    
  }
  l = p1 + p2;
  console.log(l);  
}
