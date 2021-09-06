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

for (let i1 = 1; i1 <= n; i1 += 1) {
  x = n-i1;
  y = i1;
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
