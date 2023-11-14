import React from 'react'
import './Addcategory.css'

function Addcategory() {
  return (
    <>
    <section className='add_cat'>
        <div className='add_cat_heading'>
        <h1>Add Category</h1>
            <p></p>
        </div>
        <div className='Add_cat_form'>
            <form action="" method="post">
                <input type="text" placeholder='Enter Category Name'/><br/><br/>
                <input type="file" /><br />
                <button type="submit">Add Product</button>
            </form>
        </div>
    </section>
</>
  )
}

export default Addcategory