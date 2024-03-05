const db = require('../config/db.js');
const { encriptar, desencriptar } = require('../utils/cryptPassword.js');
const {createToken} = require('../utils/jsonToken.js')
const jwt = require('jsonwebtoken')
const _ = require('lodash');

const User = db.User
const Query = db.Query

const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    const getUsers = await User.findOne({where: {email: email}})
    
    console.log(getUsers.dataValues.password)

    const objetoValidp = {
      name: getUsers.dataValues.name 
    }
    
    const userWithoutPassword = _.omit(getUsers.dataValues, 'password');

    const token = jwt.sign({userWithoutPassword}, '123LlaveSecreta@@@@')
    
    // console.log(token)

    // i
    if(!getUsers) {
      return res.status(400).json({msg: 'KO', cod: 'El email es incorrecto.'})
    }
    const isCorrect = await desencriptar(password, getUsers.password)
    

    if(!isCorrect) {
      return res.status(400).json({msg: 'KO', cod: 'La contrasena es incorrecta.'}) 
    }

    // const token = await createToken(getUsers) 

    res.status(200).json({ msg: 'OK', log: 'Credenciales correctas. ', token })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

module.exports = { login }