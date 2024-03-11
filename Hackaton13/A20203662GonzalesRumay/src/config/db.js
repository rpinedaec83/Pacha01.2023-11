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
db.Curso = require('../models/Curso')(sequelize, Sequelize)
db.Orden = require('../models/Orden')(sequelize, Sequelize)
db.Cupon = require('../models/Cupon')(sequelize, Sequelize)

db.User.hasMany(db.Curso, {as: 'curso'})
db.Curso.belongsTo(db.User, {
  as: 'user'
})

db.Orden.belongsTo(db.User, { as: 'user' }); 
db.Orden.belongsTo(db.Curso, { as: 'curso' });
module.exports = db