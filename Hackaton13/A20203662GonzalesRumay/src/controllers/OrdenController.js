const db = require('../config/db.js');
const cloudinary = require('cloudinary').v2;

const Orden = db.Orden
const Curso = db.Curso
const User = db.User

const getAllOrdenes = async (req, res) => {
  try {
    const getOrdens = await Orden.findAll();

    res.status(200).json({ msg: 'OK', Ordens: getOrdens })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const getOrdenById = async (req, res) => {
  try {
    const { id } = req.params
    const getOrden = await Orden.findByPk(id, {
      include: [
        {
          model: Curso,
          as: 'curso'
        },
        {
          model: User,
          as: 'user'
        }
      ]
    });
    res.status(200).json({ msg: 'OK', Orden: getOrden })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const createOrden = async (req, res) => {
  try {
    
    const { name, userId, cursoId } = req.body;
     
    console.log(name, userId, cursoId)
    const OrdenCreated = await Orden.create({ name, userId, cursoId, state: false })

    res.status(200).json({ status: 'OK', OrdenCreated: OrdenCreated })
  } catch (error) {
    res.status(500).json({ status: 'KO', error })
  }
}

const updateOrdenById = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, userId, cursoId } = req.body;

    const OrdenUpdate = await Orden.findByPk(id);

    if (!OrdenUpdate) {
      return res.status(204).json({msg: 'KO', error: `La orden con ${id} no existe en BD.`})
    }

    OrdenUpdate.name = name;
    OrdenUpdate.userId = userId;
    OrdenUpdate.cursoId = cursoId;
   
    await OrdenUpdate.save()

    res.status(200).json({msg: 'OK', OrdenUpdate})

  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const deleteOrdenById = async (req, res) => {
  try {
    const {id} = req.params; 
    const OrdenDelete = await Orden.findByPk(id);
    if (!OrdenDelete) {
      return res.status(204).json({msg: 'KO', error: `La orden con ${id} no existe en BD.`})
    }
    await OrdenDelete.destroy();

    res.status(200).json({msg: 'OK', cod: `La orden con ID: ${id} a sido eliminado.`})
   } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

module.exports = { getAllOrdenes, getOrdenById, createOrden, updateOrdenById, deleteOrdenById }