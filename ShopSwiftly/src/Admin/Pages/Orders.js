import React from 'react'
import Adminorder from '../Components/Orders'
import Sidebar from '../Components/Sidebar'
import './style.css'
function Orders() {
  return (
    <>
        <div className='Admin'>
            <Sidebar/>
            <Adminorder/>
        </div>
    </>
  )
}

export default Orders