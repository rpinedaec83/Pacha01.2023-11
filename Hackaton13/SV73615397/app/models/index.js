const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

console.log(dbConfig.USER);

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

db.user = require('./user.model.js')(objSequelize,Sequelize);
db.curso = require('./curso.model.js')(objSequelize,Sequelize);

module.exports = db;