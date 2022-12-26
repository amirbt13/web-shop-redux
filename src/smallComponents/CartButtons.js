import React, {useContext} from 'react'

import { isInCart ,quantityCount } from '../helperF/functions'

import { CartContext } from '../contexts/CartContextProvider'


const CartButtons = ({ product }) => {

    const {state, dispatch} = useContext(CartContext)


  return (
    <div className='mb-2'>
            {
                !isInCart(state, product.id)
                ? 
                <button className='bg-slate-100 py-[1px] px-1 rounded-md'
                 onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>ADD TO CART</button> 
                 :
                <button className=' bg-blue-700 text-white px-[9px] rounded-sm py-[1px]'
                onClick={() => dispatch({type: "INCREASE", payload: product})}>+</button>

            }
            {
              quantityCount(state,product.id) >= 1 
              &&
              <span className='py-1 px-[6px]  rounded-sm mx-[2px]'>{quantityCount(state,product.id)}</span>
            }
            {
              quantityCount(state, product.id) === 1 
              &&
              <button className='bg-slate-100 py-[1px] px-1 rounded-md' onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}>REMOVE</button>
            }
            { 
             quantityCount(state, product.id) > 1
             &&
             <button className=' bg-red-500 text-white px-[10px] rounded-sm py-[1px]'
              onClick={() => dispatch({type: "DECREASE", payload: product})}>-</button>  
            }

          </div>
  )
}

export default CartButtons