//2. Creating provider/UserContextProvider

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

     //What this .Provider will provide? - We will need to give data to this context right.
    const [user,setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children /*Can be Crad -> dashborad -> button, we are rendering it as it is by providing userContext thru wrapping in UserContext.Provider(we need to access value of UserContext using .Provider)
        We have although wrapped using provider but actually what value we are giving access to ,that also we'll need to tell.for that we get a property in provider prop where we provide value.*/}
        </UserContext.Provider> 
    )
}

export default UserContextProvider