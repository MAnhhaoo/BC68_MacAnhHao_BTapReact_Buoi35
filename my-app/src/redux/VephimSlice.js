import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dangchon: 0,
  chuachon: 118,
};

const VephimSlice = createSlice({
  name: 'vephim',
  initialState,
  reducers: {
    increaseDangChon: (state) => {
      state.dangchon += 1;
      state.chuachon -= 1;
    },
    decreaseDangChon: (state) => {
      state.dangchon -= 1;
      state.chuachon += 1;
    },
  },
});

export const { increaseDangChon, decreaseDangChon } = VephimSlice.actions;

export default VephimSlice.reducer;

