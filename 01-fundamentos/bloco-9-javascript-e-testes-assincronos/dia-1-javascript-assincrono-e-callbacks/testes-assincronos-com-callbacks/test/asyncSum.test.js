// Teste para a função asyncSum

const asyncSum = require('../src/asyncSum');

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
      console.log('Teste para a função asyncSum passou!');
    } catch (error) {
      done(error);
    }
  });
});
