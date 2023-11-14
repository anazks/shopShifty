import React from 'react'
import './SinglePage.css'
import NMDgrey from '../Images/adidasnmdr1grey.jpg'
import NMDblack from '../Images/adidasnmdr1black.jpg'
import NMDwhite from '../Images/adidasnmdr1white.jpg'

function SinglePage() {
  return (
    <>
        <section className='single_page_product'>
            <div className='page_heading'>
                <h1>Product Name</h1>
            </div>
            <div className='single_product'>
                <div className='single_product_images'>
                    <img src={NMDgrey} alt="" />
                </div>
                <div className='single_product_details'>
                    <div className='product_category'>
                        <p>Mens | Shoes</p>
                    </div>
                    <div className='product1_name'>
                        <p>Adidas NMD R1 Grey</p>
                    </div>
                    <div className='product1_price'>
                        <p>₹12999.00 <span><s>₹6499.50</s></span></p>
                        <p><span id='product_tax'>(Inclusive of all taxes)</span></p>
                    </div>
                    <div className='avail_color'>
                        <p>Available Colors</p>
                        <div className='type_colors'>
                        <div className='colors'>
                            <img src={NMDgrey} alt="" />
                        </div>
                        <div className='colors'>
                            <img src={NMDblack} alt="" />
                        </div>
                        <div className='colors'>
                            <img src={NMDwhite} alt="" />
                        </div>
                        </div>
                    </div>
                    <div className='details_btn'>
                        <button type="submit">Buy Now</button>
                        <button >Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SinglePage