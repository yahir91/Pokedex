import changeBackgroundColor from '../logic/backgroundColor';

describe('Color for pokemon background', () => {
  it('1. Checks the color for ghost pokemon', () => {
    const color = changeBackgroundColor('ghost');
    expect(color).toBe('#735797');
  });

  it('1. Checks the color for dragon pokemon', () => {
    const color = changeBackgroundColor('dragon');
    expect(color).toBe('#6F35FC');
  });
});
