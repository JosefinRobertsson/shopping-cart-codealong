import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from 'components/reducers/cart';
import { products } from 'components/reducers/products';

// create our single reducer
const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
})

// eslint-disable-next-line max-len
// use this single reducer to create a store. We pass in an object with the key 'reducer'. It is shorthand for writing reducer: reducer or reducer equals reducer. So, we are telling Redux to create a new store using the reducer we just created by combining 2 reducers.
const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
