const db = require("../models");
const Mascota = db.mascota;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
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
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the mascota."
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
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving mascotas."
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
                res.status(404).send({
                    message: `Cannot find mascota with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving mascota with id=" + id
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
                    message: "mascota was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update mascota with id=${id}. Maybe mascota was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating mascota with id=" + id
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
                    message: "mascota was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete mascota with id=${id}. Maybe mascota was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete mascota with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Mascota.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} mascotas were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all mascotas."
        });
      });
};