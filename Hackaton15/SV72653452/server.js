const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql');

const crypto = require('crypto');

// Crear una instancia de la aplicación Express
const app = express();



// Generar una cadena aleatoria usando la función randomBytes de crypto
const generateRandomString = () => {
    return crypto.randomBytes(32).toString('hex');
  };
  
  console.log(generateRandomString()); // Imprime la cadena aleatoria




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
    res.send('¡Bienvenido a mi aplicación!');
  });
  


passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
