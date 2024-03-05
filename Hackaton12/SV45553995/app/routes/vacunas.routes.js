
module.exports = app => {
    const vacunas = require("../controllers/vacunas.controller.js");
    var router = require("express").Router();

    router.get("/vacunas", vacunas.findAll);
    router.post("/vacunas", vacunas.create);
    router.put("/vacunas/:id", vacunas.update);
    router.delete("/vacunas/:id", vacunas.delete);

    app.use('/api', router);
};



