import filterReducer from '../redux/pokemonFilter';

describe('Recipe Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      current: 'All',
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = 'fire';
      const mockAction = { type: 'any' };
      const state = filterReducer(mockState, mockAction);
      expect(state).toStrictEqual('fire');
    },
  );
});
