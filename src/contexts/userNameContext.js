import React, {useContext, useState} from "react";

const UserContext = React.createContext(null)

const UserProvider = ({children}) => {

    const [userName] = useState(localStorage.getItem('userName'))
    const [userIsAuthorized] = useState(localStorage.getItem('isAuthorized'))


    return (
        <UserContext.Provider value={[userName , userIsAuthorized]}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserData = () => useContext(UserContext)

export default UserProvider
