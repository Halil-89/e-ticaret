import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartCont = ({ cart }) => {
  const dispatch = useDispatch()

 // console.log(cart.id)
  return (
    <div className='my-10 flex items-center justify-between'>
      <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
      <div className='w-[426px]'>
        <div className='text-xl'>{cart?.title}</div>
        <div>{cart?.description}</div>

      </div>
      <div className='font-bold text-2'>{cart?.price} TL X ({cart?.quantity}) </div>
      <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[200px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center'>Ürünü Sil</div>

    </div>
  )
}

export default CartCont