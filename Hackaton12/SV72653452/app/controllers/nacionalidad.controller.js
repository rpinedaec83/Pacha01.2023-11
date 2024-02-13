const db = require("../models");
const Nacionalidad = db.nacionalidad;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const nacionalidad = {
        descripcion: req.body.descripcion,
        activo: req.body.activo
    };
    Nacionalidad.create(nacionalidad)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the nacionalidad."
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

    Nacionalidad.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving nacionalidads."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Nacionalidad.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find nacionalidad with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving nacionalidad with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Nacionalidad.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "nacionalidad was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update nacionalidad with id=${id}. Maybe nacionalidad was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating nacionalidad with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Nacionalidad.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "nacionalidad was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete nacionalidad with id=${id}. Maybe nacionalidad was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete nacionalidad with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Nacionalidad.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} nacionalidads were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all nacionalidads."
        });
      });
};