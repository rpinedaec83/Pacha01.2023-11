const db = require("../models");
const OrdenCompra = db.ordenCompra;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.fecha) {
        res.status(400).send({
            message: "Vacio!"
        });
        return;
    }
    const ordenCompra = {
        fecha: req.body.fecha,
        impuestos: req.body.impuestos,
        estado: req.body.estado,
        usuarioId: req.body.usuarioId,
        cuponId: req.body.cuponId,
    };
    OrdenCompra.create(ordenCompra)
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

exports.findAll = (req, res) => {
    const fecha = req.query.fecha;
   
    var condition = fecha ? { fecha: { [Op.like]: `%${fecha}%` } } : null;

    OrdenCompra.findAll({
        include: ["usuarios","cupon"],
    }, { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error "
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    OrdenCompra.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot find id=" + id
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

    OrdenCompra.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Actualizado"
                });
            } else {
                res.send({
                    message: "Cannot update id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    OrdenCompra.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Eliminado"
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
    OrdenCompra.destroy({
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