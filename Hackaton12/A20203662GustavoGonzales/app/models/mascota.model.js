module.exports = (sequelize, DataTypes) => {
    const Mascota = sequelize.define("mascota", {
        nombre: {
            type: DataTypes.STRING,
        },
        fechaNacimiento: {
            type: DataTypes.STRING,
        },
        idEspecie: {
            type: DataTypes.STRING,
        },
        idSexo: {
            type: DataTypes.STRING,
        },
        idPropietario: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.STRING,
        },
    });
    return Mascota;
};