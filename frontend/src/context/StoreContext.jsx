import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreCotext = createContext(null)


const StoreCotextProvider = (props)=>{


    const contextValue = {
        food_list
    }

    return(
        <StoreCotext.Provider value={contextValue}>
            {props.children}
        </StoreCotext.Provider>
    )
}


export   {StoreCotextProvider}