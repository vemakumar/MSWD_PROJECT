import React, { useState } from 'react'

const CartItem = ({title,img,price,total}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img style={{
                height:75,
                width:75
            }} src={img} alt="#" />
            <p>{title}</p>
        </div>
        <p>${price}</p>
        <input type="number" placeholder='Quantity' />
        <p>{total}</p>
    </div>
  )
}

export default CartItem