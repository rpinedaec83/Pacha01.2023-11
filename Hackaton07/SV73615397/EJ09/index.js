const express = require('express');
const axios = require('axios');

const app = express();
const port = 3003;

app.get('/fakeshop-api', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    res.send(products.map(p=>JSON.stringify(p)).join('\n'));
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});