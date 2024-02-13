const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

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

//Importando modelos
db.sexo = require("./sexo.model.js")(objSequelize, Sequelize);
db.especie = require("./especie.model.js")(objSequelize, Sequelize);
db.nacionalidad = require("./nacionalidad.model.js")(objSequelize, Sequelize);
db.raza = require("./raza.model.js")(objSequelize, Sequelize);
db.ubigeo = require("./ubigeo.model.js")(objSequelize, Sequelize);

module.exports = db;