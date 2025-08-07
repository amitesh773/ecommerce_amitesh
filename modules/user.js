const mongoose = require('mongoose');

const userSchems = new mongoose.Schema({
    username : {
        type: String
    },
    email : {
        type : String
    },
    password :{
        type: String
    },
    role : {
        type : String
    }
})

module.exports = mongoose.model('User',userSchems);  