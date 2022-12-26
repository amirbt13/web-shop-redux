export let initialState = {
    search: {
        isShow: false,
        value: ""
    },
    category : {
        isShow: false,
        value: "all"
    },
    price: {
        isShow: false,
        value: 0
    },
    main: {
        isShow: false
    }
}


export const filterReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_VALUE" :
            console.log(state)
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name],
                    value: action.payload.value
                }
                
            }
        case "CHANGE_SHOW" :
            Object.keys(state).forEach(key =>{

                if(key === action.payload){
                    state[key].isShow = !state[key].isShow
                    
                } else if(key !== 'main' && key !== action.payload){
                    state[key].isShow = false
                }
            })
            //console.log(state)
            return {
                ...state
            } 
          
        }
}