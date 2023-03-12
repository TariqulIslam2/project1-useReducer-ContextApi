import { actionTypes } from "./actionTypes";

export const initialState = {
  data:[],
  cart: [],
  
};


export const reducer = (state, action) => {
    
    switch (action.type) {
      case actionTypes.LOADDATA:
        return {
          ...state,
          data:  action.payload,
        };
        case actionTypes.ADDTOCART:
          {
            
            if (state.cart.includes(action.payload)) {
             console.log("This Product already added!");
           
            } else {
              return {
                ...state,
                cart: [...state.cart, action.payload],
              };
             
            }

           
           
          }
           
      
            default:
              return state;


}



}