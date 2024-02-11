const db = require("../models");
const Ubigeo = db.ubigeo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const ubigeo = {
        descripcion: req.body.descripcion
    };
    Ubigeo.create(ubigeo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ubigeo."
            });
        });
};
exports.findAll = (req, res) => {
    const descripcion = req.query.descripcion;
    console.log(descripcion)
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;

    Ubigeo.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ubigeos."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ubigeo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ubigeo with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving ubigeo with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Ubigeo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ubigeo was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update ubigeo with id=${id}. Maybe ubigeo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating ubigeo with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Ubigeo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ubigeo was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete ubigeo with id=${id}. Maybe ubigeo was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete ubigeo with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Ubigeo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} ubigeos were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all ubigeos."
        });
      });
};