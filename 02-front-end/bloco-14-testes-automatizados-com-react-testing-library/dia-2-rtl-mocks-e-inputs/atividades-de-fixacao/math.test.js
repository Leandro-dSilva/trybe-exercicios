const math = require('./math');
jest.mock("./math");

describe('Teste para jest.mock', () => {
  test("Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno", () => {

    // mockImplementation cria novo comportamento para o mock
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
    console.log('A função foi chamada');
    expect(math.somar).toHaveBeenCalledTimes(1);
    console.log('A função foi chamada 1 vez');
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    console.log('A função foi chamada com os valores 1 e 2');
    expect(math.somar(1, 2)).toBe(3);
    console.log('A função retornou 3');
  });
})

// Assim como o mockReturnValueOnce , podemos também implementar uma funcionalidade para apenas uma chamada com mockImplementationOnce .