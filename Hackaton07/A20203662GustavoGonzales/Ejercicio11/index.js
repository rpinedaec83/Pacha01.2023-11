require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/quote', async (req, res) => {
    const url = 'https://type.fit/api/quotes';

    try {
        const response = await axios.get(url);
        const randomIndex = Math.floor(Math.random() * response.data.length);
        const quote = response.data[randomIndex];
        res.json(quote);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
            res.status(500).send('Error: No se recibió respuesta del servidor de la API');
        } else {
            res.status(500).send('Error interno del servidor');
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
