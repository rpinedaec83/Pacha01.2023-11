const express = require("express");
const { getAllCupones, getCuponById, createCupon, updateCuponById, deleteCuponById  } = require("../controllers/CuponesController");
const multer = require('multer')
const router = express.Router()
const jwt = require('jsonwebtoken')
const upload = multer({dest: 'uploads/'})

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']
  console.log(token);

  if(!token) {
    return res.status(404).json({msg: 'Necesitas un token.'})
  }

   jwt.verify(token, '123LlaveSecreta@@@@', (err, decoded) => {
  
    console.log('decoded', decoded.userWithoutPassword.name)

    if(err) {
      return res.status(403).json({msg: 'El token no ha sido firmado o ah sido alterado.'})
    }

    if (!(decoded.userWithoutPassword.name === 'IsAdmin')) {
      return res.status(405).json({msg: 'Tu no eres pepito.'})
    }

    req.user = decoded;

    next();

   })

}

router.get("/", authenticateToken, getAllCupones);
router.get("/:id", getCuponById)
router.post("/", authenticateToken, createCupon)
router.put("/:id", updateCuponById)
router.delete("/:id", deleteCuponById)



module.exports = router