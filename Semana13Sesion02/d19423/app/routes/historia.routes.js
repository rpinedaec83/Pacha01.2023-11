
module.exports = app => {
    const historia = require("../controllers/historia.controller.js");
    var router = require("express").Router();

    router.post("/", historia.create);
    router.get("/", historia.findAll);
    router.get("/:id", historia.findOne);
    router.put("/:id", historia.update);
    router.delete("/:id", historia.delete);
    router.delete("/", historia.deleteAll);

    app.use('/api/historia', router);

};