const db = require("../models");
const Raza = db.raza;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "El contenido no puede estar vacío.!"
        });
        return;
    }
    const raza = {
        descripcion: req.body.descripcion,
        activo: req.body.activo
    };
    Raza.create(raza)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear la raza."
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

    Raza.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar razas."
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
                res.status(403).send({
                    message: `No puedo encontrar raza con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar raza con id=" + id
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
                    message: "raza se actualizó exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar raza con id=${id}. Maybe raza was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar raza con id=" + id
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
                    message: "Raza fue eliminada con éxito!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar raza con id=${id}. Quizás no se encontró raza!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar raza con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Raza.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} razas fueron eliminadas exitosamente!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar todas las razas."
        });
      });
};