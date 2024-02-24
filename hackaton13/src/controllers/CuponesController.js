const db = require('../config/db.js');


const Cupon = db.Cupon

const getAllCupones = async (req, res) => {
  try {
    const getCupons = await Cupon.findAll();

    res.status(200).json({ msg: 'OK', Cupons: getCupons })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const getCuponById = async (req, res) => {
  try {
    const { id } = req.params
    // console.log("Hola")
    
    const getCupon = await Cupon.findByPk(id)

    res.status(200).json({ msg: 'OK', Cupon: getCupon })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const createCupon = async (req, res) => {
  try {
    
    const { name, discount} = req.body;
    const cuponCreated = await Cupon.create({ name, discount  })

    res.status(200).json({ status: 'OK', CuponCreated: cuponCreated })
  } catch (error) {
    res.status(500).json({ status: 'KO', error })
  }
}

const updateCuponById = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, lastname, age, email, password } = req.body;

    const CuponUpdate = await Cupon.findByPk(id);

    if (!CuponUpdate) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }

    CuponUpdate.name = name;
    CuponUpdate.lastname = lastname;
    CuponUpdate.age = age;
    CuponUpdate.email = email;
    CuponUpdate.password = password;

    await CuponUpdate.save()

    res.status(200).json({msg: 'OK', CuponUpdate})

  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const deleteCuponById = async (req, res) => {
  try {
    const {id} = req.params; 
    const CuponDelete = await Cupon.findByPk(id);
    if (!CuponDelete) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }
    await CuponDelete.destroy();

    res.status(200).json({msg: 'OK', cod: `El usuario con ID: ${id} a sido eliminado.`})
   } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}


module.exports = { getAllCupones, getCuponById, createCupon, updateCuponById, deleteCuponById }