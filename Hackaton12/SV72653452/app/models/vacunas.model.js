module.exports = (sequelize, DataTypes) => {
    const Vacuna = sequelize.define("vacuna", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Vacuna;
};