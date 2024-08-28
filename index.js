// import dotenv module
require('dotenv').config()


// import express
const express = require('express')
// import cors
const cors = require('cors')


// import connection.js
require('./connection')

// import routes
const routes = require('./routes')


// server
const globomartServer = express()
globomartServer.use(cors())
globomartServer.use(express.json())
globomartServer.use(routes)


// port
const PORT = 4000 || process.env.PORT


// run the server
globomartServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
})