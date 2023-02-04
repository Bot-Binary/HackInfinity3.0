const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


const schema = mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    time:{
        type:Date,
        default:Date.now,
        required : true,
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})



const history = mongoose.model("history",schema);

module.exports = history;