import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './redux/pokemonFilter';

export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
