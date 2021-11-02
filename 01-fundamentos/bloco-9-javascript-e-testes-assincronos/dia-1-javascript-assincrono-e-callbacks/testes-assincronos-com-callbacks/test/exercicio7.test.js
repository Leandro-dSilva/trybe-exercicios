// Teste para o exercício 07

const uppercase = require('../../exercicio7');

test('Testando uppercase do exercício 07', (done) => {
  uppercase('Testando', (result) => {
    try {
      expect(result).toBe('TESTANDO');
      done();
      console.log('Teste para a função uppercase passou!');
    } catch (error) {
      done(error);
    }
  });
});
