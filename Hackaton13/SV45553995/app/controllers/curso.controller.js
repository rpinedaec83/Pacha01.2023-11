const db = require("../models"); //Llama los modelos
const Curso = db.curso;
const Op = db.Sequelize.Op;
const cloudinary = require('cloudinary');

exports.create = (req,res)=>{
    let img = req.files['img'][0].path;
    let portada = req.files['portada'][0].path;
    let {nombre,descripcion,valor} = req.body;

    const objCurso = {nombre,descripcion,"img":img,"portada":portada,valor};
    Curso.create(objCurso).then(data=>{
        res.send.status(200).json(data);
    }).catch(error => {
        res.status(500).send({ msg: 'ERROR', log: error.message });
    });
};

exports.findAll=(req,res)=>{
    const descripcion = req.query.descripcion;
    var condition = descripcion ? { descripcion: { [Op.like]: `%${descripcion}%` } } : null;
    Curso.findAll( { where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Courses."
        });
    });
};

exports.findOne=(req,res)=>{
    const id = req.params.id;
    Curso.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Course."
        });
    });
};

exports.deleteOne = (req, res) => {
    const id = req.params.id;

    Curso.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Course was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Course with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Curso.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Courses were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Courses."
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Curso.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};