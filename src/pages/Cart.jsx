import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import CartCont from '../components/cart/CartCont'

const Cart = () => {

  const { carts, totalAmount, itemCount } = useSelector(state => state.carts)
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  //console.log(carts,totalAmount,itemCount,"cartsepet");

  useEffect(() => {
    dispatch(getCartTotal())

  }, [dispatch])
  return (
    <div>
      {
        carts?.length > 0 ?
          <div className="">
            {
              carts?.map((cart, i) => (
                <CartCont key={i} cart={cart} />

              ))
            }
            <div className='flex items-center justify-end text-2xl'>TOPLAM TUTAR : <span className='font-bold text-3xl ml-2'>   {totalAmount.toFixed(2)}TL</span></div>

          </div> :
          <div className="">
            Kartınız Boş...
          </div>
      }
    </div>
  )
}

export default Cart