import { configureStore } from '@reduxjs/toolkit'
import {rentalApi} from './rentalApi'
import  carReducer  from './slice/carRent';

const store = configureStore({
  reducer: {
    [rentalApi.reducerPath]: rentalApi.reducer,
    carRent: carReducer,
}, middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(rentalApi.middleware)
})

export default store;

