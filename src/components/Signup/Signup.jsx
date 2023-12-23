'use client'
 import React, { useState } from "react";
 import './Signup.css'
// import { data } from "autoprefixer";
// import { useState } from "react";
const Signup = () => {
  const [data,setData] = useState({
   username:'',
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
            <h1>Signup page</h1>
        <div className='outer'>
            
            <div><h2>username </h2>
            <h2>Email</h2>
            <h2>password </h2></div>
            <div><h2><input type="text" placeholder="username" name="username" value={data.username} onChange={handlechange} /></h2>
            <h2><input type="email" placeholder='Email'   name="email" value={data.email} onChange={handlechange}/></h2>
            <h2><input type="number" placeholder='Number' name="password" value={data.password} onChange={handlechange} /></h2></div>
            
        </div>
        <button>submit</button>
</div>
    )
}
export default Signup