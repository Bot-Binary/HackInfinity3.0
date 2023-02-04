const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
require("mongoose-unique-array");

// schema.plugin(arrayUniquePlugin);

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    
    phone:{
        type:String,
        required : true,
        unique : true,
        validate(m){
            if(validator.isMobilePhone(m)){
                return true;
            }
            else{
                return false;
            }
        },
        
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        
        validate(x){
            if(validator.isEmail(x)){
                return true;
            }
            else{
                // throw new Error("INVALID EMAIL ID");
                return false;
            }
        }
    },
    payid:{
        type:String,
        required:true
    },
    children:{
        type:[{
            id:{
                type:String,
                unique:true
            },
            name:String,
            balance:Number,
        },
    ] 
    //  unique:true   
    }
    ,
    balance:{
        type:Number,
        default : 0
    },
    spend:{
        type:Number,
        default : 0
    }

})


// schema.plugin(arrayUniquePlugin);

schema.pre("save",(async function(next){

    const password = this.password;

    const hashed_pass = await bcrypt.hash(password,8);

    this.password = hashed_pass;
    next();
}))


const senior = mongoose.model("senior",schema);

module.exports = senior;












// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");


// const schema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true,
//     //     validate(x){
//     //         if(validator.isEmail(x)){
//     //             return true;
//     //         }
//     //         else{
//     //             // throw new Error("INVALID EMAIL ID");
//     //             return false;
//     //         }

//     //     }
//     },
//     phone:{
//         type:String,
//         required : true,
        
//         validate(m){
//             if(validator.isMobilePhone(m)){

//                 return true;
//             }
//             else{

//                 // throw new Error("INVALID PHONE NUMBER");
//                 return false;
//             }
//         },
//         unique : true,
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     balance:{
//         type:Number,
//         default:0
//     }
// })


// schema.pre("save",(async function(next){

//     const password = this.password;

//     const hashed_pass = await bcrypt.hash(password,8);

//     this.password = hashed_pass;
//     next();
// }))


// const senior = mongoose.model("senior",schema);

// module.exports = senior;