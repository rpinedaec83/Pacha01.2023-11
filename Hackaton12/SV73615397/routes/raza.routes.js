module.exports = app => {
    const raza = require("../controllers/raza.controller.js");
    var router = require("express").Router();

    router.post("/", raza.create);
    router.get("/", raza.findAll);
    router.get("/:id", raza.findOne);
    router.put("/:id", raza.update);
    router.delete("/:id", raza.delete);
    router.delete("/", raza.deleteAll);

    //app.use(URLBase,router)
    app.use('/api/raza', router);
};