const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddProductSchema =  new Schema({
    name : {
        type : String,
        require : true,
        maxlength : 40
    },
    price : {
        type : String,
        require : true,
        maxlength : 15
    },
    offer_price : {
        type : String,
        require : true,
        maxlenght : 15
    },
    description : {
        type : String,
        require : true,
        maxlenght : 10000
    },
    Category : {
        type:String,
        default : "Mobile",
        maxlenght : 40
    }
})

module.exports = mongoose.model('products',AddProductSchema)