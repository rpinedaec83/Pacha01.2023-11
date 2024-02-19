module.exports = (sequelize, DataTypes) => {
  const Cupon = sequelize.define('cupon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: false
    }
  })
  return Cupon
}
