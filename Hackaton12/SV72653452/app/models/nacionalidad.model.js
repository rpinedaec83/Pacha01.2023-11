module.exports = (sequelize, DataTypes) => {
    const Especie = sequelize.define("nacionalidad", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Especie;
};