module.exports = (sequelize, DataTypes) => {
    const Cupones = sequelize.define("cupones", {
        cuponesId: {
            type: DataTypes.STRING,
          
       
        },


        

        
    });
    return Cupones;
};