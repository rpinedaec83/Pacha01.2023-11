const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;
const UserRole = db.user_role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signUp = (req,res)=>{
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save()
    .then((response)=>{
        res.status(200).send("Usuario registrado exitosamente! " + JSON.stringify(response.dataValues));
        console.log(response);
        req.body.roles.forEach(e => {
            Role.findOne({where:{nombre:e}}).then((roleResponse)=>{
                console.log(response.dataValues.id);
                console.log(roleResponse.dataValues.id);
                const userrole= new UserRole({
                    userId: response.dataValues.id,
                    roleId: roleResponse.dataValues.id,
                });
                userrole.save();
            }).catch();
        });
    })
    .catch((err)=>{
        res.status(400).send({message: `Failed insertion!`});
    });
};

exports.signin = (req,res)=>{

    User.findOne({where:{username:req.body.username}}).then((userResponse)=>{
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            userResponse.dataValues.password
          );

        if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
        }
        const token = jwt.sign({ id: userResponse.dataValues.id },
            config.secret,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 horas
            });
        req.session.token = token;
        res.status(200).send({
            id: userResponse.dataValues.id,
            username: userResponse.dataValues.username,
            email: userResponse.dataValues.email,
            // roles: authorities,
          });
    });

    
};

exports.signout = async (req, res) => {
    try {
        req.session = null;
        return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
        this.next(err);
    }
};