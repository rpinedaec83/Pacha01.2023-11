
module.exports = app => {
    const operacion = require("../controllers/operacion.controller.js");
    var router = require("express").Router();

    router.post("/", operacion.create);
    router.get("/", operacion.findAll);
    router.get("/:id", operacion.findOne);
    router.put("/:id", operacion.update);
    router.delete("/:id", operacion.delete);
    router.delete("/", operacion.deleteAll);

    app.use('/api/operacion', router);

};