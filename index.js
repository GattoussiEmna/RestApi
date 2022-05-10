const express = require('express')
const db = require('./config/db')
const app = express()
require ('dotenv').config()

const PORT = process.env.PORT


// Middlewares
app.use(express.json())
app.use('/api/user' , require('./routes/userRoutes'))
// app.use ('/api/post' , require('./routes/postRoutes'))


// Database

db()

// Server
app.listen(PORT , ()=>{
    console.log(`SERVER IS RUNNING ON PORT : ${PORT}`)
})