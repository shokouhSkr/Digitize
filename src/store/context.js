import React, { useReducer, useContext, useEffect } from "react";
import { products } from "../data.js";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, isLoading: true };

    case "DECREASE_ITEM":
      return { ...state, isLoading: false, hits: action.val.hits, nbPages: action.val.nbPages };

    case "REMOVE_ITEM":
      return { ...state, cartItems: action.val };

    default:
      throw new Error(`Invalid action - ${action.type}`);
  }
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    const newCart = state.cartItems.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_ITEM", val: newCart });
  };

  const addItem = (id) => {
    const newCart = state.cartItems.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_ITEM", val: newCart });
  };

  return (
    <AppContext.Provider value={{ ...state, removeItem, addItem }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
