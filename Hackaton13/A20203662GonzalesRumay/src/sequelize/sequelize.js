const { Sequelize }  = require('sequelize')
const config = require('../config/db.config')

const sequelize = new Sequelize(config.development)

const User = require('../models/User')
const Query = require('../models/Query')

User.hasMany(Query)
Query.belongsTo(User)

module.exports = sequelize