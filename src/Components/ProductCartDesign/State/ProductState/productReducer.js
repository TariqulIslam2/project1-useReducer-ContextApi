import { actionTypes } from "./actionTypes";

export const initialState = {
  data: [],
  cart: [],
  order:[]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADDATA:
      return {
        ...state,
        data: action.payload,
      };

    case actionTypes.ADDTOCART: {
      if (state.cart.includes(action.payload)) {
        console.log("This Product already added!");
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }

    case actionTypes.INCREMENT: {
      const updatedCart = state.cart.map((data, index) => {
        if (data.id === parseInt(action.payload)) {
          const myItem = {
            ...data,
            quantity: data.quantity + 1,
            totalPrice: data.price * (data.quantity + 1),
          };
          return myItem;
        }
        return data;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case actionTypes.DECREMENT: {
      const updatedCart = state.cart.map((data, index) => {
        if (data.id === parseInt(action.payload)) {
          if (data.quantity > 1) {
            return {
              ...data,
              quantity: data.quantity - 1,
              totalPrice: data.price * (data.quantity - 1),
            };
          }
        }
        return data;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case actionTypes.REMOVEPCART: {
      const removeCart = state.cart.filter((data, index) => 
        data.id !== parseInt(action.payload)) ;
      return {
        ...state,
        cart: removeCart,
      };
    }
    case actionTypes.ADDTOORDER: {
       return {
         ...state,
         order: [...state.order,  ...state.cart],
         cart: [],
       };
    }

      
      
    default:
      return state;
  }
};
