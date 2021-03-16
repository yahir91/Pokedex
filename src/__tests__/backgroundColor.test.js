import changeBackgroundColor from '../logic/backgroundColor';

describe('Color for pokemon background ', () => {
  it('1. Checks the get pokemons method', () => {
    const color = changeBackgroundColor('ghost');
    expect(color).toBe('#735797');
  });

  it('1. Checks the get pokemons method', () => {
    const color = changeBackgroundColor('dragon');
    expect(color).toBe('#6F35FC');
  });
});
