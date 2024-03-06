const db = require("../models");
const Especie = db.especie;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(402).send({
            message: "El contenido no puede estar vacío.!"
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
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear la especie."
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
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar especies."
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
                res.status(403).send({
                    message: `No puedo encontrar especies con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar especie con id=" + id
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
                    message: "Especie se actualizó exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la especie con id=${id}. Maybe especie was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar especie con id=" + id
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
                    message: "La especie fue eliminada exitosamente.!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar especie con id=${id}. Quizás no se encontró la especie!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar la especie con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Especie.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} las especies fueron eliminadas exitosamente!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar todas las especies.."
        });
      });
};