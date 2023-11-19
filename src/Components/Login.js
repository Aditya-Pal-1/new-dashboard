import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import first from './Images/Group 3.png'
import '../App.css';

export default function Login() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('');
    const navigate = useNavigate();

    localStorage.setItem("Email","aditya@gmail.com");
    localStorage.setItem("Password","123456789")



    const handleLogin=()=>{
        let Email = localStorage.getItem("Email");
        let Password = localStorage.getItem("Password")
        if(email.length <= 0 || password.length <= 0){
            alert("Please Enter Email And Password")
        }
        else if(email == Email && password == Password){
            navigate("/home");
        }
        else{
            alert("Enter Valid Credential");
        }
    }
    return (
    <div className='loginpage' >
        <img className='logo' src={first} alt="" />
        <h6 style={{marginBottom:"2rem",color:"#36A546CC",fontSize:"1.5rem"}}>#We are Electric</h6>
        <div >
      <form className='form' >
        <input type="text" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
        <input type="password" name="" id="" placeholder='password' value={password} onChange={(e)=>setPassword(e.currentTarget.value)} />
        <button  onClick={handleLogin} >Login</button>
        <span>Forgot Password?</span>
      </form>
      </div>
    </div>
  )
}
