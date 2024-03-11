const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');

const objSequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.objSequelize = objSequelize;

const UsuarioModel = require('./user.model')(objSequelize,Sequelize);
const RoleModel = require('./role.model')(objSequelize,Sequelize);
const UserRoleModel = require('./user_role.model')(objSequelize,Sequelize);
const PackageModel = require('./package.model')(objSequelize,Sequelize);

db.user = UsuarioModel;
db.role = RoleModel;
db.user_role = UserRoleModel;
db.package = PackageModel;

//UsuarioModel.associate(db);
//RoleModel.associate(db);
PackageModel.associate(db);
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;