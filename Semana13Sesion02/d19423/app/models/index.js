const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
console.log(dbConfig.USER);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
db.sequelize = sequelize;


/*
db.especie = require("./especie.model.js")(sequelize, Sequelize);
db.nacionalidad = require("./nacionalidad.model.js")(sequelize, Sequelize);
db.raza = require("./raza.model.js")(sequelize, Sequelize);
db.sexo = require("./sexo.model.js")(sequelize, Sequelize);
db.ubigeo = require("./ubigeo.model.js")(sequelize, Sequelize);
*/

db.doctor = require("./doctor.model.js")(sequelize, Sequelize);
db.enfermero = require("./enfermero.model.js")(sequelize, Sequelize);
db.historia = require("./historia.model.js")(sequelize, Sequelize);
db.mascota = require("./mascota.model.js")(sequelize, Sequelize);
db.operacion = require("./operacion.model.js")(sequelize, Sequelize);
db.procedimiento = require("./procedimiento.model.js")(sequelize, Sequelize);
db.propietario = require("./propietario.model.js")(sequelize, Sequelize);



db.doctor.hasMany(db.operacion, {as:"doctor"})
db.enfermero.hasMany(db.operacion, {as:"operacion"})


db.mascota.hasMany(db.propietario, {as:"propietarios"})
db.historia.hasMany(db.mascota, {as:"mascota"})


db.operacion.hasMany(db.procedimiento, {as:"procedimiento"})
db.operacion.hasMany(db.mascota, {as:"mascota"})



module.exports = db;
