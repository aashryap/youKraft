import { createContext, useContext, useState } from "react";


export const UserContext = createContext();


export const UserProvider = (props) => {
    const [userDetails, setUserDetails] = useState({});
    return (
        <UserContext.Provider value={{setUserDetails, userDetails}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserDetailsContext = () => useContext(UserContext);

