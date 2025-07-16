import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cartSlices',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeToCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const {addToCart,removeToCart} = cartSlice.actions
export default cartSlice.reducer