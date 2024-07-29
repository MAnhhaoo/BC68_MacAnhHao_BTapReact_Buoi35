// store.js
import { configureStore } from '@reduxjs/toolkit';
import VephimSlice from '../redux/VephimSlice'; 

const store = configureStore({
  reducer: {
    vephim: VephimSlice, // Đổi tên thành 'vephim' để phù hợp với slice
  },
});

export default store;
