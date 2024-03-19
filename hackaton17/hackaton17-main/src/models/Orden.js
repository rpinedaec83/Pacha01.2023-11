module.exports = (sequelize, DataTypes) => {
  const Orden = sequelize.define('orden', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    }
  })
  return Orden
}
