import { actionTypes } from "./actionTypes";

export const initialState = {
  cart: [],
};


export const reducer = (state, action) => {
    
    switch (action.type) {
        case actionTypes.ADDTOCART:
            return {
              cart: [...state.cart, action.payload],
            };


}



}