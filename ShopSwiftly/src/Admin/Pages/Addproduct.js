import React from 'react'
import Sidebar from '../Components/Sidebar'
import Addpro from '../Components/Addproduct'
import './style.css'
function Addproduct() {
  return (
    <>
            <div className="Admin">
                <Sidebar/>
                <Addpro/>
            </div>
    </>
  )
}

export default Addproduct