module.exports = (sequelize, DataTypes) => {
    const Propietario = sequelize.define("propietario", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Propietario;
};