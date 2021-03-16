import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'filter',
  initialState: {
    current: 'All',
  },
  reducers: {
    addType: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { addType } = counterSlice.actions;

export default counterSlice.reducer;
