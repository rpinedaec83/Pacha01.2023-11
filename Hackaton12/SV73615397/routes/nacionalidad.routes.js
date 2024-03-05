module.exports = app => {
    const nacionalidad = require("../controllers/nacionalidad.controller.js");
    var router = require("express").Router();

    router.post("/", nacionalidad.create);
    router.get("/", nacionalidad.findAll);
    router.get("/:id", nacionalidad.findOne);
    router.put("/:id", nacionalidad.update);
    router.delete("/:id", nacionalidad.delete);
    router.delete("/", nacionalidad.deleteAll);

    //app.use(URLBase,router)
    app.use('/api/nacionalidad', router);
};