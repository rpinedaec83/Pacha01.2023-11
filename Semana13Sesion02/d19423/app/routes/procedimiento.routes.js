
module.exports = app => {
    const procedimiento = require("../controllers/procedimiento.controller.js");
    var router = require("express").Router();

    router.post("/", procedimiento.create);
    router.get("/", procedimiento.findAll);
    router.get("/:id", procedimiento.findOne);
    router.put("/:id", procedimiento.update);
    router.delete("/:id", procedimiento.delete);
    router.delete("/", procedimiento.deleteAll);

    app.use('/api/procedimiento', router);

};