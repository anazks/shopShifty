import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import HomeCards from '../Components/HomeCards'
import Aboutus from '../Components/Aboutus'
import Bloghome from '../Components/Blog'

function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <HomeCards/>
        <Aboutus/>
        <Bloghome/>
        <Footer/>
    </>
  )
}

export default Home