const express = require('express');
const axios  = require('axios');

const PokemonModel = require('./models/PokemonModel');

const app = express()
const PORT = 3005

app.use(express.json())

app.get('/pokemon-api-h07/:name', (req, res) => {

  const name = req.params.name

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon/${name}` ,
    Headers: {}
  }
  axios.request(config).then((response) => {
    
    // console.log(response.data)

    const data = response.data;

    const pokemon = new PokemonModel(
      data.name,
      data.sprites.front_default,
      data.types.map(type => { return type.type.name }),
      data.abilities.map(ability => {return ability.ability.name})
    )


    res.send(JSON.stringify(pokemon))

  }).catch((error) => {
    res.status(500).send('No se pudo encontrar el pokemon')
  })

  // res.send('HHola desde el servidor!')
  // res.status(400).json({error: "Error en el servidor..."})

})



app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT)
})