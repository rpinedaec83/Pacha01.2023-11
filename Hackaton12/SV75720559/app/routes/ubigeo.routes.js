module.exports = app => {
    const ubigeo = require("../controllers/ubigeo.controller.js");
    var router = require("express").Router();

    router.post("/", ubigeo.create);
    router.get("/", ubigeo.findAll);
    router.get("/:id", ubigeo.findOne);
    router.put("/:id", ubigeo.update);
    router.delete("/:id", ubigeo.delete);
    router.delete("/", ubigeo.deleteAll);


    app.use('/api/ubigeo', router);
};