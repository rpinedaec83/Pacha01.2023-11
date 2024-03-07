const express = require("express");
const { getAllOrdenes, getOrdenById, createOrden, updateOrdenById, deleteOrdenById  } = require("../controllers/OrdenController");
const router = express.Router()

router.get("/", getAllOrdenes);
router.get("/:id", getOrdenById)
router.post("/", createOrden)
router.put("/:id", updateOrdenById)
router.delete("/:id", deleteOrdenById)

module.exports = router