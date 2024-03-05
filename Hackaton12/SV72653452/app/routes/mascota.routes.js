
module.exports = app => {
    const mascota = require("../controllers/mascota.controller.js");
    var router = require("express").Router();

    router.post("/", mascota.create);
    router.get("/", mascota.findAll);
    router.get("/:id", mascota.findOne);
    router.put("/:id", mascota.update);
    router.delete("/:id", mascota.delete);
    router.delete("/", mascota.deleteAll);

    app.use('/api/mascota', router);
};