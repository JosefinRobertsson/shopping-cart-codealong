import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {
  // TODO - fetch products from the cart store
  const products = useSelector((store) => store.cart.items)

  // eslint-disable-next-line max-len
  // TODO - calculate total from the sum of all products in the cart. We use an array-reducer. We create a useSelector which takes the store and return the items, then takes the reduce function which allows us to keep a running count while we iterate over each item. It starts at 0 as we specify in the end, and it assigns 0 to the total argument after reduce, and it also assigns item (as a second argument) to the current item it is iterating over (the item in store.cart.items). Tehn it iterates over the function for each item.
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))
  console.log(totalPrice)

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">🛒</span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
