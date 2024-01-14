require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
            res.status(500).send('Error: No se recibió respuesta del servidor de OpenWeatherMap');
        } else {
            res.status(500).send('Error interno del servidor');
        }
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

