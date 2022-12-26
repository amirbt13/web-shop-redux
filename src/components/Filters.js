import React, { useEffect, useReducer } from 'react'

// icons
import arrowWhite from '../icons/down-arrow-white.svg'

// helper functions
import FilterSearch from './filterComponents/FilterSearch'
import FilterCategory from './filterComponents/FilterCategory'
import FilterPrice from './filterComponents/FilterPrice'

import { filterReducer, initialState } from './filterComponents/filterReducer'


const Filters = ({ products, setProducts }) => {

  const [state, dispatch] = useReducer(filterReducer, initialState)
  
  
  useEffect(() => {
   setProducts(prevProducts => {
    return prevProducts.map(product => {
      return {
        ...product,
        isShow: true
      }
    })
   })
  }, [])

 

  return (
    <div className='basis-1/4 md:basis-1/5 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white transition-all ease-in duration-200 mt-1 rounded-sm sm:rounded-md sm:mx-2 sm:mt-[24px] sm:h-72'>
      
      <div className='text-center py-2 font-semibold flex justify-center' 
      onClick={() => dispatch({type: "CHANGE_SHOW", payload: "main"})}>Filters
        <img className='ml-1 mt-1 w-4' src={arrowWhite} alt='arrow-down' />
      </div>

      <form className={`${state.main.isShow ? "flex" : "hidden"} sm:flex flex-col`}>

          <FilterSearch state={state} dispatch={dispatch} setProducts={setProducts}/>

          <FilterCategory state={state} dispatch={dispatch} products={products} setProducts={setProducts}/>

          <FilterPrice state={state} dispatch={dispatch} setProducts={setProducts} products={products}/>
          
      </form>
    </div>
  )
}

export default Filters
          



  

          