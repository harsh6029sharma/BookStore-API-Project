require('dotenv').config()
const express = require('express')
const bookRoutes = require('./routes/book-routes');

const app = express()

//importing the db
const connectToDB = require('./database/db');

const PORT = process.env.PORT || 3000

//connect our database
connectToDB();

//middleware->express.json()
app.use(express.json());

//all routes here
app.use('/api/books',bookRoutes)


app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on port : ${PORT}`);
});