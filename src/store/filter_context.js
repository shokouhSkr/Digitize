import React, { useReducer, useContext, useEffect } from "react";

const initialState = {
  cartItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return { ...state, isLoading: true };

    case "SET_STORIES":
      return { ...state, isLoading: false, hits: action.val.hits, nbPages: action.val.nbPages };

    default:
      throw new Error(`Invalid action - ${action.type}`);
  }
};

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ProductsContext.Provider value="hello">{children}</ProductsContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, ProductsProvider };
