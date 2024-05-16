import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreCotext = createContext(null)


const StoreCotextProvider = (props)=>{

    const [cartItems , setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev , [itemId] : 1} ));
        }else{
            setCartItems((prev) =>( {...prev , [itemId] : cartItems[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev) =>({...prev , [itemId] : cartItems[itemId] - 1}))
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }


    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    return(
        <StoreCotext.Provider value={contextValue}>
            {props.children}
        </StoreCotext.Provider>
    )
}


export   {StoreCotextProvider}