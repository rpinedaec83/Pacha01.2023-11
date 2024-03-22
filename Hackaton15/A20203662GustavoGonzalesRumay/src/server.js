import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import usuariosRouter from './routes/usuarios';
import paquetesRouter from './routes/paquetes';
import { configureLocalStrategy } from './config/passportLocalConfig';
import { configureGoogleStrategy } from './config/passportGoogleConfig';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

configureLocalStrategy(passport);
configureGoogleStrategy(passport);

// Importar rutas
// Aquí importaremos los archivos de rutas cuando los creemos.


app.use(passport.initialize());
app.use(passport.session());
app.use('/usuarios', usuariosRouter);
app.use('/paquetes', paquetesRouter);

// Configuración de serialización y deserialización de Passport
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  Usuario.findById(id, (err, user) => done(err, user));
});



// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('No se pudo conectar a MongoDB:', error));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'mi_secreto',
  resave: false,
  saveUninitialized: true,
}));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Ruta raíz - Página principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Página Principal' });
});

// Aquí definirás más rutas...

// Servir archivos estáticos
app.use(express.static('public'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


