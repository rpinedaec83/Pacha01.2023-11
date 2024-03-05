const db = require("../models");
const Especie = db.especie;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const especie = {
        descripcion: req.body.descripcion,
        activo: req.body.activo
    };
    Especie.create(especie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the especie."
            });
        });
};
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    console.log(descripcion)
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;


    const activo = req.query.activo;
    
    console.log(activo)
    var condition = activo ? { activo: { [Op.like]: `%${activo}%` } } : null;
    
    Especie.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving especies."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Especie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find especie with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving especie with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Especie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "especie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update especie with id=${id}. Maybe especie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating especie with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Especie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "especie was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete especie with id=${id}. Maybe especie was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete especie with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Especie.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} especies were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all especies."
        });
      });
};