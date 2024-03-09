const express = require("express");
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require("../controllers/UserController");
const multer = require('multer')
const router = express.Router()

const upload = multer({dest: 'uploads/'})

router.get("/", getAllUsers);
router.get("/:id", getUserById)
router.post("/" , createUser)
router.put("/:id", updateUserById)
router.delete("/:id", deleteUserById)

module.exports = router