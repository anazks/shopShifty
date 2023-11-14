import React, { useState, useEffect,useContext } from 'react'
import { useNavigate } from 'react-router'
import './HomeCards.css'
import Axios from '../Static/Axios'
import { UserContext } from '../Static/UserContext'
import { Navigate } from 'react-router'
import {ImgUrl} from '../Static/ImagUrl'

function HomeCards() {
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext)
    const [product, setproduct] = useState([])
    useEffect(() => {
                
            try {
                    Axios.get('/Admin/allproducts').then((response)=>{
                            console.log(response)
                            setproduct(response.data)
                    })
            } catch (error) {
                
            }
    }, [])
    
    const addtoCart=(obj)=>{
        console.log(obj)
        console.log(user.user._id,"user")
        let userId =   user.user._id
        let data = {
            obj,
            userId
        }
        try {
                Axios.post('/AddToCart',data).then((response)=>{
                console.log(response.data)
                  navigate('/cart');

                })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
     <div className='homecardheading'>
            <h1>Our Products</h1>
        </div>
    <div className='homeCards'>
       
        <div className='homepageCards'>
            {
               product.map((obj)=>{
                return(
                    <>
                         <div className='homeCard'>
                <div className='homeCardimage'>
                    <img src={  ImgUrl + '/' + obj._id+'.jpg'} alt="" />
                </div>
                <div className='homeCarddetails'>
                    <div className='pname'>
                        <p><b>{obj ? obj.name : ""}</b></p>
                    </div>
                    <div className='productDetails'>
                        <p>Rating</p>
                        <span><p><s>{obj ? obj.price : ""} </s></p></span>
                        <p className='offer'>{obj ? obj.offer_price : ""}</p>
                    </div>

                    <div className='homecard_btn'>
                        <button type="submit" onClick={()=>addtoCart(obj)} >Add to Cart</button>
                    </div>
                   
                
                </div>
            </div>
                    </>
                )
               }) 
            }
           

            
            
        </div>
    </div>

    <div className='homeproductmore'>
        <button>See More</button>
            </div>
    </>
  )
}

export default HomeCards