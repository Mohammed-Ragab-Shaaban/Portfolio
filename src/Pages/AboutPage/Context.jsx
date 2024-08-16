import React from 'react'

import { createContext, useState } from "react"


const CardsContext = createContext();

const CardsProvider = ({children}) =>{
    const [counter , setCounter] = useState(10); 
    
return(
    <CardsContext.Provider 
       value = {{ counter , setCounter  }} >
       {children}
    </CardsContext.Provider>
);
};
