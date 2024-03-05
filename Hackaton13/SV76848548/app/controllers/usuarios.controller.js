const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.usuario) {
        res.status(400).send({
            message: "El usuario y la contraseña son obligatorios."
        });
        return;
    }
    const usuarios = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña 
    };

    
    Usuarios.create(usuarios)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                res.status(400).send({
                    message: "El usuario o la contraseña ya existen en la base de datos."
                });
            } else {
                res.status(500).send({
                    message: err.message || "Se produjo un error al crear el usuario."
                });
            }
        });
};

exports.findAll = (req, res) => {
    const usuario = req.query.usuario;
    
    console.log(usuario)
    var condition = usuario ? { usuario: { [Op.like]: `%${usuario}%` } } : null;
    //////////////////////
    const contraseña = req.query.contraseña;
    
    console.log(contraseña)
    var condition = contraseña ? { contraseña: { [Op.like]: `%${contraseña}%` } } : null;

    Usuarios.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuarios.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot find id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Usuarios.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Actualizado"
                });
            } else {
                res.send({
                    message: "Cannot update id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Usuarios.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Eliminado"
                });
            } else {
                res.send({
                    message: "Cannot delete id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Usuarios.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: "Eliminados" });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error"
        });
      });
};