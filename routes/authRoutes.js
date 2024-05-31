const express = require("express");
const { 
    registerController,
    loginController,
    currentUserController,
} = require("../controllers/authController");
const authMiddelware = require("../middlewares/authMiddelware");

const router = express.Router()

// routes
//Register
router.post('/register', registerController);

//Login
router.post('/login', loginController);

//Get current user || GET
router.get('/current-user', authMiddelware, currentUserController);

module.exports = router;