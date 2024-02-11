const db = require("../models");
const Raza = db.raza;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const raza = {
        descripcion: req.body.descripcion
    };
    Raza.create(raza)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the raza."
            });
        });
};
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    console.log(descripcion)
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Raza.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving razas."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Raza.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find raza with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving raza with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Raza.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "raza was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update raza with id=${id}. Maybe raza was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating raza with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Raza.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "raza was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete raza with id=${id}. Maybe raza was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete raza with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Raza.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} razas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all razas."
        });
      });
};