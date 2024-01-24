require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const tmdbApiKey = process.env.TMDB_API_KEY; 

app.get('/movies/top', async (req, res) => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${tmdbApiKey}&language=en-US&page=1`;

    try {
        const response = await axios.get(url);
        const topMovies = response.data.results.map(movie => {
            return {
                title: movie.title,
                overview: movie.overview,
                releaseDate: movie.release_date,
                rating: movie.vote_average,
                poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`
            };
        });
        res.json(topMovies);
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
