import { createContext, useContext, useState } from "react";

const getProviders = createContext();

export const useTheContext = () => {
    const context  = useContext(getProviders);

    return context
}

export function ProvidersContex({children}){

    const [valueSelect, setValueSelect] = useState('AR');
    const [idProvider, setIdProvider] = useState(0)



    const changeValueSelect = (e) => {
        setValueSelect(e.target.value);
        console.log(valueSelect)
    }

    const getIdProvider = (id, data) => {
         const findProvides = data.find(obj => obj.provider_id === id);

         if(findProvides.provider_id === id){
            findProvides.check = true
            console.log(findProvides)
         }
    }


    return(

    <getProviders.Provider value={{changeValueSelect, valueSelect, getIdProvider}}>
        {children}
    </getProviders.Provider>
    )
}