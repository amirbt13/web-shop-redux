import React, { useReducer, createContext } from 'react'

let initialState = {
    selectedItems : [],
    isChekedOut : false,
    itemsCount: 0,
    totalPrice: 0
}

const sumItem = (items) => {
    const itemsCount = items.reduce((total, product) => total + product.quantity, 0)
    const totalPrice = items.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2)
    return {itemsCount, totalPrice}
}

const cartReducer = (state, action) => {
    
    switch (action.type) {

        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                        ...action.payload,
                         quantity: 1
                    })
                    console.log("ADD_ITEM")
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItem(state.selectedItems),
                isChekedOut: false
            }

        case "REMOVE_ITEM":
            console.log("REMOVE_ITEM")
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItem(newSelectedItems)
            }    

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quantity++;
            return {...state, ...sumItem(state.selectedItems)}

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity--;
            return {...state, ...sumItem(state.selectedItems)}
         
         case "CHECKOUT":
            if(state.totalPrice > 0){
                console.log("CHECKED_OUT")
           return {
            selectedItems : [],
            isChekedOut : true,
            itemsCount: 0,
            totalPrice: 0
           }
        }
         case "CLEAR":
            return {
                selectedItems : [],
                isChekedOut : false,
                itemsCount: 0,
                totalPrice: 0
            }

            
            default: return state
    }
}

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{state, dispatch}}>
       {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider