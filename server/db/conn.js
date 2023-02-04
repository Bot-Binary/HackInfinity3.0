const mongoose = require("mongoose");
const express = require("express");

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/infinity",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

