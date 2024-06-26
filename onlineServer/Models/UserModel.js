const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName:{
        type : String,
        required : true,
        maxlenght : 40
    },
    Email:{
        type : String,
        required : true,
        maxlenght : 100
    },
    dob:{
        type : String,
        required : true,
        maxlenght : 100
    },
    Password:{
        type : String,
        required : true
    }

})

module.exports = mongoose.model('User',UserSchema);
