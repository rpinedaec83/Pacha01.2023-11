const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const usuario = {
        descripcion: req.body.descripcion
    };
    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the usuario."
            });
        });
};
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    console.log(descripcion)
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Usuario.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving usuarios."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find usuario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving usuario with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "usuario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update usuario with id=${id}. Maybe usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating usuario with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "usuario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete usuario with id=${id}. Maybe usuario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete usuario with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Usuario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} usuarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all usuarios."
        });
      });
};