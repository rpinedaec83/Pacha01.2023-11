const db = require("../models");
const Nacionalidad = db.nacionalidad;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(402).send({
            message: "¡El contenido no puede estar vacío!"
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
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear la nacionalidad."
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
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar las nacionalidades."
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
                    message: `No puedo encontrar la nacionalidad con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar nacionalidad con id=" + id
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
                    message: "La nacionalidad se actualizó correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la nacionalidad con id=${id}. Maybe nacionalidad was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar nacionalidad con id=" + id
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
                    message: "Nacionalidad fue eliminada exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar la nacionalidad con id=${id}. Quizás no se encontró la nacionalidad!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar la nacionalidad con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Nacionalidad.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} nacionalidades fueron eliminadas exitosamente!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar todas las nacionalidades."
        });
      });
};