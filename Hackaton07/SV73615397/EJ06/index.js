const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/rickymorty-main-characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characters = response.data.results.map(character => ({
      name: character.name,
      species: character.species,
      status: character.status,
      image: character.image,
    }));
    res.send(JSON.stringify(characters));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});