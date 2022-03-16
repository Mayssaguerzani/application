const express = require('express');
const asynHandler = require('express-async-handler');
const User = require('../models/User');
const usersRoutes = express.Router();


//register
usersRoutes.post('/register',
asynHandler(async(req, res ) => {  
      const{ name, email, password}=req.body;


  const userExists = await User.findOne({eamil: email});
  if (userExists){
    throw new Error('User Exsit');
  }
  const userCreate = await User.create({email, name,
     password});
     res.send(userCreate);
  })
);



//login 
usersRoutes.post('/login', asynHandler(async(req, res) => {
const { email, password }=req.body;

const user = await user.findOne({ email });

if(user && (await user.isPasswordMatch(password))){
  // set status code
  res.status(200);

  res.json({
    _id:userCreated._id,
     name: userCreated.name,
     password: userCreated.password,
     email: userCreated. password,
     token: generateToken(user._id),
  });

  
}else{
  res.status(401);
  throw new Error('Invalid credentials');
}
}) );
//update user
usersRoutes.put('/update',(req,res)=>{
  res.send('Update route');
});
//Delete user 
usersRoutes.delete('/:id', (req, res) => {
  res.send('Delete route');
});
//fetch user 
usersRoutes.get('/', (req, res) => {
  res.send('Fetch users');
});

module.exports = usersRoutes;