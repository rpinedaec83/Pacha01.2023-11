const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mysql = require('mysql');

require('dotenv').config();

const app = express();

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pacha2024',
    database: 'hackaton16'
});

// Añade los middlewares de Passport
app.use(passport.initialize());
app.use(passport.session());

console.log('http://localhost:3000/auth/google');

passport.use(new GoogleStrategy({
    clientID: '781344536012-igsb8g6j7uiamo2jmp9icfnlh4ep9u2i.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Aquí es donde guardarías el perfil del usuario en tu base de datos.
    const query = 'INSERT INTO usuarios SET ?';
    const usuario = {
      id: profile.id,
      nombre: profile.name.givenName, // Nombre de la persona
      apellido: profile.name.familyName, // Apellido de la persona
      correo: undefined, // Correo de la persona
      // Añade aquí cualquier otro dato que quieras guardar
    };

    connection.query(query, usuario, function(error, results, fields) {
      if (error) throw error;
      return cb(null, profile);
    });
  }
));

// Añade las funciones de serialización y deserialización
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Usuario autenticado exitosamente, redirigir a la página de inicio.
    console.log('Usuario autenticado exitosamente');
    res.send('INICIO EXITOSO');
  });

app.listen(3000, () => console.log('App listening on port 3000!'));
