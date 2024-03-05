const db = require("../models");
const Vacunas = db.vacunas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const vacunas = {
        descripcion: req.body.descripcion,
        activo: req.body.activo
    };
    Vacunas.create(vacunas)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the vacunas."
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

    Vacunas.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving vacunass."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vacunas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find vacunas with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving vacunas with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Vacunas.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "vacunas was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update vacunas with id=${id}. Maybe vacunas was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating vacunas with id=" + id
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
                    message: "vacunas was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete vacunas with id=${id}. Maybe vacunas was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete vacunas with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Vacunas.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} vacunass were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all vacunass."
        });
      });
};