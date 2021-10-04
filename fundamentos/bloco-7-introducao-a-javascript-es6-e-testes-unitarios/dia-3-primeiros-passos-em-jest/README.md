## Testes Unitários - Jest

### Principais comandos


1. Verificar versão Node

  npm -v


2. Instalar Node (se necessário)

  Atualizar lista de repositórios

    sudo apt update


  Instalar node

    sudo apt install npm


3. Atualizar Node - Atualização global

  npm install -g npm-check-updates


4. Criar arquivo package.json

  npm init -y


5. Edição de package.json

  Apague a linha:
  "test": "echo \"Error: no test specified\" && exit 1"

  Insira:
  "test": "jest"


6. Instalação Jest (pasta local)

  npm install --save-dev jest


7. Criar arquivo .gitignore

  Inserir node_modules


8. Criar arquivo de testes com base em [nomeDoArquivo].js

  [nomeDoArquivo].spec.js


9. Rodar testes

  npm test

  ou

  npm test [nomeDoArquivo]


## Exemplos de testes

1. Igualdade estrita [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

  expect(5).toBe("5") // Exemplo de falha


2. Igualdade de objetos e arrays

  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK


3. Conteúdo de Array

  [.toContain(item)](https://jestjs.io/docs/pt-BR/expect#tocontainitem)

  [.toContainEqual(item)](https://jestjs.io/docs/pt-BR/expect#tocontainequalitem)

  [.toHaveLength(number)](https://jestjs.io/docs/pt-BR/expect#tohavelengthnumber)


4. Propriedade de Objetos

  [.toHaveProperty(keyPath, value?)](https://jestjs.io/docs/pt-BR/expect#tohavepropertykeypath-value)


5. Erro gerenciado

  [.toThrow(error?)](https://jestjs.io/docs/pt-BR/expect#tothrowerror)


**Exemplo de função que retorna erro gerenciado**

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});




### Links Úteis

[Documentação oficial do Jest](https://jestjs.io/docs/en/expect)

[Valores booleanos](https://jestjs.io/docs/en/using-matchers#truthiness)

[Números](https://jestjs.io/docs/pt-BR/using-matchers#n%C3%BAmeros)

String com expressões regulares - [toMatch](https://jestjs.io/docs/pt-BR/expect#tomatchregexporstring)



## Elementos para comunicação entre .js e .spec.js

1. No final do arquivo .js insira:

  Para 1 função:

  module.exports = [nomeDaFuncao];


  Para 2 funções:

  module.exports = { [Funcao1], [funcao2] };


2. No início do arquivo .spec.js insira:

  Para 1 função:

    const [nomeDaFuncao] = require('./[nomeDoArquivo]');


  Para 2 funções:
   
    const { [Funcao1], [funcao2] } = require('./[nomeDoArquivo]');

    
    obs.: não precisa da terminação .js


  Se o arquivo estiver em uma sub-pasta utilize o seguinte:

  const [nomeDaFuncao] = require('../[nomeDaSubPasta]/[nomeDoArquivo]');




### Blocos describe

**Estrutura**

describe('Título do Bloco', () => {

  it('Título para os testes', () => {
    expect(teste-1).toEqual(Retorno do teste 1);
    expect(teste-2).toEqual(Retorno do teste 2);
    expect(teste-3).toEqual(Retorno do teste 3);
    expect(teste-4).toEqual(Retorno do teste 4);
  });

  it('Título para os testes', () => {
    expect(teste-1).toBeUndefined();
    expect(teste-2).toBeUndefined();
    expect(teste-3).toBeUndefined();
  });

  it('Título para os testes', () => {
    expect(teste-1).toContainEqual(Retorno do teste 1);
    expect(teste-2).toContainEqual(Retorno do teste 2);
  });

  it('Título para os testes', () => {
    expect(teste-1).toHaveLength(Retorno do teste 1);
  });

});  // final do bloco describe.



Obs.: variáveis e funções se limitam ao escopo de cada describe.

[Documentação do Jest](https://jestjs.io/docs/pt-BR/api#describename-fn)
