const authRouter = require('express').Router();
const controller = require('../controllers/auth.controller');

authRouter.post('/login',controller.login);

module.exports = authRouter;