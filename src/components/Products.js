import React, { useContext } from 'react'

import Product from './Product'


// Context
import { ProductsContext }from '../contexts/ProductsContextProvider'
import Filters from './Filters'


const Products = () => {

    const {products, setProducts} = useContext(ProductsContext)
    //console.log(products)

  

  return (
    <div className='flex flex-col-reverse sm:flex-row'>
      <div className='basis-3/4 md:basis-4/5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5 my-6 mx-2'>
          {
          products.map(product => <Product key={product.id} product={product}/>)
      }
      </div>
      <Filters products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Products