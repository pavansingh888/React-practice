import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 p-4 text-3xl text-white '>User: {userid /*to access this value we use a method - useParams */}</div>
  )
}

export default User