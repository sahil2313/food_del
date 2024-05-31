import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{

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

    const getTotalCartAmount = ()=>{
        let totalAmout = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmout += itemInfo.price*cartItems[item]
            }
        }
        return totalAmout
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }


    useEffect(()=>{
        for(const item in cartItems){
            console.log(item)
        }
        console.log(cartItems)
    },[cartItems])

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export   {StoreContextProvider}