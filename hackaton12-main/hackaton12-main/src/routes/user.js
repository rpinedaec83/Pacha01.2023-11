const express = require("express");
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require("../controllers/UserController");
const router = express.Router()


router.get("/", getAllUsers);
router.get("/:id", getUserById)
router.post("/", createUser)
router.put("/:id", updateUserById)
router.delete("/:id", deleteUserById)

module.exports = router