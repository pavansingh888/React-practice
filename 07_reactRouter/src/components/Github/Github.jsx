import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] =useState([])
    // useEffect(()=>{
    //  fetch('https://api.github.com/users/pavansingh888')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img  src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

/*
Route Configuration: The loader property in the route configuration specifies the function to be called before rendering the route. When the route is accessed, React Router will call the loader function and wait for the promise to resolve before rendering the component.
useLoaderData Hook: This hook is used inside the component to access the data returned by the loader function. It allows the component to use the pre-fetched data directly, avoiding the need for additional data fetching within the component. 
*/
export const getuserInfo = async () => {
    const response = await fetch('https://api.github.com/users/pavansingh888')
    console.log("Loader worked");
    return response.json()    
}