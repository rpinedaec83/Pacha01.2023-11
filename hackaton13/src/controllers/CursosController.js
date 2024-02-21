const { idText } = require('typescript');
const db = require('../config/db.js');
const { encriptar } = require('../utils/cryptPassword.js');
const cloudinary = require('cloudinary').v2;

const Curso = db.Curso

cloudinary.config({ 
  cloud_name: '', 
  api_key: '', 
  api_secret: '' 
});

const getAllCursos = async (req, res) => {
  try {
    const getCursos = await Curso.findAll();

    res.status(200).json({ msg: 'OK', Cursos: getCursos })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const getCursoById = async (req, res) => {
  try {
    const { id } = req.params
    // console.log("Hola")
    const getCurso = await Curso.findByPk(id, {
      include: {
        model: Query,
        as: 'query'
      }
    })

    res.status(200).json({ msg: 'OK', Curso: getCurso })
  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

//* Guardar la iamgen, debemos almacenar la img dentro en nuestro src
//* middleware> 
const createCurso = async (req, res) => {
  try {
    
    const { name, description, price_sale, userId } = req.body;
    const book = await cloudinary.uploader.upload(req.files['book'][0].path)
    const portada = await cloudinary.uploader.upload(req.files['portada'][0].path)

    // console.log(book, portada)

    const CursoCreated = await Curso.create({ name, description, front_page: book.secure_url, price_sale, img_path:portada.secure_url, userId  })

    res.status(200).json({ status: 'OK', CursoCreated: CursoCreated })
  } catch (error) {
    res.status(500).json({ status: 'KO', error })
  }
}

const updateCursoById = async (req, res) => {
  try {
    const {id} = req.params;
    const { name, lastname, age, email, password } = req.body;

    const CursoUpdate = await Curso.findByPk(id);

    if (!CursoUpdate) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }

    CursoUpdate.name = name;
    CursoUpdate.lastname = lastname;
    CursoUpdate.age = age;
    CursoUpdate.email = email;
    CursoUpdate.password = password;

    await CursoUpdate.save()

    res.status(200).json({msg: 'OK', CursoUpdate})

  } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}

const deleteCursoById = async (req, res) => {
  try {
    const {id} = req.params; 
    const CursoDelete = await Curso.findByPk(id);
    if (!CursoDelete) {
      return res.status(204).json({msg: 'KO', error: `El usuario con ${id} no existe en BD.`})
    }
    await CursoDelete.destroy();

    res.status(200).json({msg: 'OK', cod: `El usuario con ID: ${id} a sido eliminado.`})
   } catch (error) {
    res.status(500).json({ msg: 'KO', error })
  }
}


module.exports = { getAllCursos, getCursoById, createCurso, updateCursoById, deleteCursoById }