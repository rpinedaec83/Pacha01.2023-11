module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("usuario", {
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        estadoCivil: {
            type: DataTypes.STRING,
        },
        edad: {
            type: DataTypes.STRING,
        },
        activo: {
            type: DataTypes.STRING,
        },
    });
    return Usuario;
};