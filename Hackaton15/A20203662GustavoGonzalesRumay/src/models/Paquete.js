import mongoose from 'mongoose';

const paqueteSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  descripcion: { type: String, required: true },
  estadoTransito: { type: String, required: true, enum: ['En tránsito', 'Entregado'] },
  fechaCreacion: { type: Date, default: Date.now }
});

export const Paquete = mongoose.model('Paquete', paqueteSchema);
