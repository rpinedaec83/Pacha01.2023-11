const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "El contenido no puede estar vacío.!"
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
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al crear el usuario."
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
            res.status(401).send({
                message:
                    err.message || "Se produjo algún error al recuperar usuarios."
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
                res.status(403).send({
                    message: `No se puede encontrar el usuario con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al recuperar usuario con id=" + id
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
                    message: "El usuario se actualizó con éxito."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el usuario con id=${id}. Maybe usuario was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "Error al actualizar usuario con id=" + id
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
                    message: "Usuario fue eliminada exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar el usuario con id=${id}. Tal vez el usuario no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(401).send({
                message: "No se pudo eliminar el usuario con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Usuario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Los usuarios fueron eliminados exitosamente!` });
      })
      .catch(err => {
        res.status(401).send({
          message:
            err.message || "Se produjo algún error al eliminar a todos los usuarios."
        });
      });
};