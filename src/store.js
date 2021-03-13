import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './redux/pokemon';

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
