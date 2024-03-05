const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req,res,next)=>{
  console.log(req.body);
    User.findAll({
      where: { [db.Sequelize.Op.or]: [
        { username: req.body.username },
        { email: req.body.email },
      ]},
    }).then((response)=>{
      console.log(response);
        if (response.length>0) {
          res.status(400).send({ message: "Failed! email or username is already in use!" });
          return;
        }
        next();
    }).catch();
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;