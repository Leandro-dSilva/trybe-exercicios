const {encode, decode} = require('../exercicio/encodeDecode');

describe ('Testes para encode', () => {
  it ('Teste se encode é função', () => {
    expect(typeof encode).toBe('function');
  });

  it ('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it ('Teste se as demais letras não são convertidas', () => {
    const bcd = 'bcdf ghjkl  mnpqrs   tvwxyz';

    expect(encode(bcd)).toEqual(bcd);
  });

  it ('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const phrase = 'Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro';

    expect(encode(phrase).length).toEqual(phrase.length);
  });
});

// decode

describe ('Testes para decode', () => {
  it ('Teste se decode é função', () => {
    expect(typeof decode).toBe('function');
  });

  it ('se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it ('Teste se os demais números não são convertidos', () => {
    expect(decode('67890')).toEqual('67890');
  });

  it ('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const phr4se = 'T2st2 s2 1 str3ng q52 é r2t4rn1d1 p2l1s f5nçõ2s têm 4 m2sm4 núm2r4 d2 c1r1ct2r2s q52 1 str3ng p1ss1d1 c4m4 p1râm2tr4';

    expect(decode(phr4se).length).toEqual(phr4se.length);
  });
});
