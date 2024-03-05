module.exports = (sequelize, DataTypes) => {
    const Propietario = sequelize.define("propietario", {
        nombres: {
            type: DataTypes.STRING,
        },
        apellidos: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
    });
    return Propietario;
};