import React,{useRef, useState} from 'react'
import './SignUppage.css'
import Signupimg from '../Images/signupimage.jpg'
import Axios from  '../Static/Axios'
import { Link } from 'react-router-dom'
function SignUppage() {
  const [Nomatch, setNomatch] = useState(false)
  const [compleated, setCompleated] = useState(false)
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const ConfirmPasswordRef = useRef(null)
const handleSubmit = (event)=>{
          event.preventDefault();
          
          const Name = usernameRef.current.value;
          const Email = emailRef.current.value;
          const Password = passwordRef.current.value;
          const Cpassword=ConfirmPasswordRef.current.value;
         try {
          if(Name===""||Email===""||Password==="" || Cpassword === ""){
            alert("fill all blanks")
        }else{
          console.log("iam here")
          if(Cpassword === Password) {
              let user = {
                UserName: Name,
                Email: Email,
                Password: Password,
              }
              console.log(user)
              
            Axios.post('/UserRegistration',user).then((response)=>{
              console.log(response.data)
              if(response.data){
                setCompleated(true)
              }
            })
          }else{
              setNomatch(true)
        } 
        }
         } catch (error) {
            console.log(error)
         }
  console.log(Name)
}
  return (
    <>
    <section className='hero'>
        <div className='sign_in_main'>
            <div className='sign_in_left'>
                <div className='sign_in_pattern'>
                    <img src={Signupimg} alt="" />
                </div>
            </div>
            <div className='sign_in_right'>
                <div className='sign_in_heading'>
                  <p>{Nomatch ? 'Password Miss match' : ""}</p>
                  <h1> Enjoy Shoping</h1>
                  <p>Enjoy your Shopping!</p>
                </div>
                <div className='sign_in_form'>
                  <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter Username' ref={usernameRef}/><br/>
                    <input type="text" placeholder='Email or Phone Number' ref={emailRef}/><br/>
                    <input type="password" placeholder='Password' ref={passwordRef}/><br/>
                    <input type="password" placeholder='Confirm Password' ref={ConfirmPasswordRef}/><br/>
                    <div className='sign_in_forgot'>
                    <p><Link to='/signin'>Already User?</Link></p>
                </div>
                  
                    <button type='submit'>Submit</button><br/>
                    {
                          compleated ? 'Registration Compleated' : ''
                    }
                  </form>
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default SignUppage