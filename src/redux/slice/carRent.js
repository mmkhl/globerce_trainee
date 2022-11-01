import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  car: "",

}

export const rentalSlice = createSlice({
  name: 'rentalSlice',
  initialState,
  reducers: {
    setCar: (state, action) => {
      state.car = action.payload
    },
  },
})

export const { setCar } = rentalSlice.actions

export default rentalSlice.reducer