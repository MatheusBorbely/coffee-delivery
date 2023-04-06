import { ChangeEvent, ReactNode, createContext, useState } from "react"
import { User, UserContextType } from "../interfaces/User";

interface  UserContextProviderProps{
    children: ReactNode;
}

const userEmpty: UserContextType = {
    user: null,
    setNewUser: () => {}
}

export const UserContext = createContext<UserContextType>(userEmpty);

export function UserContextProvider({children} : UserContextProviderProps){
    const [user, setUser] = useState<User | null>(null);

    function setNewUser(newUser: User) {
        setUser(newUser)
    }

    const contextValue = {user, setNewUser};

    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )  
}
