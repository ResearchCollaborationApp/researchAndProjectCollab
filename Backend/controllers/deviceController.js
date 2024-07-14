//this will import the model of device
const Device = require('../models/devicesModel')
const mongoose = require('mongoose')
//get all devices
const getAllDevices = async(req,res)=>{
    const devices = await Device.find({}).sort({createdAt:-1})
    res.status(200).json(devices)
}

//get single device
const getDevice = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such device'})  
    }
    const device = await Device.findById(id)
    if(!device){
        return res.status(404).json({error:'No such device'})
    }
    res.status(200).json(device)
}

//create a device
const createDevice = async(req,res)=>{
    const {type, company, model, published} = req.body;
    try{
        const device = await Device.create({type, company, model, published})
        res.status(200).json(device)
    }
    catch(error){
    res.status(400).json({error:error.message})
    }
    res.status(200).json(device)
}

//delete a device
const deleteDevice = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such device'})  
      }
    const device = await Device.findOneAndDelete({_id: id})
    if(!device){
        return res.status(404).json({error:'No such device'})
    }
    res.status(200).json(device)
}
//update a device
const updateDevice = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such device'})  
      }
    const device = await Device.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!device){
        return res.status(404).json({error:'No such device'})
    }
    res.status(200).json(device)
}
module.exports={
    getAllDevices,
    getDevice,
    createDevice,
    deleteDevice,
    updateDevice
}