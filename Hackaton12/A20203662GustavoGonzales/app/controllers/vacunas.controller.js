const db = require("../models");
const Vacunas = db.vacunas;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(402).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }
    const vacunas = {
        descripcion: req.body.descripcion,
        activo: req.body.activo
    };
    Vacunas.create(vacunas)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear las vacunas."
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

    Vacunas.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar las vacunas."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vacunas.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(403).send({
                    message: `No puedo encontrar vacunas con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar vacunas con id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Vacunas.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "vacunas se actualizó exitosamente."
                });
            } else {
                res.send({
                    message: `No se pueden actualizar las vacunas con id=${id}. Maybe vacunas was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar vacunas con id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Vacunas.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "vacunas se eliminaron exitosamente!"
                });
            } else {
                res.send({
                    message: `No se pueden eliminar vacunas con id=${id}. Quizás no se encontraron vacunas!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudieron eliminar las vacunas con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Vacunas.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} las vacunas fueron eliminadas exitosamente!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar todas las vacunas."
        });
      });
};