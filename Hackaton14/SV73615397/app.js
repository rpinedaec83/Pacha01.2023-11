const express = require('express')
const SocketIO = require('socket.io')
const app = express()

const User = require("./models/user.model");

const db = require('./db');
console.log(db);
db.connectMongoDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000
const server = app.listen(PORT,()=>{console.log(`Escuchando el puerto ${PORT}`)});
const io = SocketIO(server);

io.on('connection',(socket)=>{
    // console.log("new connection",socket.id);
    const getUsers = async ()=>{
        // let newUser = new User({username:"Salim Rojas",password:"asdfgh"});
        // console.log(newUser);
        // await newUser.save();
        const users = await User.find();
        console.log(users);
    };
    getUsers();
    socket.on('chat_message',(data)=>{
        io.sockets.emit("message from server",data);
    });

    socket.on("typing",(username)=>{
        socket.broadcast.emit("typing from server",username);
    });

    socket.on("login", async(data)=>{
        let userFound = await User.findOne({username:data.username});
        socket.emit("login from server",userFound);
    });
});
