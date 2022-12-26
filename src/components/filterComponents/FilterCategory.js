import React, {useEffect, useState} from 'react'

import arrow from '../../icons/down-arrow.svg'


const FilterCategory = ({ state, dispatch, products, setProducts}) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = () => {
            const categoryOfEvery = products.map(product => product.category)
            const categories = [...new Set(categoryOfEvery), "all"]
            return categories
        }
        setCategories(getCategories())

    }, [products])

    useEffect(() => {
        setProducts(prevProducts => {
       
              if(state.category.value === 'all'){
               
                return prevProducts.map(product => {
                  return {
                    ...product,
                     isShow: true
                    }
                  })
             
              } else {
            
                return prevProducts.map(product => {
               
                if(product.category !== state.category.value){
                  return {
                    ...product,
                    isShow: false
                  }
                } else {
                  return {...product, isShow: true}
                }
              })
            }
            })
         }, [state.category.value])

  return (
        <section className={` bg-white text-gray-800 mb-2 mx-1 rounded-lg py-1 px-2`}>
            <div className='flex justify-between'
            onClick={() => dispatch({type: "CHANGE_SHOW", payload: "category"})}>
                <p>Categories </p>
                <img className=' w-4' src={arrow} alt='arrow-down' />
            </div>
            <div className={`${state.category.isShow? "flex" : "hidden"} flex-col`}>
                <div className='text-right'>
                    {
                        categories.map(category => <div key={category}> 
                                <label className='mr-2'>{category}</label>
                                <input 
                                onClick={(event) => dispatch({type: "CHANGE_VALUE", payload: event.target})} type="radio" name="category" value={category} 
                                defaultChecked={category === "all" ? true : false}/>
                            </div>
                        )
                    }
                    
                    
                </div>
            </div>
        </section>
  )
}

export default FilterCategory