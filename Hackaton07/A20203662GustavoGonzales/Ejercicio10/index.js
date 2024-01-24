require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

app.get('/photos/:query', async (req, res) => {
    const query = req.params.query;
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${unsplashAccessKey}`;

    try {
        const response = await axios.get(url);
        const photos = response.data.results.map(photo => {
            return {
                description: photo.description || photo.alt_description,
                url: photo.urls.regular,
                photographer: photo.user.name
            };
        });
        res.json(photos);
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
