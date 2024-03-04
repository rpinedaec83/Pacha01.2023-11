


// Importar los módulos necesarios
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql');
const crypto = require('crypto');
const socketIO = require('socket.io');

// Crear una instancia de la aplicación Express
const app = express();

// Crear un servidor HTTP usando la aplicación Express
const server = require('http').Server(app);

// Crear un servidor de Socket.IO vinculado al servidor HTTP
const io = socketIO(server);

// Generar una cadena aleatoria para secret de express-session
const generateRandomString = () => {
    return crypto.randomBytes(32).toString('hex');
};
  

console.log('http://localhost:3000/auth/google');

// Configurar express-session
app.use(session({
    secret: generateRandomString(), // Cambia esto a una cadena aleatoria y segura
    resave: false,
    saveUninitialized: false
}));

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pacha2024',
    database: 'hackaton15'
});

// Conectar a la base de datos MySQL
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

// Configurar Passport.js
passport.use(new GoogleStrategy({
    clientID: '781344536012-igsb8g6j7uiamo2jmp9icfnlh4ep9u2i.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    // Aquí puedes realizar la lógica para verificar si el usuario está autorizado
    // Por ejemplo, buscar el usuario en la base de datos y autenticarlo
    console.log('Perfil de usuario:', profile);
    return done(null, profile);
}));

// Configurar la autenticación de Passport.js
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});



// Configurar la ruta de inicio de sesión de Google
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Configurar la ruta de callback de Google para manejar la autenticación
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Redireccionar a la página principal después de la autenticación exitosa
        res.redirect('/');
    }
);
 
// Definir una ruta para la raíz de la aplicación
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Iniciar el servidor HTTP
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});

// Variable para controlar si el servidor ha hablado con alguien
let firstUserConnected = false;

// Configurar la conexión de Socket.IO
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Verificar si es el primer usuario conectado
  if (!firstUserConnected) {
    firstUserConnected = true;
    // Mandar un mensaje de bienvenida al primer usuario
    socket.emit('server message', 'Bienvenido al chat. ¿Cómo puedo ayudarte?');
}

  // Manejar evento para recibir el nombre de usuario
  socket.on('userinfo', (data) => {
    const { username, ubicacionResidencia } = data;
    socket.username = username; // Establecer el nombre de usuario en el socket


    // Guardar el nombre de usuario y la ubicación de residencia en la base de datos
    db.query('INSERT INTO InformacionDeUsuario (nombreUsuario, ubicacionResidencia) VALUES (?, ?)', [username, ubicacionResidencia], (err, result) => {
      if (err) {
          console.error('Error al guardar la información del usuario en la base de datos:', err);
      } else {
          console.log('Información del usuario guardada en la base de datos');
      }
      
      if (firstUserConnected) {
      
        // Mandar un mensaje de bienvenida al primer usuario
        socket.emit('server message', '¿Qué servicio desea?');
    }



  });

    
});



let canSendMessages = true;

 // Manejar eventos de chat
socket.on('chat message', (msg) => {
  
    // Verificar si el servidor puede enviar mensajes
    if (!canSendMessages) {
        return;
    }

    if (msg.includes('necesito') && msg.includes('paquete')) {
        // Emitir un mensaje especial al cliente
        
        setTimeout(() => {

            if (firstUserConnected) {
      
                io.emit('server message', ' Un curier entrará al chat para ayudarte a enviar el paquete.');
            canSendMessages = false; // Detener al servidor de enviar más mensajes
            }

          

        }, 2000);


    }
    else {
        // Si el mensaje no contiene las palabras clave, preguntar al cliente si necesita ayuda después de un retraso de 3 segundos
        setTimeout(() => {

            if (firstUserConnected) {
      
                io.emit('server message', ' ¿Lo puedo ayudar en algo?');
            }
            
        }, 2000);
    }
  
    // Guardar el mensaje y el nombre de usuario en la base de datos
  db.query('INSERT INTO MensajesDeChat (mensaje, nombreUsuario) VALUES (?, ?)', [msg, socket.username], (err, result) => {
      
    if (err) {
          console.error('Error al guardar el mensaje en la base de datos:', err);
      } else {
          console.log('Mensaje guardado en la base de datos');
      }
      
  });

  // Emitir el mensaje a todos los clientes
  io.emit('chat message', { name: socket.username, message: msg });
});


  // Manejar desconexiones
  socket.on('disconnect', () => {
      console.log('Cliente desconectado');
  });
});
