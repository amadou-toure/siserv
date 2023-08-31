const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING
const connection =()=>{
    try{
        mongoose.connect(connectionString) ? 
        console.log (`db connected successfully on port ${process.env.PORT}`) : 
        console.log('not connected !')
    }catch(err){
        console.log(err)
    }
}

module.exports= connection;