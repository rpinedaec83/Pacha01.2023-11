module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('curso', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      img_path: {
        type: DataTypes.STRING,
        allowNull: true
      },
      front_page: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price_sale: {
        type: DataTypes.FLOAT,
        allowNull: true,
      }
    })
    return Curso
  }