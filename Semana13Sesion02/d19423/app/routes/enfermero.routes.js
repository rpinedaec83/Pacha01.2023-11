
module.exports = app => {
    const enfermero = require("../controllers/enfermero.controller.js");
    var router = require("express").Router();

    router.post("/", enfermero.create);
    router.get("/", enfermero.findAll);
    router.get("/:id", enfermero.findOne);
    router.put("/:id", enfermero.update);
    router.delete("/:id", enfermero.delete);
    router.delete("/", enfermero.deleteAll);

    app.use('/api/enfermero', router);

};