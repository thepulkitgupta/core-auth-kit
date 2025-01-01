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


//Protected Routes : Inclues authMiddleware to get the token
/**
 * Get User Details
 */
router.get('/profile',authMiddleware,authController.profile); 

/**
 * Validate the token if required
 */
router.get('/validate',authMiddleware,authController.validate); 

module.exports = router;
