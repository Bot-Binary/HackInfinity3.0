const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");









const junior = require("../models/junior");
const senior = require("../models/senior");
const shop = require("../models/shop");
const history = require("../models/history");


const passwordverify = async (req,res,next) => {

        console.log(req.body);
        console.log("req.body");
            const data = req.body;

            const email = data.email;
            const pass = data.password;

            const match = await senior.findOne({email:email});


            
            const result = await bcrypt.compare(pass, match.password);
            console.log(result);
            if(result){
                next();
            }
    
}


module.exports = passwordverify;