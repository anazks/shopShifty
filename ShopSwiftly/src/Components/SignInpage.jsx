import React, { useContext, useRef } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';

import './SignInpage.css'
import Signinimage from '../Images/signupimage.jpg'
import { Link, json } from 'react-router-dom'
import Axios from '../Static/Axios'
import { UserContext } from '../Static/UserContext'


function SignInpage() {
          const navigate = useNavigate();

          const {User,setUser} = useContext(UserContext)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event)=>{
      event.preventDefault();

      const Email = emailRef.current.value;
      const Password = passwordRef.current.value;

      const LoginData = {
        Email,
        Password
      }
      try {
          Axios.post('/userLogin',LoginData).then((response)=>{
            console.log(response.data,"response data")
            if(response.data){
                  const userData = JSON.stringify(response.data)
                  localStorage.setItem('Auth_info',userData)
                  console.log(userData,"userDta")
                  setUser(userData)

                  navigate('/');
            }
            
          })
      }catch(error){
        console.log(error)
      }
    }
  return (
    <>
    <section className='hero'>
        <div className='sign_in_main'>
            <div className='sign_in_left'>
                <div className='sign_in_pattern'>
                    <img src={Signinimage} alt="" />
                </div>
            </div>
            <div className='sign_in_right'>
                <div className='sign_in_heading'>
                  <h1>Welcome Back!</h1>
                  <p>Welcome Back! Enjoy your Shopping!</p>
                </div>
                <div className='sign_in_form'>
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email or Phone Number' ref={emailRef}/><br/>
                    <input type="password" placeholder='Password' ref={passwordRef}/><br/>
                    <div className='sign_in_forgot'>
                    <p><Link to="/signup">New User?</Link></p>
                    <p>Forgot Password?</p>
                    </div>
                  
                    <button type='submit'>Log In</button><br/>
                  </form>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default SignInpage