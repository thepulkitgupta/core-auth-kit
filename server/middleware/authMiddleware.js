const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwtUtils');

/**
 * Middleware to verify and extract data from JWT Token 
 */

const authMiddleware = (req,res,next) =>{
    const token = req.header("Authorization")?.replace('Bearer ','');

    if(!token){
        return res.status(401).json({message:'No token, authorization denied'}); 
    }

    try{
        //Verify the JWT token 
        const decoded = verifyToken(token);
        req.user = decoded;  // Attach decoded user data to request
        next();  // Proceed to the next middleware or route handler
    }
    catch(err){
        return res.status(400).json({message: 'Invalid token'});
    }
}

module.exports = authMiddleware;