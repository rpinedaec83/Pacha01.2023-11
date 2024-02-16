module.exports = (sequelize, DataTypes) => {
    const Procedimiento = sequelize.define("procedimiento", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Procedimiento;
};