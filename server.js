const express= require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const error = require('./backend/middlewares/errorMiddlewareHandler')
const usersRoutes = require('./backend/routes/usersRoutes');
dbConnect=require('./backend/config/dbConnect');
const bookRoutes = require('./backend/routes/bookRoutes')

const app = express();

// Passing body data 
app.use(express.json());

//Routes
//Users   
app.use('/api/users', usersRoutes);
//Books
app.use('/api/books',bookRoutes);
console.log(process.env.MY_NAME);
//Error middleware
app.use(error.errorMiddlewareHandler);




//server
const Port = process.env.Port || 5000;
app.listen(Port, () => {
    console.log(`server is up and runing ${Port}`);
})