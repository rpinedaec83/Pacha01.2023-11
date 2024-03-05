module.exports = (sequelize, DataTypes) => {
    const Raza = sequelize.define("raza", {
        descripcion: {
            type: DataTypes.STRING,
        },

        activo: {
            type: DataTypes.STRING,
        },
    });
    return Raza;
};