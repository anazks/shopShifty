import React from 'react'
import './Footer.css'
import footerLogo from '../Icons/logo.svg'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer_content'>
            <div className='footer_left'>
                <div className='footer_logo'>
                    <img src={footerLogo} alt="" />
                </div>
            </div>
            <div className='footer_right'>
                <div className='footer_lists'>
                    <div className='footer_list'>
                        <ul>
                            <li>Home</li>
                            <li>Category</li>
                            <li>Products</li>
                            <li>About Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className='footer_list'>
                        <ul>
                            <li>Contact Us</li>
                            <li>Customer Care</li>
                            <li>Log In/Log Out</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className='footer_search'>
                        <input type="search" placeholder='Search Products'/>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer