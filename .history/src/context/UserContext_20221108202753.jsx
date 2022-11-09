import { createContext } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    return (
        <UserContext.Provider>
            {childern}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}