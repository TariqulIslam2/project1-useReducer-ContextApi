import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../State/ProductState/actionTypes';
import { initialState, reducer } from '../State/ProductState/productReducer';

const PRODUCT_CONTEXT =createContext()
const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
    // const [data, setData] = useState();
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          if (res) {
               res.products.forEach(function (product) {
                product.quantity = 1;
                product.totalPrice = product.price;
              });
          
          dispatch({ type: actionTypes.LOADDATA, payload: res.products });
          
          }
     
          
          // console.log(data);
          
          
          
        });
    }, []);
     
    
    
    const value = {
      state,dispatch
   }
    return (
      <PRODUCT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
};

export default ProductProvider;