## Métodos para MOCK

___

`mock.mockClear()`

* Útil quando você deseja limpar os dados de uso de uma simulação entre dois expect s;

`mock.mockReset()`

* Faz o que o mockClear() faz;
Remove qualquer retorno estipulado ou implementação;

* Útil quando você deseja resetar uma simulação para seu estado inicial;

`mock.mockRestore()`

* Faz tudo que mockReset() faz;
Restaura a implementação original;

* Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;