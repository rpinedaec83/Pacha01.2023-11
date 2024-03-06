module.exports = (sequelize, Sequelize) => {
    const Vacunas = sequelize.define("vacunas", {
      descripcion: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      usuarioCreacion: {
        type: Sequelize.STRING
      }

    },
    {
      timestamps: false
  });
  
    return Vacunas;
  };
  