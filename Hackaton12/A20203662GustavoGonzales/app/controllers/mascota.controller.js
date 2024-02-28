const db = require("../models");
const Mascota = db.mascota;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(402).send({
            message: "El contenido no puede estar vacío.!"
        });
        return;
    }
    const mascota = {
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        idEspecie: req.body.idEspecie,
        idSexo: req.body.idSexo,
        idPropietario: req.body.idPropietario,
        activo: req.body.activo,
       
    };
    Mascota.create(mascota)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear la mascota."
            });
        });
};
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    console.log(nombre)
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    const fechaNacimiento = req.query.fechaNacimiento;
    console.log(fechaNacimiento)
    var condition = fechaNacimiento ? { fechaNacimiento: { [Op.like]: `%${fechaNacimiento}%` } } : null;

    const idSexo = req.query.idSexo;
    console.log(idSexo)
    var condition = idSexo ? { idSexo: { [Op.like]: `%${idSexo}%` } } : null;

    const idPropietario = req.query.idPropietario;
    console.log(idPropietario)
    var condition = idPropietario ? { idPropietario: { [Op.like]: `%${idPropietarioe}%` } } : null;

    const idEspecie = req.query.idEspecie;
    console.log(idEspecie)
    var condition = idEspecie ? { idEspecie: { [Op.like]: `%${idEspecie}%` } } : null;

    const activo = req.query.activo;
    console.log(activo)
    var condition = activo ? { activo: { [Op.like]: `%${activo}%` } } : null;


    Mascota.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar mascotas."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Mascota.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(403).send({
                    message: `No puedo encontrar mascota con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar mascota con id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Mascota.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "mascota fue actualizada exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar mascota con id=${id}. Maybe mascota was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar mascota con id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Mascota.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "mascota fue eliminada exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar mascota con id=${id}. ¡Quizás no se encontró la mascota!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar la mascota con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Mascota.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} las mascotas fueron eliminadas exitosamente!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar todas las mascotas.."
        });
      });
};