const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/rickymorty-api-characters/:id', async (req, res) => {
const id = req.params.id;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const character = {
      name: response.data.name,
      species: response.data.species,
      status: response.data.status,
      image: response.data.image,
    };
    res.send(JSON.stringify(character));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});