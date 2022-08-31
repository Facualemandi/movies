import { createContext, useContext, useState } from "react";

const getProviders = createContext();

export const useTheContext = () => {
    const context  = useContext(getProviders);

    return context
}

export function ProvidersContex({children}){

    const [valueSelect, setValueSelect] = useState('AR');


    const changeValueSelect = (e) => {
        setValueSelect(e.target.value);
        console.log(valueSelect)
    }


    return(

    <getProviders.Provider value={{changeValueSelect, valueSelect}}>
        {children}
    </getProviders.Provider>
    )
}