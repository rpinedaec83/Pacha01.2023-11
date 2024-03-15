module.exports = (sequelize,DataTypes)=>{
    const Curso = sequelize.define("curso",{
        nombre:{
            type:DataTypes.STRING,
            allowNulls: false
        },
        descripcion:{
            type:DataTypes.STRING
        },
        img:{
            type:DataTypes.STRING,
            allowNulls: false
        },
        portada:{
            type:DataTypes.STRING,
            allowNulls: false
        },
        valor:{
            type:DataTypes.FLOAT
        }
    });
    return Curso;
};