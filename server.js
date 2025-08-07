//-----------------------------------express setup-----------------------------------
const express = require('express')
const app = express();
require('dotenv').config()

//-----------------------------------mongoose---------------------------------------
const mongoose = require('./config/db')
mongoose().then(()=>{console.log("Database connected...!!!!")})

//--------------------------------models------------------------------------------
const user = require('./modules/user')


//-------------------------------validation--------------------------------------
const userValidation = require('./validation/userValidation')


app.listen(process.env.PORT,()=>{
    console.log("Serevr is reuning")
})