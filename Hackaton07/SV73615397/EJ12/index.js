const express = require('express');
const axios = require('axios');

const app = express();
const port = 3007;

app.get('/randomuser-api', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    const user = response.data;
    res.send(JSON.stringify(user));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});