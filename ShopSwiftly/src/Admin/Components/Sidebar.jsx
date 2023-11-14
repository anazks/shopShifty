import React from 'react'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import './Sidebar.css'
import AdminLogo from '../Images/logo.svg'
import { Link } from "react-router-dom"
function Sidebar() {
  return (
    <>
        <section className='admin_sidebar'>
            <div className='admin_logo'>
                <img src={AdminLogo} alt="" />
            </div>
            <div className='sidebar_list'>
                <div className='items active'><Link to='/admindash'>Dashboard</Link></div>
                <div className='items'><Link to='/adminaddpro'>Add Products</Link></div>
                <div className='items'><Link to='/adminaddcat'>Add Category</Link></div>
                <div className='items'><Link to='/adminorder'>Orders</Link></div>
                <div className='items'><Link to='/'>Customers</Link></div>
                <div className='items'><Link to='/'>Settings</Link></div>
                <div className='items'><Link to='/'>Logout</Link></div>

            </div>
        </section>
    </>
  )
}

export default Sidebar