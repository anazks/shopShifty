const express = require('express')
const router = express.Router(); 
const {getAllUsers,getEvent,Addevent,HomepageData,userRegistration,userLogin,getOneEvent} =  require('../Controllers/UserConrtoller')

router.route('/').get(HomepageData)
router.route('/UserRegistration').post(userRegistration)
router.route('/userLogin').post(userLogin)
router.route('/Addevent').post(Addevent)
router.route('/getEvent').post(getEvent)
router.route('/getAllUsers').get(getAllUsers)
router.route('/getTaggedEvent').post(getOneEvent)
module.exports = router; 