// import mongoose
const mongoose = require('mongoose')


const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('Mongodb connected successfully');
    
}).catch((err)=>{
    console.log('mongodb connection failed due to :',err);
    
})