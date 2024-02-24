
module.exports = app => {
    const doctor = require("../controllers/doctor.controller.js");
    var router = require("express").Router();

    router.post("/", doctor.create);
    router.get("/", doctor.findAll);
    router.get("/:id", doctor.findOne);
    router.put("/:id", doctor.update);
    router.delete("/:id", doctor.delete);
    router.delete("/", doctor.deleteAll);

    app.use('/api/doctor', router);

};