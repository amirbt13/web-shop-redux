import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import CartButtons from '../smallComponents/CartButtons'

// Context
import { ProductsContext } from '../contexts/ProductsContextProvider'

const ProductDetails = () => {
  const params = useParams()
  const id = params.id - 1

    const {products} = useContext(ProductsContext)
    const product = products[id]
  

  return (
    <div className='flex justify-around
   items-start xs:items-center my-20 mx-5'>
      <div className='basis-1/3 xs:basis-1/2'>
        <span className='rounded-sm bg-slate-400 text-sm p-1 inline-block mb-4'>{product.category}</span>
        <h3 className='text-2xl md:text-4xl mb-4'>{product.title}</h3>
        <CartButtons product={product}/>
        <p className='text-[#363636]'>{product.description}</p>
      </div>
      <div className='basis-2/3 xs:basis-1/2 flex justify-end'>
        <img className='w-[200px] sm:w-[300px] lg:w-[400px]' src={product.image} alt='product'/>
      </div>
    </div>
  )
}

export default ProductDetails