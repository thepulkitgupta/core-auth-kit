//Import dependencies 
const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 

//Initialise dotenv to read the .env file to load environemnt variables 
dotenv.config();

//Initialse the express app 
const app = express(); 

//Middleware to parse JSON requests so that we can read the JSON payload and process it 
app.use(express.json());

//MongoDB Connection setup 
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected successfully!!"))
.catch((err)=>console.log("MongoDB Connection Error",err)); 

//Use the authentication routes 
const authRoutes = require('./routes/auth');
app.use('/api/auth',authRoutes);

//Start the server 
const PORT = process.env.PORT || 5000; 
app.listen(PORT,()=>{
    console.log(`App started on port ${PORT}`);
})