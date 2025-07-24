import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart', // Fixed: should be 'cart' not 'cartSlices'
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')) || []
  },
  reducers: {
    addToCart: (state, action) => {
      const cartIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )
      if (cartIndex >= 0) {
        state.items[cartIndex].quantity += 1
      } else {
        const tempProduct = { ...action.payload, quantity: 1 }
        state.items.push(tempProduct) // Fixed: push tempProduct instead of action.payload
      }
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    removeToCart: (state, action) => { 
      const cartIndex = state.items.findIndex(
        item => item.id === action.payload.id
      )

      if (cartIndex >= 0) {
        if (state.items[cartIndex].quantity > 1) {
          // Decrease quantity if more than 1
          state.items[cartIndex].quantity -= 1
        } else {
          // Remove item completely if quantity is 1
          state.items = state.items.filter(item => item.id !== action.payload.id)
        }
      }
      // Update localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    // Optional: Add a complete remove action
    removeItemCompletely: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
      localStorage.setItem('cartItems', JSON.stringify(state.items))
    },
    // Optional: Clear entire cart
    clearCart: (state) => {
      state.items = []
      localStorage.removeItem('cartItems')
    }
  }
})

export const { addToCart, removeToCart, removeItemCompletely, clearCart } = cartSlice.actions
export default cartSlice.reducer