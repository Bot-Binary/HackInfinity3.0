const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(x) {
            if (validator.isEmail(x)) {
                return true;
            }
            else {
                // throw new Error("INVALID EMAIL ID");
                return false;
            }

        }
    },
    phone: {
        type: String,
        required: true,

        validate(m) {
            if (validator.isMobilePhone(m)) {

                return true;
            }
            else {

                // throw new Error("INVALID PHONE NUMBER");
                return false;
            }
        },
        unique: true,
    },
    payid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    allowed:
    {
        type: [{
            id: {
                type: String,
                // unique: true
            },
        }]
    },
    pid:{
        type:String,
        default : null
    }

})


schema.pre("save", (async function (next) {

    const password = this.password;

    const hashed_pass = await bcrypt.hash(password, 8);

    this.password = hashed_pass;
    next();
}))


const junior = mongoose.model("junior", schema);

module.exports = junior;