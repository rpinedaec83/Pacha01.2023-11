const { connect } = require("mongoose");
const connectDB = async ()=>{
    try {
        await connect("mongodb://localhost:27017/chat_pachaqtec");
        console.log("Conección exitosa");
    } catch (error) {
        console.log(error.message);
    }
};
exports.connectMongoDB = connectDB;