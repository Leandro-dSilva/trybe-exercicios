const myFizzBuzz = require('../exercicio/myFizzBuzz');

describe ('Testes para myFizzBuzz', () => {
  it ('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(30)).toEqual('fizzbuzz');
  });

  it ('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(33)).toEqual('fizz');
  });

  it ('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(55)).toEqual('buzz');
  });

  it ('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  });

  it ('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('5')).toEqual(false);
  });
});
