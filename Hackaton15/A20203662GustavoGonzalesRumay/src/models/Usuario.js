import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String },
  googleId: { type: String }, // Para usuarios que se autentican via Google OAuth
  fechaCreacion: { type: Date, default: Date.now }
});

export const Usuario = mongoose.model('Usuario', usuarioSchema);
