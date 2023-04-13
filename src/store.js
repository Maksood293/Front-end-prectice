import React, { createContext, useContext, useReducer } from "react";

const store = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "Update":
      return {
        ...state,
        color: action.payload
      };
    case "Add_Item":
      return {
        ...state,
        item: [...state.item, action.payload]
      };
    case "Delete_Item":
      return {
        ...state,
        item: state.item.filter((item, index) => index !== action.payload)
      };
    case "Add_Todos":
      return {
        ...state,
        todo: action.payload
      };

    default:
      break;
  }
};
export const useStore = () => useContext(store);
export const StoreContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    color: "black",
    item: [],
    todo: []
  });

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
export default StoreContext;
