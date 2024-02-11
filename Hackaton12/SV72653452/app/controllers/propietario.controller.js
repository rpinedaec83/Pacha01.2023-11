const db = require("../models");
const Propietario = db.propietario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const propietario = {
        descripcion: req.body.descripcion
    };
    Propietario.create(propietario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the propietario."
            });
        });
};
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    console.log(descripcion)
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Propietario.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving propietarios."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Propietario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find propietario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving propietario with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Propietario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "propietario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update propietario with id=${id}. Maybe propietario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating propietario with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Propietario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "propietario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete propietario with id=${id}. Maybe propietario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete propietario with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Propietario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} propietarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all propietarios."
        });
      });
};