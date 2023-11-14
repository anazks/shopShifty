import React from 'react'
import './Orders.css'
function Orders() {
  return (
    <>
        <>
        <section className='admin_orders'>
               <div className='order_heading'>
                    <h1>Orders</h1>
                    <p></p>
               </div>
               <div className='order_list'>
                <table>
                    <tr>
                        <th>OID</th>
                        <th>Product Name</th>
                        <th>Customer Name</th>
                        <th>Confirmation</th>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>Laptop</td>
                        <td>John Doe</td>
                        <td><button>Confrim</button><button>Cancel</button></td>
                        
                    </tr>
                </table>
               </div>
              
        </section>
    </>
    </>
  )
}

export default Orders