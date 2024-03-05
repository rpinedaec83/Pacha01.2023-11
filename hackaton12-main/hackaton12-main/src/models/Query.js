module.exports = (sequelize, DataTypes) => {
  
  const User = require('./User');

  const Query = sequelize.define('query', {
    patientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emergencyNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
  return Query
}
