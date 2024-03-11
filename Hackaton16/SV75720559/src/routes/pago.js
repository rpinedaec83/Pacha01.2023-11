const express = require("express");
const { getAllPagos, getPagoById, createPago, updatePagoById, deletePagoById  } = require("../controllers/PagoController");
const router = express.Router()

router.get("/", getAllPagos);
router.get("/:id", getPagoById)
router.post("/", createPago)
router.put("/:id", updatePagoById)
router.delete("/:id", deletePagoById)

module.exports = router