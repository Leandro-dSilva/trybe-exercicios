// Exercício 05
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas', 
// 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
// 'O último MacPatinhas', 
// 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';  

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

let infoAll = {
}

infoAll.personagem = info.personagem + ' e ' + info2.personagem;
infoAll.origem = info.origem + ' e ' + info2.origem;
infoAll.nota = info.nota + ' e ' + info2.nota;

if (info.recorrente && info2.recorrente === 'Sim') {
  infoAll.recorrente = 'Ambos recorrentes'
} else {
  infoAll.recorrente = info.recorrente + ' e ' + info2.recorrente;
}

for (let key in infoAll) {
  let message = infoAll[key]; 
  console.log(message);
}
