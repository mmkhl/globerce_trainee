import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {rentalApi} from './rentalApi'

const store = configureStore({
  reducer: {
    [rentalApi.reducerPath]: rentalApi.reducer,
}, middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(rentalApi.middleware)
})

export default store;
setupListeners(store.dispatch)

