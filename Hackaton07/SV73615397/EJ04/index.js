const express = require('express');
const axios  = require('axios');

const PokemonModel = require('./models/PokemonModel');

const app = express()
const PORT = 3004
app.use(express.json())

app.get('/pokemons-api-h07/', (req, res) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon` ,
    Headers: {}
  }
  axios.request(config).then((response) => {

    res.send(JSON.stringify(response.data))

  }).catch((error) => {
    res.status(500).send(error.message)
  })

  // res.send('HHola desde el servidor!')
  // res.status(400).json({error: "Error en el servidor..."})

})



app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT)
})