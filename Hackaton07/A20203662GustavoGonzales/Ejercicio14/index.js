require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const tmdbApiKey = process.env.TMDB_API_KEY; 

app.get('/movie/:id', async (req, res) => {
    const movieId = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmdbApiKey}&language=en-US`;

    try {
        const response = await axios.get(url);
        const movie = {
            title: response.data.title,
            overview: response.data.overview,
            releaseDate: response.data.release_date,
            genres: response.data.genres.map(genre => genre.name),
            rating: response.data.vote_average,
            poster: `https://image.tmdb.org/t/p/original${response.data.poster_path}`
        };
        res.json(movie);
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
