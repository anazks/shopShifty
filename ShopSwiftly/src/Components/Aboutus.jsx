import React from 'react'
import './Aboutus.css'
import Aboutimage from '../Images/jason-goodman-Oalh2MojUuk-unsplash.jpg'

function Aboutus() {
  return (
    <>
    
        <div className='aboutus_content'>
            <div className='aboutus_left_content'>
                <img src={Aboutimage} alt="" />
            </div>
            <div className='aboutus_right_content'>
                <div className='about_headiing'>
                    <h1>About Us</h1>
                </div>
                <div className='about_description'>
                    <p>Our journey began with a simple idea: to make high-quality products easily accessible to everyone. We were tired of sifting through crowded malls and generic online stores to find unique and stylish items. So, we decided to take matters into our own hands by curating a collection of products that you can't find anywhere else. As a team of dedicated individuals, we've worked tirelessly to source the finest products from around the world, ensuring that every item in our inventory meets our high standards for quality and craftsmanship. We believe that everyone deserves to own products that bring joy and satisfaction, and we're here to make that happen.</p>
                </div>

                <div className='about_button'>
                    <button>See More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Aboutus