module.exports = (sequelize, DataTypes) => {
    const Historia = sequelize.define("historia", {
        fecha: {
            type: DataTypes.DATE,
        },
        descripcion: {
            type: DataTypes.STRING,
        },

    });
    return Historia;
};