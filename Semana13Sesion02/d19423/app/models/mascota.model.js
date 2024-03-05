module.exports = (sequelize, DataTypes) => {
    const Mascota = sequelize.define("mascota", {
        nombres: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
    });
    return Mascota;
};