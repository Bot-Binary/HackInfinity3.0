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

/** 
* Paste one or more documents here
*/
// {
//     "_id": {
//       "$oid": "63de68537aa5e1c535cb1c3b"
//     },
//     "from": "07622051688@bot",
//     
// type: "Enterntainment"
// to:"1234567890@bot"
        // "amount" 1000
//   }


// "from":"07622051688@bot"
// 'type':"Grocery"
// 'to':"9510808080@bot"
// amount:1000