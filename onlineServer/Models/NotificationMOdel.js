const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notification = new Schema({
    userID:{
        type : String,
        required : true
    },
    taggedUsers:{
        type : String,
        required : true,
    },
    id:{
        type : String,
        required : true,
    },
    addedBy:{
        type:String,
    }


})

module.exports = mongoose.model('Notification',Notification);
