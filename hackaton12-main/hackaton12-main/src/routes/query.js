const express = require("express");
const { getAllQuery, getQueryById, createQuery, updateQueryById, deleteQueryById } = require("../controllers/QueryController");
const router = express.Router()
// const {getAllOwners, getOwnerById, updateOwnerById, deleteOwnerById, createOwner} = require("../controllers/OwnerController")

router.get("/", getAllQuery);
router.get("/:id", getQueryById)
router.post("/:id", createQuery)
router.put("/:id", updateQueryById)
router.delete("/:id", deleteQueryById)

module.exports = router