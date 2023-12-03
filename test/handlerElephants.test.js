const handlerElephants = require('../src/handlerElephants');

describe('Testes da função handlerElephants', () => {
  it('deve retornar a quantidade de elefantes', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });

  it('deve retornar um array de nomes que inclui "Jefferson"', () => {
    const result = handlerElephants('names');
    expect(result).toContain('Jefferson');
  });

  it('deve retornar a média de idade dos elefantes próxima a 10.5', () => {
    const result = handlerElephants('averageAge');
    expect(result).toBeCloseTo(10.5, 1); // Usando toBeCloseTo para verificar proximidade numérica
  });

  it('deve retornar a localização dos elefantes dentro do Zoológico', () => {
    const result = handlerElephants('location');
    expect(result).toBe('NW'); // Ajuste conforme a implementação real
  });

  it('deve retornar a popularidade dos elefantes', () => {
    const result = handlerElephants('popularity');
    expect(result).toBe(5);
  });

  it('deve retornar um array com a relação de dias em que é possível visitar os elefantes', () => {
    const result = handlerElephants('availability');
    expect(result).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
