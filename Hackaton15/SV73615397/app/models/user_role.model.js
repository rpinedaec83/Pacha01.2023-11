module.exports = (sequelize,DataTypes)=>{
    const UserRole = sequelize.define("UserRole",{
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        }
    });
    return UserRole;
};