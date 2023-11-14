import React from 'react'
import Admindashboard from '../Components/Dashboard'
import Sidebar from '../Components/Sidebar'
import './style.css'
function AdminDashboard() {
  return (
    <>
            <div className="Admin">
                <Sidebar/>
                <Admindashboard/>
            </div>
    </>
  )
}

export default AdminDashboard