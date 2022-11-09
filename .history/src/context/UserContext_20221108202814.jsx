import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}