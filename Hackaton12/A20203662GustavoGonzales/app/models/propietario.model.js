module.exports = (sequelize, DataTypes) => {
    const Propietario = sequelize.define("propietario", {
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        direccion: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        idNacionalidad: {
            type: DataTypes.STRING,
        },
        ubigeo: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.STRING,
        },
    });
    return Propietario;
};