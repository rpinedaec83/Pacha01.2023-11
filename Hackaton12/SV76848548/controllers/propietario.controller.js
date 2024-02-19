const db = require("../models");
const Propietario = db.propietario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
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
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the propietario."
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
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving propietarios."
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
                res.status(404).send({
                    message: `Cannot find propietario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving propietario with id=" + id
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
                    message: "propietario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update propietario with id=${id}. Maybe propietario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating propietario with id=" + id
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
                    message: "propietario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete propietario with id=${id}. Maybe propietario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete propietario with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Propietario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} propietarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all propietarios."
        });
      });
};