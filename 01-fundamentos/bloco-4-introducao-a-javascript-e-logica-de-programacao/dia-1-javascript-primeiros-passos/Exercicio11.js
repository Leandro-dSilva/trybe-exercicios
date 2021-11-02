// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

////

let salario = 3000;

////

function inssCalc(salario) {
  let aliquota = 570.88;
  if (salario <= 1556.94) {
    aliquota = 0.08 * salario;
  } else if (salario >= 1556.95 && salario <= 2594.92) {
    aliquota = 0.09 * salario;    
  } else if (salario >= 2594.93 && salario <= 5189.82){
    aliquota = 0.11 * salario;
  }
  return aliquota;
}

function irCalc(salarioBase) {  
  if (salarioBase <= 1903.98) {
    result = salarioBase;
  } else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    result = salarioBase - [(0.075 * salarioBase) - 142.80];
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    result = salarioBase - [(0.15 * salarioBase) - 354.80];
  } else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    result = salarioBase - [(0.225 * salarioBase) - 636.13];
  } else {
    result = salarioBase - [(0.275 * salarioBase) - 869.36];
  }
  return result;
}

function liquidoAReceber(salario) {
  let inss = inssCalc(salario);
  let salarioBase = salario - inssCalc(salario);
  let ir = irCalc(salarioBase);
  return ir;
}

let aReceber = liquidoAReceber (salario);
console.log(aReceber);