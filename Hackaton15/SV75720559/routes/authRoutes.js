const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.login);
router.get('/login/callback', authController.loginCallback);
router.get('/logout', authController.logout);

module.exports = router;
