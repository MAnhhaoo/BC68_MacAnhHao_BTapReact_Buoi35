import { configureStore } from '@reduxjs/toolkit';

const haoReducer = () => "hao"; // Tạm thời tạo một reducer đơn giản

const store = configureStore({
  reducer: {
    hao: haoReducer,
  },
});

export default store;
    