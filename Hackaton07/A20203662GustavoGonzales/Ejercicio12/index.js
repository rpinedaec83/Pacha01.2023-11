require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/randomuser', async (req, res) => {
    const url = 'https://randomuser.me/api/';

    try {
        const response = await axios.get(url);
        const userData = response.data.results[0];
        res.json({
            name: `${userData.name.first} ${userData.name.last}`,
            gender: userData.gender,
            email: userData.email,
            phone: userData.phone,
            picture: userData.picture.large
        });
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
