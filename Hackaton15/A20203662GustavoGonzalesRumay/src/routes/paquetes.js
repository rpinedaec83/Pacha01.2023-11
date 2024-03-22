import express from 'express';
import { Paquete } from '../models/Paquete';

const router = express.Router();

// Listar todos los paquetes
router.get('/', async (req, res) => {
  const paquetes = await Paquete.find().populate('usuarioId');
  res.render('paquetes/lista', { paquetes });
});

// Formulario para editar un paquete
router.get('/editar/:id', async (req, res) => {
  const paquete = await Paquete.findById(req.params.id).populate('usuarioId');
  res.render('paquetes/editar', { paquete });
});

// Actualizar un paquete
router.post('/actualizar/:id', async (req, res) => {
  const { id } = req.params;
  await Paquete.findByIdAndUpdate(id, req.body);
  res.redirect('/paquetes');
});

// Eliminar un paquete
router.get('/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  await Paquete.findByIdAndDelete(id);
  res.redirect('/paquetes');
});

export default router;
