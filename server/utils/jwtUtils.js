const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY_TIME } = process.env; // JWT secret from your environment variables

//Function to generate JWT Tokens
const generateToken = (userIdParam) => {
    const payload = { userId: userIdParam }
    console.log(payload,JWT_SECRET,JWT_EXPIRY_TIME)
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY_TIME });
}

//Function to verify JWT Tokens 
const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch (err) {
        throw new Error('Token is not valid', err);
    }
}

module.exports = { generateToken, verifyToken };