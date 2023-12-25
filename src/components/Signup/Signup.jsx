'use client'
import Button from '../Button/Button';
import './Signup.css'
import axios from 'axios';
import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    // const signup = () =>{
    //     console.log(data)
    // }
    const signup = async (e) => {
        e.preventDefault()
        let res = await axios.post('/api/user/signup', data)
        console.log(res,'this is response coming from backend')
        setData({
            userName: '',
            email: '',
            password: ''
        })

    }

    return (
        <div className='main-signup'>
            <div className="border">
                <h1>Signup page</h1>
                <div className='outer'>

                    <div><h2>username </h2>
                        <h2>Email</h2>
                        <h2>password </h2></div>
                    <div><h2><input type="text" placeholder="username" name="username" value={data.username} onChange={handlechange} /></h2>
                        <h2><input type="email" placeholder='Email' name="email" value={data.email} onChange={handlechange} /></h2>
                        <h2><input type="number" placeholder='Number' name="password" value={data.password} onChange={handlechange} /></h2></div>

                </div>
            </div>
            <Button add={'/v1/auth/login'} text={'Signup'} bg=' crimson;' fun={signup} onclick={signup} />
        </div>
    )
}
export default Signup

