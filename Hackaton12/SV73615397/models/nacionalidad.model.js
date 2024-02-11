module.exports = (sequelize, DataTypes) => {
    const nacionalidad = sequelize.define("nacionalidad", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return nacionalidad;
};