const db = require("../models");
const Cupon = db.cupones;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.cupones) {
        res.status(400).send({
            message: "Usuario y la contraseña son obligatorios."
        });
        return;
    }
    const cupones = {
        cupones: req.body.cupones,
    };
    
    Cupon.create(cupones)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(400).send({
                    message: "El usuario o la contraseña ya existen"
                });
            } else {
                res.status(500).send({
                    message: err.message || "Se produjo un error"
                });
            }
        });
};

exports.findAll = (req, res) => {
    const cupones = req.query.cupones;
    
    console.log(cupones)
    var condition = cupones ? { cupones: { [Op.like]: `%${cupones}%` } } : null;

    Cupon.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Cupon.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Cupon.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Actualizado exitosamente."
                });
            } else {
                res.send({
                    message: "Cannot actualizacion id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Cupon.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Eliminado exitosamente"
                });
            } else {
                res.send({
                    message: "Cannot delete id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Cupon.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: "Eliminados" });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error"
        });
      });
};