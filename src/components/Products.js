import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // TODO - fetch all products from the store
  // eslint-disable-next-line max-len
  // We pass a function to useSelector, in this case the store, and tell it what we want out of it. We can call it whatever we want, we use 'store' here. And we want to return store.products. It is an implicit return
  const allProducts = useSelector((store) => (store.products))

  // eslint-disable-next-line max-len
  // Now that we have the useSelector returning the products we can iterate over each of the products and render the product here in the return statement
  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
