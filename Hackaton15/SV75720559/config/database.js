const Sequelize = require('sequelize');

const sequelize = new Sequelize('courier_db', 'root', 'Cristiano.2001', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
