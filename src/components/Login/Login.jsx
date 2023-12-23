'use client'
import React from 'react'
import './Login.css'
import { useState } from 'react'
const Login = () => {
    const [data,setData] = useState({
       
        email:'',
        password:''
       })
       const handlechange=(e)=>{
         const{name,value}=e.target;
         setData({
             ...data,
             [name]:value
         })
        }
    return (
        <div className="border">
            <h1>Login page</h1>
        <div className='outer'>
        <div><h2> email</h2>
        <h2>password</h2></div>
        <div><h2><input type="email" placeholder='Email'   name="email" value={data.email} onChange={handlechange}/></h2>
            <h2><input type="number" placeholder='Number' name="password" value={data.password} onChange={handlechange} /></h2></div>
           </div> 
            <button>submit</button>
        </div>
    )
}
export default Login
