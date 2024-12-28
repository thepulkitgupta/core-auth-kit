const express = require('express'); 
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * Register Route
 * Calls the controller method for user registration 
 */
router.post('/register',authController.register); 

/**
 * Login Route
 * Calls the controller method for user login 
 */
router.post('/login',authController.login); 

/**
 * Protected Route Example 
 * Including authMiddleware in the route ensures that middleware should be used
 */
router.get('/profile',authMiddleware,authController.profile); 

module.exports = router;
