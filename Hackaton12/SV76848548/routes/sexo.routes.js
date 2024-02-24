
module.exports = app => {
    const sexo = require("../controllers/sexo.controller.js");
    var router = require("express").Router();

    router.post("/", sexo.create);
    router.get("/", sexo.findAll);
    router.get("/:id", sexo.findOne);
    router.put("/:id", sexo.update);
    router.delete("/:id", sexo.delete);
    router.delete("/", sexo.deleteAll);

    app.use('/api/sexo', router);
};