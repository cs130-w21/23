import React from 'react'
import '../style/Authentication.css'
import Axios from 'axios'
import { useEffect, useState } from "react"
function LogIn() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    
    return (
        <div className="authentication">
          <div className="wall">
            <input type="text" onChange={(event)=>{setEmail(event.target.value)}} placeholder="Email" className="field" />
            <input type="text" onChange={(event)=>{setPassword(event.target.value)}} placeholder="Password" className="field" />
            <button>Log In</button>
          </div>  
        </div>    
    )
}


export default LogIn;
