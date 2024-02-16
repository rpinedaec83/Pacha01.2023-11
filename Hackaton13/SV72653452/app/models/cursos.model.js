module.exports = (sequelize, DataTypes) => {
    const Cursos = sequelize.define("cursos", {
        descripcion: {
            type: DataTypes.STRING,
        },


        activo: {
            type: DataTypes.STRING,
        },
    });
    return Cursos;
};