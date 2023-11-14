const express = require('express')
const a = require('./Controllers/UserConrtoller')
const UserRoute = require('./Routs/UserRoutes')
const AdminRouter = require('./Routs/Admin')
const connect =  require('./Config/Config')
const cors = require("cors")
const path = require('path');


const fileUpload = require("express-fileupload")

const app = express()
const port = 3000

app.use(cors());

app.use(fileUpload())

app.use(express.json());

app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.static(path.join(__dirname, 'public')));


async function connection(){
    try {
            await connect();
        console.log("Db Connected")
    } catch (error) {
        console.log(error)  
    }
}
connection();
app.use('/',UserRoute)
app.use('/admin',AdminRouter)
app.listen(port,function(){
    console.log("Server started",port)
})