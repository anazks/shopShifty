const mongoose = require('mongoose')

let url = 'mongodb+srv://nikhil:123@cluster0.zz0najm.mongodb.net/ShopSwiftfy?retryWrites=true&w=majority'
const connection = ()=>{
    // Connect to MongoDB using Mongoose.
    mongoose.connect(url)
}
module .exports = connection