module.exports = (sequelize, DataTypes) => {
    const Usuarios = sequelize.define("usuarios", {
        usuario: {
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        },
    });
    return Usuarios;
};