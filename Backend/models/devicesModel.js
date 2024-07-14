const mongoose = require('mongoose')

const Schema = mongoose.Schema

const devicesSchema = new Schema({
    type:{
        type:String,
        required: true
    },
    company:{
        type:String,
        required: true
    },
    model:{
        type:String,
        required: true
    },
    published:{
        type:Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Device', devicesSchema)