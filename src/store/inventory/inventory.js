import {createContext} from "react";

export const initialState = {
  inventories: [],
  cartItems: [],
  name: 'TigerLily',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_INVENTORIES":
      return {...state, inventories: action.payload}
    case "ADD_TO_CART":
      return {...state, cartItems: [ ...state.cartItems, action.payload]}
     case "REMOVE_FROM_CART":
      // REMOVE ITEM FROM CART
      return 
    default:
      return state;
  }
}

export const InventoryContext = createContext();