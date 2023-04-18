import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    // eslint-disable-next-line max-len
    // this action will tell the add to cart-button in Product.js what to do. To upgrade the action to figure out if the item being added to the cart is already in there and we only need to update the quantity, we use .find. We check if the item being added has the same id as the item in the action.payload.
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      console.log(action)
      if (existingProduct) {
        // increment quantity, thanks to the immutable redux library we can add it like this:
        existingProduct.quantity += 1
      } else {
        // add the item to the cart (itemslist), it is the first so it's quantity 1
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        // eslint-disable-next-line max-len
        // if there is only 1 of this kind of item in the cart, remove it entirely. Here we can filter out the item that we are removing. The filtering will return a new array of items exactly like the old one except for the item we filtered out being gone from it.
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})