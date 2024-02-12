const db = require('../config/db.js')
const User = db.User
const Query = db.Query

const getAllQuery = async (req, res) => {
  try {
    const getQuery = await Query.findAll();

    res.status(200).json({ msg: 'OK', Query: getQuery })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const getQueryById = async (req, res) => {
  try {
    const { id } = req.params

    const getQuery = await Query.findByPk(id)
    res.status(200).json({ msg: 'OK', user: getQuery })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const createQuery = async (req, res) => {
  try {
    const {id} = req.params;
    const { patientName, state, emergencyNumber } = req.body;

    const findUser = await User.findByPk(id)
    
    const userId = findUser.id
    if(!findUser) {
      return res.status(400).json({msg: 'KO', cod: `El usuario con ID: ${id} no existe en la bd.`})
    }

    const queryCreate = await Query.create({ patientName, state, emergencyNumber, userId })


    res.status(200).json({ status: 'OK', queryCreated: queryCreate })
  } catch (error) {
    res.status(500).json({ status: 'KO', error })
  }
}

const updateQueryById = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, lastname, age, gmail, password } = req.body;

    const userUpdate = await User.findByPk(id);

    if (!userUpdate) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }

    userUpdate.name = name;
    userUpdate.lastname = lastname;
    userUpdate.age = age;
    userUpdate.gmail = gmail;
    userUpdate.password = password;

    await userUpdate.save()

    res.status(200).json({msg: 'OK', userUpdate})

  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const deleteQueryById = async (req, res) => {
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


module.exports = { getAllQuery, getQueryById, createQuery, updateQueryById, deleteQueryById }