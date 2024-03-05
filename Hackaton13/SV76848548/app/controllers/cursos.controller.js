const db = require("../models");
const Cursos = db.cursos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Vacio!"
        });
        return;
    }
    const cursos = {
        nombre: req.body.nombre,
        valor: req.body.valor,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        portada: req.body.portada,
        usuarioId: req.body.usuarioId
    };

    
    Cursos.create(cursos)
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

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    
    console.log(nombre)
    var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;
    
    Cursos.findAll({
        include: ["usuarios"],
    }, { where: condition })
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

    Cursos.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot  id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Cursos.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Actualizado!"
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

    Cursos.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Eliminado!"
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
    Cursos.destroy({
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