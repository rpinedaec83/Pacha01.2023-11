// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Ruta para crear un nuevo usuario
router.post('/register', UserController.createUser);

// Ruta para iniciar sesión
router.post('/login', UserController.loginUser);

module.exports = router;
