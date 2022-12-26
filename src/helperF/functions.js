export const quantityCount = (state, id) => {
   const index = state.selectedItems.findIndex(item => item.id === id)
   if(index !== -1){
      return state.selectedItems[index].quantity
   } else {
      return false
   }
}

export const isInCart = (state, id) => {
   const resault = !!state.selectedItems.find(item => item.id === id)
   return resault
}

export const max = (products) => {
   const maxPrice = products.reduce((total, item) => Math.max(total, item.price), 0)
   
   return maxPrice
 }
export const min = (products) => {
   const minPrice = products.reduce((total, item) => Math.min(total, item.price), 100000)
   
   return minPrice
 }