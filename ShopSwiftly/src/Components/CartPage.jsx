import React, { useEffect ,useContext, useState} from 'react'
import './CartPage.css'
import Product1 from '../Images/product 1.jpg'
import Axios from '../Static/Axios'
import { UserContext } from '../Static/UserContext'
import { json } from 'react-router'
import {ImgUrl} from '../Static/ImagUrl'

function CartPage() {
    
        const {user,setUser} = useContext(UserContext)
        const [cartItems, setCartitems] = useState([])
        const [total,setTotal] =useState("")
        const [displayRazorpay, setDisplayRazorpay] = useState(false);
        const [orderDetails, setOrderDetails] = useState({
            orderId: null,
            currency: null,
            amount: null,
        });
        
        const totalAmt = ()=>{
            
        }
        useEffect( () => {
            try {
                getItems();
                    
            } catch (error) {
                console.log(error)
            }
        }, [])

        const removeCart = ((id)=>{
                console.log(id,"cart remove id")
                let user_Id = user.user._id
                    let Data_user ={
                        id,
                        user_Id
                    }
                    
                try {
                    Axios.post('/RemoveFromCart',Data_user).then((response)=>{
                       console.log(response.data)
                    })
                    getItems();
                } catch (error) {
                    console.log(error)
                }

        })

        const getItems = ()=>{
                        try {
                                        console.log("get cart woriing")      
                                        // let userData = JSON.parse(localStorage.getItem('Auth_info'))
                                        let  userData = user.user;
                                        // console.log(userData,"Userid from cart from auth info")
                                            Axios.post('/getCartItem',userData).then((response)=>{
                                            console.log(response.data,"cartData")
                                            setCartitems(response.data.product)
                                            let payment = 0;
                                            response.data.product.map((item)=>{
                                                            console.log(item.offer_price)
                                                            payment = payment + (parseInt(item.offer_price) * parseInt(item.quantity));
                                                        }) 
                                    console.log(payment,"payment");
                                    setTotal(payment)
                                            
                                    })
                                    totalAmt(); 
                        } catch (error) {
                                console.log(error)   
                        }
                    }
        const increment = (id)=>{
            console.log("working")
            let user_Id = user.user._id
            let product = {
                    id,
                    user_Id
            }
            try {
                Axios.post('/increment',product).then((response)=>{
                        console.log(response.data)
                      
                })
                getItems() 
            } catch (error) {
                    console.log(error)
            }
        }
        const decrement = (id)=>{
            console.log("working")
            let user_Id = user.user._id
            let product = {
                    id,
                    user_Id
            }
            try {
                Axios.post('/decrement',product).then((response)=>{
                        console.log(response.data)
                        
                })
                getItems()
            } catch (error) {
                    console.log(error)
            }
        }
        const payNow=()=>{
            let userid = user.user._id;
            let Data = {
                total,
                userid
            }
                try {
                    Axios.post('/CreateOrder',Data).then((response)=>{
                        console.log(response.data)
                    })
                } catch (error) {
                    
                }
        }
  return (
    <>
            <div className='cart_heading'>'
                <h1>My Cart</h1>
            </div>

            <section className='cart_hero'>
                <div className='cart_item'>
                    {
                            cartItems.map((item)=>{
                                    return (
                                        <>
                                        <div className='cart_items'>
                                                <div className='cart_products'>
                                                    <div className='cart_product_img'>
                                                        <img src={  ImgUrl + '/' + item._id+'.jpg'} alt="" />
                                                    </div>
                                                    <div className='cart_product_details'>
                                                        <p><b>{item.name}</b></p>
                                                        <p>{item.offer_price}</p>
                                                        <button onClick={()=>removeCart(item._id)}>Remove</button>
                                                </div>
                                            </div>
                                                <div className='cart_product_counter'>
                                                    <button onClick={()=>increment(item._id)}>+</button>
                                                    <input type="number" value= {item.quantity} />
                                                    <button onClick={()=>decrement(item._id)}>-</button>
                                                </div>
                                        </div>
                                        </>
                                    )
                            })

                    }


               

                </div>
                <div className='cart_total'>
                    <div className='cart_total_table'>
                        <table>

                            <tr>
                                <th>Your Order</th>
                            </tr>

                            <tr>
                                <td>Sub-Total</td>
                                <td>${total}</td>
                            </tr>

                            <tr>
                                <td>Delivery_charge</td>
                                <td>$30</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <th>${total + 30}</th>
                            </tr>

                        </table>

                    </div>
                    <div className='cart_checkout_btn'>
                            <button onClick={()=>payNow()}>Checkout</button>
                        </div>
                </div>
            </section>
    </>
  )
}

export default CartPage