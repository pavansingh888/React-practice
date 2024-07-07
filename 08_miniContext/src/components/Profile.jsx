import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //accessing value form UserContext
    const {user} = useContext(UserContext)
  
    //conditional return
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile