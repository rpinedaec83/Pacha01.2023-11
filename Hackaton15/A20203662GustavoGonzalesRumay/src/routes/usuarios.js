import express from 'express';
import { Usuario } from '../models/Usuario';

const router = express.Router();

// Listar todos los usuarios
router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.render('usuarios/lista', { usuarios });
});

// Formulario para editar un usuario
router.get('/editar/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.render('usuarios/editar', { usuario });
});

// Actualizar un usuario
router.post('/actualizar/:id', async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndUpdate(id, req.body);
  res.redirect('/usuarios');
});

// Eliminar un usuario
router.get('/eliminar/:id', async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.redirect('/usuarios');
});

export default router;
