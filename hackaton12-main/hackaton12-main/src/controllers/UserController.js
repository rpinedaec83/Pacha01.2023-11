const { idText } = require('typescript');
const db = require('../config/db.js');
const { encriptar } = require('../utils/cryptPassword.js');
const User = db.User
const Query = db.Query
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.findAll();

    res.status(200).json({ msg: 'OK', users: getUsers })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    // console.log("Hola")
    const getUser = await User.findByPk(id, {
      include: {
        model: Query,
        as: 'query'
      }
    })

    res.status(200).json({ msg: 'OK', user: getUser })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const createUser = async (req, res) => {
  try {
    const { name, lastname, age, email, password } = req.body;

    // console.log(name, lastname, age, email, password)
    const hashedPassword = await encriptar(password) 
    const userCreated = await User.create({ name, lastname, age, email, password: hashedPassword })

    res.status(200).json({ status: 'OK', userCreated: userCreated })
  } catch (error) {
    res.status(500).json({ status: 'KO', error })
  }
}

const updateUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, lastname, age, email, password } = req.body;

    const userUpdate = await User.findByPk(id);

    if (!userUpdate) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }

    userUpdate.name = name;
    userUpdate.lastname = lastname;
    userUpdate.age = age;
    userUpdate.email = email;
    userUpdate.password = password;

    await userUpdate.save()

    res.status(200).json({msg: 'OK', userUpdate})

  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const deleteUserById = async (req, res) => {
  try {
    const {id} = req.params; 
    const userDelete = await User.findByPk(id);
    if (!userDelete) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }
    await userDelete.destroy();

    res.status(200).json({msg: 'OK', cod: `El usuario con ID: ${id} a sido eliminado.`})
   } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}


module.exports = { getAllUsers, getUserById, createUser, updateUserById, deleteUserById }