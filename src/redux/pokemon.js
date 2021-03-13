import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      state.pokemonList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPokemon } = counterSlice.actions;

export default counterSlice.reducer;
