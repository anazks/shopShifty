import React, { useRef } from 'react'
import './Adminsignin.css'
function Adminsignin() {
    const adminrRef = useRef(null)
    const passwordRef = useRef(null)

    const handleSubmit = (event)=>{
        event.preventDefault();

        const Username = adminrRef.current.value;
      const Password = passwordRef.current.value;
            const userName = "admin";
            const password = "admin";
            try {
                    if(Username === userName && Password === password){
                        window.location.href="http://localhost:3001/admindash"
                    }else{
                        alert("Invalid username or password")
                    }
            } catch (error) {
                console.log(error)
            }
    }
  return (
    <>
        <div className='admin_from'>
            <div className='admin_form_heading'>
                <h1>Admin Login</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" ref={adminrRef}/> <br /><br />
                <input type="password" name="" id="" ref={passwordRef}/><br /><br />
                <button type='submit'>Log In</button>
            </form>
        </div>
    </>
  )
}

export default Adminsignin