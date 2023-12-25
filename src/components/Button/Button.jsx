'use client'
import { useRouter } from 'next/navigation';
import './button.css'
const Button = ({ add, text, fun,bg }) => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault();
        if (fun) {
            fun()
        }
        if(add){
            router.push(add)
        }
    }
    return (
        <button className='btn' style={{background:bg}} onClick={handleClick}>{text}</button>
    )
}


export default Button;
