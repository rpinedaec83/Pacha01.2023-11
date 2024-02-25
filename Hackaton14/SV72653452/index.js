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
    password: 'pacha2024',
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
        saveMessageToDB(msg); // Guardar el mensaje en la base de datos
    });

    socket.on('edit message', ({ username, oldText, newText }) => {
        io.emit('edit message', { username, oldText, newText });
        updateMessageInDB(username, oldText, newText); // Actualizar el mensaje en la base de datos
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Manejar solicitud de limpiar el chat
    socket.on('clear chat', () => {
        clearChatFromDB();
        io.emit('chat cleared'); // Emitir evento para notificar que el chat ha sido limpiado
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

function updateMessageInDB(username, oldText, newText) {
    console.log("Mensaje original:", oldText);
    console.log("Nuevo mensaje:", newText);
    const sql = 'UPDATE conversaciones SET mensaje = ? WHERE TRIM(LOWER(mensaje)) = TRIM(LOWER(?)) AND TRIM(LOWER(usuario)) = TRIM(LOWER(?))'; // Asegurarse de que el nombre de usuario coincida
    connection.query(sql, [newText, oldText, username], (err, result) => {
        if (err) {
            console.error('Error al actualizar mensaje en la base de datos: ' + err.message);
            return;
        }
        console.log('Número de filas actualizadas en la base de datos: ' + result.affectedRows);
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
