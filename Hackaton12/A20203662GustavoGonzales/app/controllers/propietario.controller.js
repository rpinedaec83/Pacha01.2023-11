const db = require("../models");
const Propietario = db.propietario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(402).send({
            message: "El contenido no puede estar vacío.!"
        });
        return;
    }
    const propietario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        idNacionalidad: req.body.idNacionalidad,
        ubigeo:req.body.ubigeo,
        activo: req.body.activo,
    };
    Propietario.create(propietario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear el propietario."
            });
        });
};
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    console.log(nombre)
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    const apellido = req.query.apellido;
    console.log(apellido)
    var condition = apellido ? { apellido: { [Op.like]: `%${apellido}%` } } : null;

    const direccion = req.query.direccion;
    console.log(direccion)
    var condition = direccion ? { direccion: { [Op.like]: `%${direccion}%` } } : null;

    const telefono = req.query.telefono;
    console.log(telefono)
    var condition = telefono ? { telefono: { [Op.like]: `%${telefono}%` } } : null;

    const idNacionalidad = req.query.idNacionalidad;
    console.log(idNacionalidad)
    var condition = idNacionalidad ? { idNacionalidad: { [Op.like]: `%${idNacionalidad}%` } } : null;

    const ubigeo = req.query.ubigeo;
    console.log(ubigeo)
    var condition = ubigeo ? { ubigeo: { [Op.like]: `%${ubigeo}%` } } : null;

    const activo = req.query.activo;
    console.log(activo)
    var condition = activo ? { activo: { [Op.like]: `%${activo}%` } } : null;

    Propietario.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar los propietarios."
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
                res.status(403).send({
                    message: `No se puede encontrar propietaria con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar propietario con id=" + id
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
                    message: "propietario se actualizó exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar propietario con id=${id}. Maybe propietario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar propietario con id=" + id
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
                    message: "propietario fue eliminado exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar la propietaria con id=${id}. Quizás no se encontró el propietario!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar propietario con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Propietario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Las propietarias fueron eliminadas con éxito!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar a todos los propietarios."
        });
      });
};