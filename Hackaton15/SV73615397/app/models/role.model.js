module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("role", {
        nombre: {
            type: DataTypes.STRING,
        },
    });

    // Role.associate = (models) => {
    //     Role.belongsToMany(models.user, { through: 'userroles', foreignKey: 'roleId' });
    // };

    return Role;
};