const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    date:{
        type : String,
        required : true
    },
    id:{
        type : String,
        required : true,
    },
    title:{
        type : String,
        required : true,
    },
    userId:{
        type:String,
        require:true
    },
    taggedUsers:{
        type:Array
    },
    userName:{
        type:Array
    }


})

module.exports = mongoose.model('event',eventSchema);
