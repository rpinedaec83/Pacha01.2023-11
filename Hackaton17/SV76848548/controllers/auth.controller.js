const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.login = (req,res)=>{
    try {
        User.findOne({email:req.body.email}).exec((err,user)=>{
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = req.body.password === user.password;
            if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid Password!" });
            }

            const token = jwt.sign({ id: user.id },
            config.SECRET_KEY,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400, // 24 hours
            });

            req.session.token = token;

            res.status(200).send({
                id: user._id,
                email: user.email,
                msg:"Wellcome!!"
            });
        });
    } catch (error) {
        return res.status(400).send(error.message);
    }
};