const db = require("../models"); //Llama los modelos
const User = db.user;
const Op = db.Sequelize.Op;
const bcryptjs = require('bcryptjs');

exports.login=(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    //Comprobando si existe el email
    User.findOne({ where: { email: email } }).then(data=>{
        const hashedPassword = data.password;
        if(bcryptjs.compareSync(password,hashedPassword)){
            res.status(200).json({ msg: 'OK', users: data, log: 'Credenciales correctas.' });
        }
    }).catch(error => {
        res.status(404).json({ msg: 'ERROR', log: 'E-Mail no encontrado.' });
    });
};

exports.create=(req,res)=>{
    let email = req.body.email;
    let username = req.body.username;
    let password = bcryptjs.hashSync(req.body.password,10);
    console.log({"email":email,"username":username,"password":password});
    User.create({"email":email,"username":username,"password":password}).then((data)=>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
        });
    });
};

exports.findAll=(req,res)=>{
    User.findAll().then(data => {
        res.send(data);
    });
};