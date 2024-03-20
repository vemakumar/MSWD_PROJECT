import { createContext, useReducer } from "react";
export const CartContext = createContext();
const cartReducer=(state,action)=>{
    switch(action.type){
        case "ADD_CART":
            return {
                cart:[action.payload,...state.cart]
            }
        case "DISPLAY_CART":
            return{
                cart:state.cart
            }
        
    }

}
export const CartContextProvider = ({ children }) => {
    const[state,dispatch]=useReducer(cartReducer,{
        cart:[],
    })
  return (
    <CartContext.Provider value={{...state,dispatch}}>
    {children}
    </CartContext.Provider>
  );
};
