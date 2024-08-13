import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import MenuItems from './MenuItems';

const Cart = () => {

  const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

  return (
    <>
      <div>Cart</div>
      <button onClick={() => dispatch(clearCart())} className='bg-gray-300 rounded-lg p-2'>Clear Cart</button>

      <MenuItems cards={cart} />
    </>
  )
}

export default Cart