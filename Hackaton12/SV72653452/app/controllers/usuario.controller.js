const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const usuario = {
        username: req.body.username,
        email: req.body.email,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        estadoCivil: req.body.estadoCivil,
        edad: req.body.edad,
        activo: req.body.activo,
    };
    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the usuario."
            });
        });
};
exports.findAll = (req, res) => {
    const username = req.query.username;
    console.log(username)
    var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;


    const email = req.query.email;
    console.log(email)
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;


    const nombre = req.query.nombre;
    console.log(nombre)
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;


    const apellido = req.query.apellido;
    console.log(apellido)
    var condition = apellido ? { apellido: { [Op.like]: `%${apellido}%` } } : null;



    const estadoCivil = req.query.estadoCivil;
    console.log(estadoCivil)
    var condition = estadoCivil ? { estadoCivil: { [Op.like]: `%${estadoCivil}%` } } : null;



    const edad = req.query.edad;
    console.log(edad)
    var condition = edad ? { edad: { [Op.like]: `%${edad}%` } } : null;



    const activo = req.query.activo;
    console.log(activo)
    var condition = activo ? { activo: { [Op.like]: `%${activo}%` } } : null;


    Usuario.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving usuarios."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find usuario with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving usuario with id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "usuario was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update usuario with id=${id}. Maybe usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating usuario with id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Usuario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "usuario was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete usuario with id=${id}. Maybe usuario was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete usuario with id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Usuario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} usuarios were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all usuarios."
        });
      });
};