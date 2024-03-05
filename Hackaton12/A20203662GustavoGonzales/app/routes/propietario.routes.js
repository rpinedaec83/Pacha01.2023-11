module.exports = app => {
    const propietario = require("../controllers/propietario.controller.js");
    var router = require("express").Router();

    router.post("/", propietario.create);
    router.get("/", propietario.findAll);
    router.get("/:id", propietario.findOne);
    router.put("/:id", propietario.update);
    router.delete("/:id", propietario.delete);
    router.delete("/", propietario.deleteAll);

    app.use('/api/propietario', router);
};