
const Sequelize = require("sequelize");
const config = require("./db.config");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    max: config.pool.max, 
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('../models/User')(sequelize, Sequelize)
db.Query = require('../models/Query')(sequelize, Sequelize)

//! ESTABLER LAS RELACIONES ENTRE LAS TABLAS

db.User.hasMany(db.Query, {as: 'query'})
db.Query.belongsTo(db.User, {
  as: 'user'
})

module.exports = db