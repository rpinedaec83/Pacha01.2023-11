module.exports = (sequelize, DataTypes) => {
    const Operacion = sequelize.define("operacion", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Operacion;
};