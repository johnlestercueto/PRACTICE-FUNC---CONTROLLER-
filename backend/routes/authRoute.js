const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post("/", authController.registerUser);
router.get("/", authController.logInUser)

module.exports = router;