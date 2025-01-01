//Import the package to read .env file before anything  else
const dotenv = require('dotenv'); 
dotenv.config();

//Import dependencies 
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const authRoutes = require('./routes/auth');



//Initialse the express app 
const app = express(); 

//Middleware to parse JSON requests so that we can read the JSON payload and process it 
app.use(express.json());

//Middle to allow CORS 
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
app.use(cors({
  origin: allowedOrigins, // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies and authorization headers
}));

//MongoDB Connection setup 
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected successfully!!"))
.catch((err)=>console.log("MongoDB Connection Error",err)); 

//Use the authentication routes 
app.use('/api/auth',authRoutes);

//Start the server 
const PORT = process.env.PORT || 5000; 
app.listen(PORT,()=>{
    console.log(`App started on port ${PORT}`);
})

//Code to serve the react file, to be modified and serve later.

/**
 * const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files with long-term caching
app.use(
  express.static(path.join(__dirname, 'build'), {
    maxAge: '1y', // Cache static assets (JS, CSS, Images) for 1 year
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        // Disable caching for HTML files
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
    },
  })
);

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
 * 
 * 
 */