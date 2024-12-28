const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY_HOURS } = process.env; // JWT secret from your environment variables

//Function to generate JWT Tokens
const generateToken = (userIdParam) => {
    const payload = { userId: userIdParam }
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY_HOURS });
}

//Function to verify JWT Tokens 
const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (err) {
        console.log(err);
        throw new Error('Token is not valid', err);
    }
}

module.exports = { generateToken, verifyToken };