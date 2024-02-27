const express = require("express")
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')

const app = express();
const server = http.createServer(app)
const io = socketIo(server)

const PORT = process.env.PORT || 3000;
//const nombre = 'Juanita'
const grupos = [5,10,15,20]
// emitir coneccion con el socket.IO
io.on('connection', (socket) => {
  console.log('Se conecto un cliente');
  
  // console.log(socket);
  socket.emit('datosIniciales', grupos);

  socket.on('disconnect', () => {
    console.log('cliente desconectado.')
  })

  socket.on('actualizarData', ({grupo, cambio}) => {
    // console.log(`Actualziando ${grupo} / ${cambio}`)
    if(!isNaN(cambio)) {
      grupos[grupo-1] += cambio;
      io.emit('datosIniciales', grupos)
    }
  })
})



server.listen(PORT, () => {
  console.log('The server is running...')
})