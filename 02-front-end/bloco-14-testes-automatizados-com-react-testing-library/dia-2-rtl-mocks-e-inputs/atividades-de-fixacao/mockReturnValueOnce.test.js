describe('Testes para MOCK', () => {
  it('Teste mockReturnValue - 4 calls', () => {
    const myMockFn = jest
      .fn()
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call')
      .mockReturnValue('default');

    // 'first call', 'second call', 'default', 'default'
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
    expect(myMockFn).toHaveBeenCalledTimes(4);
  })

  it("Quantas vezes a função foi chamada e qual seu retorno.", () => {
    myMockFn = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(myMockFn).toHaveBeenCalledTimes(0);
  
    expect(myMockFn()).toBe("first call");
    expect(myMockFn).toHaveBeenCalledTimes(1);
  
    expect(myMockFn()).toBe("second call");
    expect(myMockFn).toHaveBeenCalledTimes(2);
  
    expect(myMockFn()).toBe("default value");
    expect(myMockFn).toHaveBeenCalledTimes(3);
  });
})
