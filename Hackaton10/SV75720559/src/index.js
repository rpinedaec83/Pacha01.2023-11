const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
const PORT = 3000;

// configuracion de bd.

mongoose.connect('mongodb://localhost:27017/sv75720559')

const db = mongoose.connection

db.on('error', () => {
  console.log("DB error")
})

db.on('open', () => {
  console.log("DB ON")
})
// Modelo

const UserModel = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String
})

const User = mongoose.model('users', UserModel)

app.use(express.json())
app.use(cors())

// CRUD
app.get('/obtener-usuarios', async (req, res) => {
  try {
    const getAllusers = await User.find();
    // console.log(getAllusers);

    res.status(200).json({
      status: "ok",
      msg: "Lista de usuarios obtenidas",
      results: getAllusers
    })

  } catch (error) {
    res.status(500).json({ status: "ko", msg: error })
  }
})

app.get('/obtener-usuario/:id', async (req, res) => {
  const {id} = req.params
  try {

    const getUser = await User.findById(id);
    // console.log(getAllusers);

    res.status(200).json({
      status: "ok",
      msg: "Lista de usuarios obtenidas",
      results: getUser
    })

  } catch (error) {
    res.status(500).json({ status: "ko", msg: error })
  }
})

app.post('/agregar-usuario', async (req, res) => {

  const { name, lastname, email } = req.body

  const createduser = User({ name, lastname, email })
  try {

    const save = await createduser.save();

    res.status(200).json({
      status: "ok",
      msg: "Usuario creado correctamente.",
      results: save
    })
  } catch (error) {
    res.status(400).json({
      status: "ko",
      msg: "Error al crear usuario."
    })
  }
})

app.put('/actualizar-usuario/:id', async (req, res) => {
  const { id } = req.params
  const { name, lastname, email } = req.body
  try {

    // console.log(name, lastname, email)

    const updateUser = await User.findByIdAndUpdate(
      id,
      { name, lastname, email },
      { new: true }
    )

    if (!updateUser) {
      // If updateUser is null, the user doesn't exist
      return res.status(202).json({
        status: "ko",
        msg: "El usuario no existe en la base de datos."
      });
    }

    res.status(200).json({
      status: "ok",
      msg: "Usuario actualizado correctamente.",
      results: updateUser
    })

  } catch (error) {
    res.status(400).json({
      status: "ko",
      msg: "Error al actualizar usuario.",
      error
    })
  }
})

app.delete('/eliminar-usuario/:id', async (req, res) => {
  const { id } = req.params

  // console.log(id)
  try {

    // const deleteUser = 
    const deleteUser = await User.findOneAndDelete({_id: id});
    // console.log(deleteUser)
    if (!deleteUser) {
      // If updateUser is null, the user doesn't exist
      return res.status(202).json({
        status: "ko",
        msg: "El usuario no existe en la base de datos."
      });
    }


    return res.status(200).json({
      status: "ok",
      msg: "Usuario eliminado correctamente.",
      results: deleteUser
    })

  } catch (error) {
    return res.status(400).json({
      status: "ko",
      msg: "Error al eliminar usuario.",
      error
    })
  }
})

app.listen(PORT, () => {
  console.log("Server is running ...")
})