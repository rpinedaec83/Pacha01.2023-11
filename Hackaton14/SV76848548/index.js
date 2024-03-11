const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');
const mysql = require('mysql');

const app = express();
const server = createServer(app);
const io = new Server(server);

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hackaton14'
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database with id ' + connection.threadId);
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.broadcast.emit('hi');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        saveMessageToDB(msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('clear chat', () => {
        clearChatFromDB();
        io.emit('chat cleared'); 
    });
});

function saveMessageToDB(msg) {
    const sql = 'INSERT INTO conversaciones (mensaje) VALUES (?)';
    connection.query(sql, [msg], (err, result) => {
        if (err) {
            console.error('Error al insertar mensaje en la base de datos: ' + err.message);
            return;
        }
        console.log('Mensaje insertado en la base de datos con ID: ' + result.insertId);
    });
}

function clearChatFromDB() {
    const sql = 'DELETE FROM conversaciones';
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error al limpiar el chat en la base de datos: ' + err.message);
            return;
        }
        console.log('Chat limpiado en la base de datos. Número de filas eliminadas: ' + result.affectedRows);
    });
}

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});

