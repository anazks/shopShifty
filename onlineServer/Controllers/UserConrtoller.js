const userModel = require('../Models/UserModel')
const CartModel = require('../Models/CartModel')
const bcrypt = require('bcryptjs'); 
const Razorpay = require('../payments/Razorpay')
const eventModel = require('../Models/eventModel')
const NotificationModel = require('../Models/NotificationMOdel')
const HomepageData = (req,res)=>{
    let data={name:"anaz"}
    res.send(data);
}
const userRegistration = async (req,res)=>{
    console.log(req.body)
    try {
        const {Password}  =  req.body
        bcrypt.hash(Password,10,  async function(err,hash){
            if(err){
                console.log(err)

            }else{
                req.body.Password = hash;
                console.log(hash)
                await  userModel.create(req.body)
                console.log("Data inserted"
            )
            }
        })
        
    } catch (error) {
        console.log(error) 
    }
    res.json(true)
}

const userLogin = async (req,res)=>{
    console.log(req,res)
    const { Email } = req.body;
    const   pass = req.body.Password;
        try {
            let user = await userModel.findOne({Email:Email})
            console.log(user)
            let Password =user.Password;
            let compare = await bcrypt.compare(pass,Password)
            console.log(compare)
            if(compare){
                
                let userId = user._id;
                let notification = await NotificationModel.find({taggedUsers:userId})
                console.log(notification,"---notifction")
                // res.json(userData)
                
                let userData = {
                        user,
                        cartTotal :0,
                        notification
                }
                res.json(userData)
            }else{
                res.json(false)
                console.log(false)
            }     
        } catch (error) {
            console.log(error)
        }
}


const Addevent = async(req,res)=>{
    try {
        console.log(req.body,"req.body")
        console.log(req.files)
        let addEvent = await eventModel.create(req.body);
        const eventData = req.body;
        // Split taggedUsers and userName into arrays
        const taggedUsersArray = eventData.taggedUsers.split(',');
        const userNameArray = eventData.userName.split(',');
        /// Now, taggedUsersArray and userNameArray contain individual values 
        console.log(taggedUsersArray); // Array of tagged users
        console.log(userNameArray); // Array of user names
         taggedUsersArray.map (async(user) => {
                console.log(user,"--in loop")
                let userID = req.body.userId
                let taggedUsers = user
                let addedBy = req.body.addedBy
                id = req.body.id
                let data = {
                    userID,
                    taggedUsers,
                    id,
                    addedBy
                }
                let Notification = await NotificationModel.create(data);
                console.log("added..")
        })
        console.log("data added")   
        if(req.files){
            const {image} = req.files;
           
            await image.mv('./Public/Images/events/' + addEvent._id +".jpg").then((err)=>{
                if(!err){
                   
                    res.json(true)
                }else{
    
                    console.log(err)
                }
            }) 
        }else{
            res.json(true)
        }
       

    } catch (error) {
        console.log(error)
        res.json(false)
    }
}
const getEvent = async(req,res)=>{
    try {
        console.log(req.body)
       
        let events = await eventModel.find({userId:req.body.userId})

        res.json(events)
    } catch (error) {
        res.json(false)
    }
}
const getAllUsers = async (req,res)=>{
    try {
        let users = await userModel.find({})
        console.log(users)
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}
const getOneEvent =  async (req, res) => {
    try {
        console.log("id;;;notifictaion")
        // Extract the notification ID from the request parameters
        const notificationId = req.body.notificationId;
        console.log(req.body,"id;;;notifictaion")
        // Find the notification using NotificationModel
        const event = await eventModel.find({id:notificationId});
        console.log(event)
        // If notification is found, send it in the response
        if (event) {
            res.json(event);
        } else {
            // If notification is not found, return a 404 Not Found response
            res.status(404).json({ message: 'Notification not found' });
        }
    } catch (error) {
        // If an error occurs, return a 500 Internal Server Error response
        console.error('Error fetching notification:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = {
    HomepageData, 
    userRegistration,
    userLogin,
    Addevent,
    getEvent,
    getAllUsers,
    getOneEvent
}
