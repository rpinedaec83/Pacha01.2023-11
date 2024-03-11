const express = require("express");
const { getAllCupones, getCuponById, createCupon, updateCuponById, deleteCuponById  } = require("../controllers/CuponesController");
const multer = require('multer')
const router = express.Router()

const upload = multer({dest: 'uploads/'})

router.get("/", getAllCupones);
router.get("/:id", getCuponById)
router.post("/", createCupon)
router.put("/:id", updateCuponById)
router.delete("/:id", deleteCuponById)

module.exports = router