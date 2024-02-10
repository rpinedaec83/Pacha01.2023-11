module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("usuario", {
        descripcion: {
            type: DataTypes.STRING,
        },
    });
    return Usuario;
};