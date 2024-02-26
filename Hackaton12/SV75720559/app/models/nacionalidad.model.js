module.exports = (sequelize, DataTypes) => {
    const Nacionalidad = sequelize.define("nacionalidad", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });

    return Nacionalidad;
};