// * create context api data for component in app

import { createContext, useContext, useEffect, useReducer } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

const initState = {
    cart: CartData,
    total: 0,
    amount: 0
}
const cartContext = createContext()

export const MyCartContext = () => {
    return useContext(cartContext)
}

const CartProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const toggleQuantity = (id,type) => {
        dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}})
    }

    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <cartContext.Provider value={{...state,removeItem,toggleQuantity,formatNumber}}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext,CartProvider}