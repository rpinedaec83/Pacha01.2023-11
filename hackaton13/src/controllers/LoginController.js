const db = require('../config/db.js');
const { encriptar, desencriptar } = require('../utils/cryptPassword.js');

const User = db.User
const Query = db.Query

const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    const getUsers = await User.findOne({where: {email: email}})


    if(!getUsers) {
      return res.status(400).json({msg: 'KO', cod: 'El email es incorrecto.'})
    }
    const isCorrect = await desencriptar(password, getUsers.password)
    

    if(!isCorrect) {
      return res.status(400).json({msg: 'KO', cod: 'La contrasena es incorrecta.'}) 
    }

    res.status(200).json({ msg: 'OK', users: getUsers, log: 'Credenciales correctas. ' })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

module.exports = { login }