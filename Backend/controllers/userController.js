//this will import the model of user
const User = require('../models/usersModel')
const mongoose = require('mongoose')

//get all users
const getAllUsers = async(req,res)=>{
    const users = await User.find({}).sort({createdAt:-1})
    res.status(200).json(users)
}

//get single user
const getUser = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such user'})  
    }
    const user = await user.findById(id)
    if(!user){
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json(user)
}

//create a user
const createUser = async(req,res)=>{
    console.log(req.body)
    const {address,
    confirmpassword,
    dateofbirth,
    firstname,
    lastname,
    password,
    schoolemail,
    username} = req.body;
    try{
        const user = await User.create(
        {
            address,
            confirmpassword,
            dateofbirth,
            firstname,
            lastname,
            password,
            schoolemail,
            username
        })
        res.status(200).json(user)
    }
    catch(error){
    res.status(400).json({error:error.message})
    }
    res.status(200).json(user)
}

//delete a user
const deleteUser = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})  
      }
    const user = await user.findOneAndDelete({_id: id})
    if(!user){
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json(user)
}
//update a user
const updateUser = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such user'})  
      }
    const user = await user.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!user){
        return res.status(404).json({error:'No such user'})
    }
    res.status(200).json(user)
}
module.exports={
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}
