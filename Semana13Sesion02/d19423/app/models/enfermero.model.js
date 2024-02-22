module.exports = (sequelize, DataTypes) => {
    const Enfermero = sequelize.define("enfermero", {
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
    return Enfermero;
};