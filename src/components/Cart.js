import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../contexts/CartContextProvider'

import CartItem from './CartItem'

const Cart = () => {

    const {state, dispatch} = useContext(CartContext)



  return (
    <div className='flex flex-col-reverse md:flex-row justify-end min-h-[100vh] pt-2 bg-slate-100'>
        <div className='basis-3/4 '>
            {state.selectedItems.length > 0 
            ? 
            state.selectedItems.map(item => <CartItem key={item.id} product={item} dispatch={dispatch}/>)
            :
            <div className='my-2 w-3/4 rounded-xl flex justify-around flex-col xs:flex-row  items-center h-32 bg-white mx-auto shadow-md border-t-2'>
              <h4>There is no item in your cart</h4>
              { !state.isChekedOut &&
              <button className='bg-gradient-to-r from-cyan-500 to-indigo-700 text-white rounded-md px-2'><Link to='/store'>SHOP</Link></button>
              } 
            </div>
          }
        </div>
        <div className='basis-1/4'>
          
            {
              state.isChekedOut 
              &&
              <div className='bg-white w-5/6 mx-auto my-2 p-3 h-64 rounded-md shadow-md flex flex-col justify-evenly border-t-2'>
                <h4 className='text-lg text-center'>Thank You For Your Purchse</h4>
                <button className='px-2 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white font-medium rounded-lg'><Link to='../store'>BUY MORE</Link></button>
              </div>
            }
            {
              !state.isChekedOut
              &&
              <div className='flex flex-col justify-evenly bg-white w-5/6 mx-auto my-2 p-3 h-64 rounded-md shadow-md border-t-2'>
                <div>
                  <div>
                    <h4 className=' text-lg font-bold text-blue-700 ml-2 inline-block'>Total Count: </h4>
                    <span className='text-lg ml-2'>{state.itemsCount}</span>
                  </div>
                  <div>
                    <h4 className=' text-lg font-bold text-blue-700 ml-2 inline-block'>Total Price: </h4>
                    <span className='text-lg ml-2'>${state.totalPrice}</span>
                  </div>
                </div>  
                  <div className='ml-2 flex justify-between xl:flex-row flex-col-reverse'>
                    <button className=' bg-slate-100 py-[1px] px-1 rounded-md' onClick={() => dispatch({type: "CLEAR"})}>CLEAR CART</button>
                    <button className='bg-gradient-to-r from-cyan-500 to-indigo-700 text-white px-2 rounded-md shadow-sm mb-2 xl:mb-0' onClick={() => dispatch({type: "CHECKOUT"})}>CHECK OUT</button>
                  </div>
              </div>
            }

          </div>
    </div>
  )
}

export default Cart