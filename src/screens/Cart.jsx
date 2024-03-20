import React from 'react'
import CartItem from '../components/CartItem'
import useCart from '../hooks/useCart'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart}=useCart()
  return (
    <div>
        <div className='flex mr-auto ml-auto mt-6 w-3/4 justify-between p-3 border-2  shadow-lg'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>
        <div className='flex flex-col gap-10 mr-auto ml-auto mt-6 w-3/4  p-3 border-2  shadow-lg'>
            {
                cart.map((item)=>{
                    return <CartItem title={item.title} price={item.price} img={item.imga} total={item.price}/>
                })
            }
        </div>
        <div className='flex justify-between mr-auto  ml-auto mt-6 w-3/4  p-3   '>
            <Link to="/" className='border border-black px-6 py-4 hover:bg-slate-200'>Return To Shop</Link>
            <button className='border border-black px-6 py-4 hover:bg-slate-200'>Update Cart</button>

        </div>
        <div >
            <div className='mr-auto  ml-auto mt-6 w-3/4  p-3 '>
                <input className='outline-none border border-black/60 p-2' type="text" placeholder='coupon code' />
                <button className='bg-red-600 p-2 mx-2 rounded-sm text-white'>Apply coupon</button>
            </div>
            <div className='ml-48 border border-black mt-6 w-1/4  p-3 ' >
               <p>CartTotal:</p> <br/>
               <p>Subtotal</p> 
               <hr />
                <p>Shipping</p>
                <hr />
                <p>Total</p>
                <button className='bg-red-600 p-2 ml-3 rounded-md text-white '>Process to Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cart