


const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql');
const crypto = require('crypto');
const socketIO = require('socket.io');

const app = express();

const server = require('http').Server(app);

const io = socketIO(server);

const generateRandomString = () => {
    return crypto.randomBytes(32).toString('hex');
};
  

console.log('http://localhost:3000/auth/google');

app.use(session({
    secret: generateRandomString(), 
    resave: false,
    saveUninitialized: false
}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pacha2024',
    database: 'hackaton15'
});

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

passport.use(new GoogleStrategy({
    clientID: '781344536012-igsb8g6j7uiamo2jmp9icfnlh4ep9u2i.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    
    console.log('Perfil de usuario:', profile);
    return done(null, profile);
}));


app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});




app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);


app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        
        res.redirect('/');
    }
);
 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});


let firstUserConnected = false;


io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  
  if (!firstUserConnected) {
    firstUserConnected = true;

    socket.emit('server message', 'Bienvenido al chat. ¿Cómo puedo ayudarte?');
}

 
  socket.on('userinfo', (data) => {
    const { username, ubicacionResidencia } = data;
    socket.username = username; 


   
    db.query('INSERT INTO InformacionDeUsuario (nombreUsuario, ubicacionResidencia) VALUES (?, ?)', [username, ubicacionResidencia], (err, result) => {
      if (err) {
          console.error('Error al guardar la información del usuario en la base de datos:', err);
      } else {
          console.log('Información del usuario guardada en la base de datos');
      }
      
      if (firstUserConnected) {
      
      
        socket.emit('server message', '¿Qué servicio desea?');
    }



  });

    
});



let canSendMessages = true;


socket.on('chat message', (msg) => {
  

    if (!canSendMessages) {
        return;
    }

    if (msg.includes('necesito') && msg.includes('paquete')) {

        
        setTimeout(() => {

            if (firstUserConnected) {
      
                io.emit('server message', ' Un curier entrará al chat para ayudarte a enviar el paquete.');
            canSendMessages = false;
            }

          

        }, 2000);


    }
    else {
        
        setTimeout(() => {

            if (firstUserConnected) {
      
                io.emit('server message', ' ¿Lo puedo ayudar en algo?');
            }
            
        }, 2000);
    }
  

  db.query('INSERT INTO MensajesDeChat (mensaje, nombreUsuario) VALUES (?, ?)', [msg, socket.username], (err, result) => {
      
    if (err) {
          console.error('Error al guardar el mensaje en la base de datos:', err);
      } else {
          console.log('Mensaje guardado en la base de datos');
      }
      
  });


  io.emit('chat message', { name: socket.username, message: msg });
});



  socket.on('disconnect', () => {
      console.log('Cliente desconectado');
  });
});
