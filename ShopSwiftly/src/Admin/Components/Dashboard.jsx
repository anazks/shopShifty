import React from 'react'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";
import './Dashboard.css'

function Dashboard() {
  return (
    <>
        <section className='admin_dash'>
            <nav className='admin_nav'>
               <div className='dash_heading'>
                    <p>Welcome</p>
                    <h1>Admin Dashboard</h1>
                    <p></p>
               </div>
               <div className='admin_search'>
                <input type="text" placeholder="Search"/>
                <button>Search</button>
               </div>

            </nav>

            <div className='dash_header'>
                <div className='dash_box'><p>Products <br></br><span>20</span></p></div>
                <div className='dash_box'><p>Categories<br></br><span>7</span></p></div>
                <div className='dash_box'><p>Orders<br></br><span>5</span></p></div>
                <div className='dash_box'><p>Delivered<br></br><span>3</span></p></div>
            </div>
        </section>
    </>
  )
}

export default Dashboard