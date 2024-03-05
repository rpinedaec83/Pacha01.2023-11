module.exports = (sequelize, DataTypes) => {
    const Cupon = sequelize.define("cupon", {
        cupones: {
            type: DataTypes.STRING,
        },
    });
    return Cupon;
};