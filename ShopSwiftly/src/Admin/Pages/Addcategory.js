import React from 'react'
import Sidebar from '../Components/Sidebar'
import Addcat from '../Components/Addcategory'
import './style.css'


function Addcategory() {
  return (
            <div className="Admin">
                <Sidebar/>
                <Addcat/>
            </div>
  )
}

export default Addcategory