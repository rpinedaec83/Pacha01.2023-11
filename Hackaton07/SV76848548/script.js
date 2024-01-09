const express = require('express')
const app = express()
const axios = require('axios');
const PORT = 3000

app.use(express.json())
require('dotenv').config()

//consulta 1 : Consultar los datos de GitHub de un usuario especifico

app.get('/github/:user', async(req, res) => {

    const user = req.params.user

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.github.com/users/${user}` ,
      Headers: {}
    }
    axios.request(config)
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.status(500).send("Hubo un error en la aplicacion")
    });
  })

//Consulta 2 : Consultar el Clima de una ciudad o ubicacion especifica

app.get("/clima", (req,res)=>{
  let apiKey = 'O9kgfKJH1tmbxbDjDycQl18hGa0VDXYP';
  let ubicacion = req.query.ubicacion;
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.tomorrow.io/v4/weather/forecast?location='+ubicacion+'&apikey='+apiKey,
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

//Consulta 3 : Consultar el tipo de cambio del dolar en Peru 

app.get("/dinero", (req,res)=>{

  let cantidad = req.params.cantidad;
  let url = `https://api.frankfurter.app/latest?${cantidad}&from=USD&to=PEN`; 
  axios.get(url, {
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicación");
  });
 });

//Consulta 4 : Consultar la lista de Pokemones actual

app.get('/pokemon', async(req, res) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`,
    Headers: {}
  }
  axios.request(config) 
  .then((response) => {
    res.send(JSON.stringify(response.data.results));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacions")
  });
})

//Consulta 5 : Consultar los poderes de un pokemon especifico

app.get('/pokemonEspecifico/:name', async(req, res) => {

  let name = req.params.name

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://pokeapi.co/api/v2/pokemon/${name}`,
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data.abilities));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 6 : Consultar los principales personajes de Rick and Morty

app.get('/rickandmorty/character', async(req, res) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://rickandmortyapi.com/api/character',
    Headers: {}
  }
  axios.request(config) 
  .then((response) => {
    res.send(JSON.stringify(response.data.results));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 7 : Consultar el detalle de cada personaje de Rick and Morty

app.get('/rickAndMorty/characters/:id', async(req, res) => {

  let id = req.params.id

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://rickandmortyapi.com/api/character/${id}`,
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 8 : Consultar el top 10 de bebidas y cocteles

app.get('/cocktails/top10', async(req, res) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic',
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data.drinks.slice(0, 10)));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 9 : Consultar un listado de productos de una tienda 

app.get('/productos', async(req, res) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://fakestoreapi.com/products',
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 10 : Consultar y traer Fotografias con un determinado tema y tamaño

app.get('/imagen', async(req, res) => {

  const keyword = req.params.keyword;
  const width = req.query.width || 400;
  const height = req.query.height || 300;
  let APIKEY = 'evBXmQEUFUUN34WiynJ6ZTdyRa69miSCVQPSjtIHJCo';
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.unsplash.com/photos/random?query=${keyword}&w=${width}&h=${height}&client_id=${APIKEY}`,
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 11 : Consultar citas famosa

app.get('/citas', async(req, res) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.quotable.io/quotes',
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data.results));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 12 : Consultar datos ficticios de un usuario

app.get('/ficticio', async(req, res) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://randomuser.me/api/',
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 13 : Consultar el top de peliculas de estreno

app.get('/peliculasEstreno', async(req, res) => {
  let APIKEYE = 'cde8d665a9a62850e33302e3959fa66d';
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEYE}`,
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 14 : Consultar el detalle de una pelicula especifica

app.get('/peliculas/:id', async(req, res) => {

  const id = req.params.id;
  let APIKEYESP = 'cde8d665a9a62850e33302e3959fa66d';
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEYESP}`,
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

// Consulta 15 : Consultar datos especificos de Marte

app.get('/datosMarte', async(req, res) => {
  let APIKEYNASA = 'wYigK4VTNGVoB4GQGcmUVXJSosQOfsKgNfH8RDS7';
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${APIKEYNASA}`,
    Headers: {}
  }
  axios.request(config)
  .then((response) => {
    res.send(JSON.stringify(response.data));
  })
  .catch((error) => {
    res.status(500).send("Hubo un error en la aplicacion")
  });
})

//Llamar al puerto
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})