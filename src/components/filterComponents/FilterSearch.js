import React, {useEffect} from 'react'

import arrow from '../../icons/down-arrow.svg'


const FilterSearch = ({ state, dispatch, setProducts }) => {
  
    useEffect(() => {
        if(state.search.value !== ""){
    
          setProducts(prevProducts => prevProducts.map(product => {
    
            if(product.title.toLowerCase().includes(state.search.value)){
              return {
                ...product,
                isShow: true
              }
            } else {
              return {
                ...product,
                isShow: false
              }
            }
          }))
        } else {
          setProducts(prevProducts => prevProducts.map(product => {
            return {...product, isShow: true}
          }))
        }
      }, [state.search.value])

  return (
    
        <div className='bg-white mb-2 mx-1 py-1 px-2 rounded-lg text-gray-800'>
              <div className='flex justify-between'
              onClick={() => dispatch({type: "CHANGE_SHOW", payload: "search"})}
              >
                <p>Search</p>
                <img className='w-4' src={arrow} alt='arrow-down' />
              </div>
              <div className={`${state.search.isShow ? "block" : "hidden"} mt-1`}>
                <input name='search' value={state.search.value} className='w-full px-2 py-1 my-1 bg-slate-300 rounded-lg' type="text"
                onChange={(event) => dispatch({type:"CHANGE_VALUE", payload: event.target})}/>
              </div>
            </div>
    
  )
}

export default FilterSearch