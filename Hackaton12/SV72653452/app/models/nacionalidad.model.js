module.exports = (sequelize, DataTypes) => {
    const Nacionalidad = sequelize.define("nacionalidade", {
        descripcion: {
            type: DataTypes.STRING,
        },

        activo: {
            type: DataTypes.STRING,
        },
    });
    return Nacionalidad;
};