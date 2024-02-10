module.exports = (sequelize, DataTypes) => {
    const Mascota = sequelize.define("mascota", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Mascota;
};