import React from 'react'
import '../style/Authentication.css'
import Axios from 'axios'
import { useState } from "react"
function SignUp() {

    const [emailRegister, setEmail] = useState("")
    const [passwordRegister, setPassword] = useState("")
    const [countryRegister, setCountry] = useState("Australia")
    const register = () => {
      Axios.post("http://localhost:3001/register", {email: emailRegister, password: passwordRegister, country: countryRegister}).then((response) => {
        console.log("response")
        console.log(response)
      })
    }
    return (
        <div className="authentication">
          <div className="wall">
            <input type="text" onChange={(event) => {setEmail(event.target.value)}} placeholder="Email" className="field" />
            <input type="password" onChange={(event) => {setPassword(event.target.value)}} placeholder="Password" className="field" />
            <select onChange={(event) => { setCountry(event.target.value) }} placeholder="Country" className="field">
              <option value="Australia"> Australia </option>
              <option value="Canada"> Canada </option>
              <option value="China"> China </option>
              <option value="Germany"> Germany </option>
              <option value="Japan"> Japan </option>
              <option value="Switzerland"> Switzerland </option>
              <option value="United Kingdom"> United Kingdom </option>
              <option value="United States"> United States</option>
              <option value="New Zealand"> New Zealand </option>
            </select>
            <button onClick={register}>Sign Up</button>
          </div>
        </div>  
    )
}

export default SignUp;