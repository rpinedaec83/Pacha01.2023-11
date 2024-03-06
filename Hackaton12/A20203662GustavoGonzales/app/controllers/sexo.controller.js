const db = require("../models");
const Sexo = db.sexo;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.descripcion) {
        res.status(400).send({
            message: "El contenido no puede estar vacío.!"
        });
        return;
    }
    const sexo = {
        descripcion: req.body.descripcion
    };
    Sexo.create(sexo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Se produjo algún error al crear Sexo."
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
    
    Sexo.findAll( { where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Se produjo algún error al recuperar Sexo."
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;

    Sexo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No puedo encontrar sexo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar Sexo con id=" + id
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Sexo.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sexo se actualizó exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar Sexo con id=${id}.  Quizás no se encontró Sexo o req.body esta vacioi!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar Sexo con id=" + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Sexo.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Sexo fue eliminado exitosamente!"
                });
            } else {
                res.send({
                    message: `No se puede eliminar Sexo con id=${id}. Quizás Sexo no fue encontrado!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el sexo con id=" + id
            });
        });
};
exports.deleteAll = (req, res) => {
    Sexo.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Sexos fueron eliminados exitosamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo algún error al eliminar todos los sexos."
        });
      });
};