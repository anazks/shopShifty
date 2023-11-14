const express = require('express')
const router = express.Router(); 
const {HomepageData,userRegistration,userLogin,AddToCart,getCartItem,removefromCart,increment,decrement,createOrder} =  require('../Controllers/UserConrtoller')

router.route('/').get(HomepageData)
router.route('/UserRegistration').post(userRegistration)
router.route('/userLogin').post(userLogin)
router.route('/AddToCart').post(AddToCart);
router.route('/getCartItem').post(getCartItem);
router.route('/RemoveFromCart').post(removefromCart)
router.route('/increment').post(increment)
router.route('/decrement').post(decrement)
router.route('/CreateOrder').post(createOrder)

module.exports = router;