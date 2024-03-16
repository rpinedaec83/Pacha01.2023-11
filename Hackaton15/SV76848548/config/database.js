const Sequelize = require('sequelize');

const sequelize = new Sequelize('courier_db','root','Andree', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
