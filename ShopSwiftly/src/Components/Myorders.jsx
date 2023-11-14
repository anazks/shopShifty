import React from 'react'
import './Myorders.css'
import Product1 from'../Images/product 1.jpg'


function Myorders() {
  return (
    <>
       <div className='myorders_heading'>
        <h1>My Orders</h1>
       </div>
      <section className='myorders_cards'>
       <div className='myorders_main_cards'>
            <div className='myorders_card'>
              <div className='myorder_card_left'>
                <img src={Product1} alt=""/>
              </div>
              <div className='myorder_card_right'>
                  <p><b>Product Name</b></p>
                  <p>$200</p>
                  <p>Qty : 3</p>
                  <button>Track Order</button>
              </div>
            </div>
       </div>
       </section>
    </>
  )
}

export default Myorders