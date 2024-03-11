const express = require("express");
const { getAllCursos, getCursoById, createCurso, updateCursoById, deleteCursoById  } = require("../controllers/CursosController");
const multer = require('multer')
const router = express.Router()

const upload = multer({dest: 'uploads/'})

router.get("/", getAllCursos);
router.get("/:id", getCursoById)
router.post("/", upload.fields(
  [
    {name: 'book'},
    {name: 'portada'}
  ]
), createCurso)
router.put("/:id", updateCursoById)
router.delete("/:id", deleteCursoById)

module.exports = router