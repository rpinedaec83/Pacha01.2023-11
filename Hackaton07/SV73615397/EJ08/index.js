const express = require('express');
const axios = require('axios');

const app = express();
const port = 3002;

app.get('/top-bebidas-api', async (req, res) => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic');
    const topDrinks = response.data.drinks.slice(0, 10).map(drink => ({
      name: drink.strDrink,
    }));
    res.json(topDrinks);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});