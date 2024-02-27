const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

mongoose.connect('mongodb://localhost:27017/socketio-node-mongodb-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor en tiempo real escuchando en http://localhost:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});
