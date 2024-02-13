module.exports = (sequelize, DataTypes) => {
    const Raza = sequelize.define("raza", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Raza;
};