import React, {useEffect} from 'react'

import { min, max } from '../../helperF/functions'


import arrow from '../../icons/down-arrow.svg'


const FilterPrice = ({state, dispatch, products, setProducts}) => {


    useEffect(() => {

        setProducts(prevProducts => {
          return prevProducts.map(product => {
            if(product.price > state.price.value){
              return {
                ...product,
                isShow: false
              }
            } else {
              return {
                ...product,
                isShow: true
              }
            }
          })
        })
      
    }, [state.price.value])

  return (
    <section className='bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2'>
            <div className='flex justify-between'
            onClick={() => dispatch({type: "CHANGE_SHOW", payload: "price"})}
            >
              <p>Price
                <span className={`${state.price.isShow? "inline" : "hidden"}`}> : ${state.price.value}</span>
              </p>
              <img className='w-4' src={arrow} alt='arrow-down' />
            </div>
            <div className={`my-2 ${state.price.isShow ? "flex" : "hidden"}`}>
              <label>${min(products)}</label>
              <input name='price' value={state.price.value} className='w-full mx-1' type="range" min={min(products)} max={max(products)}
              onChange={(event) => dispatch({type: "CHANGE_VALUE", payload: event.target})}
              />
              <label>${max(products)}</label>
            </div>
    </section>
  )
}

export default FilterPrice