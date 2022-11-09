import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

const [usuario, setUsuario ] = useState({})
useEffect(() => {
setUsuario({
    name:"Dani Rodríguez Gómez",
    registered: "19/nov/1981"
})

},[])

    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}