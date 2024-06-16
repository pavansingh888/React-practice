import { useState } from "react"
export default function Form(){
     let [formData,setformData] = useState({
        fullName : "", 
        username: "",
        //name value in html element should be same as the name of state variable, so that we can access and update it throught handleInputChange()  
        password : ""
     }) //input value is association with state variable

    //  let handleNameChange = (event)=>{
    //     console.log(event.target.value);
    //     setFullName(event.target.value)
    //  }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name
        // let newValue = event.target.value
        setformData((currData)=>{
            // currData[fieldName]=newValue //accessing using computed property name - for fieldName variable
            return {...currData, [event.target.name] : event.target.value}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName : "", 
            username: "",
            password : ""
         })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input placeholder="enter full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"></input> 

            <br /><br /><br />
            <label htmlFor="username">Username </label>
            <input placeholder="enter username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"></input> 

            <br /><br /><br />
            <label htmlFor="password">Password </label>
            <input placeholder="enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"></input> 

            <br /><br /><br />
            <button>Submit</button>
        </form>
        </>
    )
}