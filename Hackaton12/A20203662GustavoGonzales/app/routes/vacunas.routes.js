module.exports = app => {
    const vacunas = require("../controllers/vacunas.controller.js");
    var router = require("express").Router();

    router.post("/", vacunas.create);
    router.get("/", vacunas.findAll);
    router.get("/:id", vacunas.findOne);
    router.put("/:id", vacunas.update);
    router.delete("/:id", vacunas.delete);
    router.delete("/", vacunas.deleteAll);

    app.use('/api/vacunas', router);
};