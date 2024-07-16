const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    address:{
        type:String,
        required: true
    },
    confirmpassword:{
        type:String,
        required: true
    },
    dateofbirth:{
        type:Date,
        required: true
    },
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
   schoolemail:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', usersSchema)