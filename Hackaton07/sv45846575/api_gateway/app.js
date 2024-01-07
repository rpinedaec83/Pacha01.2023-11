const express = require('express');
const axios  = require('axios');
const cors = require('cors')

const PokemonModel = require('./models/PokemonModel');
const UserModel = require('./models/UserModel');

const app = express()
const PORT = 3000 || 3002

app.use(express.json())
app.use(cors())

app.get('/pokemon/:name', (req, res) => {

  const name = req.params.name

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon/${name}` ,
    Headers: {}
  }
  axios.request(config).then((response) => {
    const data = response.data;
    const pokemon = new PokemonModel(
      data.name,
      data.sprites.front_default,
      data.types.map(type => { return type.type.name })
    )
    res.send(JSON.stringify(pokemon))

  }).catch((error) => {
    res.status(500).send('No se pudo encontrar el pokemon')
  })
})

app.get('/github/:username', async(req, res) => {

  const username = req.params.username

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.github.com/users/${username}` ,
    Headers: {}
  }
  axios.request(config).then((response) => {
    const data = response.data;
  
     // console.log(data.login, data.avatar_url, data.name, data.email )

     // const email = data.email || "No email";

    const userGithub = new UserModel(
      data.login,
      data.avatar_url,
      data.name,
      data.email,
      data.location,
      data.bio
    )

    // console.log(userGithub)
    
    res.send(JSON.stringify(userGithub))

  }).catch((error) => {
    res.status(500).send('No se pudo encontrar el usuario de git.')
  })
})



app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT)
})

app.get("/clima", (req,res)=>{
  let ubicacion = req.query.ubicacion;
  console.log(ubicacion);
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.tomorrow.io/v4/weather/forecast?location='+ubicacion+'&apikey='+process.env.APIKEY,
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