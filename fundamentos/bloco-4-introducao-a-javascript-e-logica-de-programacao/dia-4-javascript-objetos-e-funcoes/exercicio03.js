// Exercício 03
// Faça um for/in que mostre todas as chaves do objeto.



let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';  

for (let key in info) {
  let message = key;
  console.log(message);
}
