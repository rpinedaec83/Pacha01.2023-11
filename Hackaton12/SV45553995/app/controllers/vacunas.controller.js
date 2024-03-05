const db = require("../models");
const Vacunas = db.vacunas;
const Comment = db.comments;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    Vacunas.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};
exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    if (!req.body.activo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const vacunas = {
        descripcion: req.body.descripcion,
        activo: req.body.activo ? req.body.activo : false,
        usuarioCreacion: req.body.usuarioCreacion
    };
    Vacunas.create(vacunas)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Vacunas.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vacunas was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Vacunas with id=${id}. Maybe Vacunas was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Vacunas with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Vacunas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Vacunas was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Vacunas with id=${id}. Maybe Vacunas was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Vacunas with id=" + id
            });
        });
};