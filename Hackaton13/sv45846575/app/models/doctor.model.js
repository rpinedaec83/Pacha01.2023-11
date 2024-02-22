module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define("doctor", {
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
    return Doctor;
};