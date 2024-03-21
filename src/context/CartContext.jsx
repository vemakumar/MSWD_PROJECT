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
        case "SET_TOTAL":
            let ans=0
            for(let i=0;i<state.cart.length;i++){
                ans=ans+state.cart[i].price
            }
            return {
                cart:state.cart,
                total:ans
            }
    }

}
export const CartContextProvider = ({ children }) => {
    const[state,dispatch]=useReducer(cartReducer,{
        cart:[],
        total:0
    })
  return (
    <CartContext.Provider value={{...state,dispatch}}>
    {children}
    </CartContext.Provider>
  );
};
