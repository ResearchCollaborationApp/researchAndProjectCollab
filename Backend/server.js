require('dotenv').config()
const express = require('express')
const allroutes = require('./routes/routes')
const mongoose = require('mongoose')
//create express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

app.use('/getResearch',allroutes) 

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
app.listen(process.env.PORT,()=>{
    console.log('connected to database and listening on port 4000')
})
})
.catch((error)=>{
    console.log(error)
})
