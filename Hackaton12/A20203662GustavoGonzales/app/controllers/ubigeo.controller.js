const db = require("../models");
const Ubigeo = db.ubigeo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.ubigeo) {
        res.status(400).send({
            message: "El contenido no puede estar vacío.!"
        });
        return;
    }
    const ubigeo = {
        ubigeo: req.body.ubigeo,
        ubicacion: req.body.ubicacion,
        activo: req.body.activo
    };
    Ubigeo.create(ubigeo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear el ubigeo."
            });
        });
};
exports.findAll = (req, res) => {
    const ubigeo = req.query.ubigeo;
    console.log(ubigeo)
    var condition = ubigeo ? { ubigeo: { [Op.like]: `%${ubigeo}%` } } : null;

    const ubicacion = req.query.ubicacion;
    
    console.log(ubicacion)
    var condition = ubicacion ? {ubicacion: { [Op.like]: `%${ubicacion}%` } } : null;

    const activo = req.query.activo;
    
    console.log(activo)
    var condition = activo ? { activo: { [Op.like]: `%${activo}%` } } : null;

    Ubigeo.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar ubigeos."
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
                res.status(403).send({
                    message: `No puedo encontrar ubigeo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar ubigeo con id=" + id
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
                    message: "ubigeo se actualizó exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar ubigeo con id=${id}. Maybe ubigeo was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar ubigeo con id=" + id
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
                    message: "ubigeo fue eliminado exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar ubigeo con id=${id}. Quizás no se encontró ubigeo!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar ubigeo con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Ubigeo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Los ubigeos fueron eliminados exitosamente.!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar todos los ubigeos.."
        });
      });
};