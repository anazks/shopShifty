import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, json, useMatch } from 'react-router-dom';
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import BlogPage from './Pages/BlogPage';
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import CartPage from './Pages/Cart'
import MyOrders from './Pages/MyOrders';
import Singlepageproduct from './Pages/Signleproduct'
import Admindashboard from './Admin/Pages/AdminDashboard'
import Addpro from './Admin/Pages/Addproduct'
import Addcategory from './Admin/Pages/Addcategory';
import Adminod from './Admin/Pages/Orders'
import { UserContext } from './Static/UserContext';
import AdminSignIn from './Admin/Pages/Adminsignin'


function App() {
      const [user, setUser] = useState(null);
        const value = useMemo(()=>({user,setUser}),[user,setUser])
          useEffect(() => {
             const userData = localStorage.getItem('Auth_info')
             if(userData){
              setUser(JSON.parse(userData));
             }
          }, [])
          
  return (
<UserContext.Provider value={value}>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="product" element={<Products />} />
    <Route path="about" element={<About />} />
    <Route path="blog" element={<BlogPage />} />
    <Route path="signin" element={<SignIn />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="cart" element={<CartPage/>}/>
    <Route path="myorders" element={<MyOrders/>}/>
    <Route path="products" element={<Singlepageproduct/>}/>


    {/* Admin routes */}

  
    <Route path='admindash' element={<Admindashboard/>}/>
    <Route path='adminaddpro' element={<Addpro/>}/>
    <Route path='adminaddcat' element={<Addcategory/>}/>
    <Route path='adminorder' element={<Adminod/>}/>
    <Route path='adminsignin' element={<AdminSignIn/>}/>


 </Routes>
</UserContext.Provider>



  )
}

export default App