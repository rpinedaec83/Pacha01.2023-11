const express = require('express')
require('dotenv').config()

const axios = require('axios');


const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hola. Estos son personajes de Rick and Morty /RickMorty')
})

app.get("/RickMorty", (req,res)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://rickandmortyapi.com/api/character?limit=10',
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        res.status(500).send("Hubo un error en la aplicacion")
      });
      
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})