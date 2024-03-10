import {createContext, useReducer} from "react";
import {reducer} from "./reducer/reducer";

export const CartContext = createContext(undefined)
export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, [])
    const value = {cartList:state, dispatch}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}