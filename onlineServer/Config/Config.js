const mongoose = require('mongoose')

let url = 'mongodb+srv://user:123@cluster0.kop4wrn.mongodb.net/life_callender?retryWrites=true&w=majority&appName=Cluster0'
const connection = ()=>{
    // Connect to MongoDB using Mongoose.
    mongoose.connect(url)
}
module .exports = connection