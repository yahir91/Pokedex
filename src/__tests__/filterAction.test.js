import filterReducer, { addType } from '../redux/pokemonFilter';

describe('Redux Actions', () => {
  it(
    '1. Checks the return of the addType action',
    () => {
      const action = addType('electric');
      const mockAction = { type: 'any' };
      const state = filterReducer(action.payload, mockAction);
      expect(action.payload).toStrictEqual('electric');
      expect(state).toStrictEqual('electric');
    },
  );
});
