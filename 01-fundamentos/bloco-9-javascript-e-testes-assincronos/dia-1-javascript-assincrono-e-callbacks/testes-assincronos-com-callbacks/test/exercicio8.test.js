// Teste para o exercício 08

const getPokemonDetails = require('../../exercicio8');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const filter = ({name}) => name === 'nomeErrado';

    getPokemonDetails(filter, (result) => {
      try {
        const errorMessage = new Error('Não temos esse pokémon para você :(');
        expect(result).toEqual(errorMessage);
        done();
      }
      catch (error) {
        done(error);
      }
    });
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const filter = ({name}) => name === 'Squirtle';
    const expected = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun'
    
    getPokemonDetails(filter, (...result) => {
      try {
        expect(result[1]).toBe(expected);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
