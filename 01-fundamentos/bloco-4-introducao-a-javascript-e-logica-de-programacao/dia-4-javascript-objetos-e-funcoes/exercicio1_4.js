// Exercício 04
// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.



let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';  

for (let key in info) {
  let message = info[key];
  console.log(message);
}