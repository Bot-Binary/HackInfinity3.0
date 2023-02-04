const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

// const junior = require("./junior")


const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required : true,
        
        validate(m){
            if(validator.isMobilePhone(m)){

                return true;
            }
            else{

                // throw new Error("INVALID PHONE NUMBER");
                return false;
            }
        },
        unique : true,
    },
    type:{
        type:String,
        required:true,
    }

})




const shop = mongoose.model("shop",schema);

module.exports = shop;