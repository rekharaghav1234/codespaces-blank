'use client'
import './login.css'
import axios from "axios"
import { useState } from 'react'
import Button from '../Button/Button'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };
    // const login = () => {
    //     console.log(data);
    // };
    const login = async(e) =>{
        e.preventDefault();
        const res = await axios.post('/api/user/login',data);
        console.log(res,' this is res form backend')
    }
    return (
        <div className="border">
            <h1>Login page</h1>
            <div className='outer'>
                <div><h2> email</h2>
                    <h2>password</h2></div>
                <div><h2><input type="email" placeholder='Email' name="email" value={data.email} onChange={handlechange} /></h2>
                    <h2><input type="number" placeholder='Number' name="password" value={data.password} onChange={handlechange} /></h2></div>
            </div>
            <Button add={'/'} text={'Login'} fun={login} bg='crimson'  onClick={login} />
        </div>
    )
}
export default Login
