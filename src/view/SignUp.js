import React from 'react'
import '../style/Authentication.css'
import Axios from 'axios'
import { useState } from "react"
function SignUp() {

    const [emailRegister, setEmail] = useState("")
    const [passwordRegister, setPassword] = useState("")
    const [countryRegister, setCountry] = useState("")
    const register = () => {
      Axios.post("http://localhost:3001/register", {email: emailRegister, password: passwordRegister, country: countryRegister}).then((response) => {
        console.log(response)
      })
    }
    return (
        <div className="authentication">
          <div className="wall">
            <input type="text" onChange={(event) => {setEmail(event.target.value)}} placeholder="Email" className="field" />
            <input type="password" onChange={(event) => {setPassword(event.target.value)}} placeholder="Password" className="field" />
            <input type="text" onChange={(event) => {setCountry(event.target.value)}} placeholder="Country" className="field" />
            <button onClick={register}>Sign Up</button>
          </div>
        </div>  
    )
}

export default SignUp;