import React from 'react'
import bannerImage from "../Images/banner.png"
import './Banner.css'
function Banner() {
  return (
    <>
    <div className='banner'>
        <div className='bannerLeft'>
            <div className='bannerHeading'>
            <h1>Endless <br />Online <span>Treasures.</span></h1>
            </div>
            <div className='bannerSubheading'>
            <p>Get the best deals on electronics, fashion and more. Shop now for your favorite brands at unbeatable prices</p>
            </div>
            <div className='bannerButton'>
            <button>Shop Now</button>
            </div>
           
        </div>
        <div className='bannerRight'>
            <img src={bannerImage} alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner