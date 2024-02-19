module.exports = (sequelize, DataTypes) => {
    const Ubigeo = sequelize.define("ubigeo", {
        ubigeo: {
            type: DataTypes.STRING,
        },
        ubicacion: {
            type: DataTypes.STRING,
        },

        activo: {
            type: DataTypes.STRING,
        },
    });
    return Ubigeo;
};