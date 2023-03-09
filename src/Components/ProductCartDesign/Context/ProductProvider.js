import React, { createContext, useContext, useEffect, useState } from 'react';

const PRODUCT_CONTEXT =createContext()
const ProductProvider = ({children}) => {
    const [data, setData] = useState();
    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => setData(res.products));
    }, []);
   
  
    
    const value = {
       data,
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