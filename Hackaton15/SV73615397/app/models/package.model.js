module.exports = (sequelize, DataTypes)=>{
    const Package = sequelize.define("package",{
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ubicacion:{
            type: DataTypes.STRING,
            allowNull: false
        },        
    });
    Package.associate = (models) => {
        Package.belongsTo(models.user, { foreignKey: 'userId' });
    };
    return Package
};