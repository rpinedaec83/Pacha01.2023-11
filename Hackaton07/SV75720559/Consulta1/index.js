//metodos para usar
//const UserModel = require('./models/UserModel');
const express = require('express')
require('dotenv').config()

const axios = require('axios');
//declaracion

const app = express()
//const port = process.env.PORT
const PORT = 3000 || 3002
app.use(express.json())


//consulta 1 : Consultar los datos de GitHub de un usuario especifico

app.get('/github/:username', async(req, res) => {

    const username = req.params.username
  
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.github.com/users/${username}` ,
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
  let apiKey = '6uiWnd462ZZ8vz7p2KTPmRrBux9ypZlF';
  let ubicacion = req.query.ubicacion;
  console.log(ubicacion);

  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.tomorrow.io/v4/weather/forecast?location='+ubicacion+'&apikey='+apiKey, //para ver un lugar con su clima especifico http://localhost:3000/clima?ubicacion=-12.051300,-76.964513
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

app.get("/tipoCambio", (req,res)=>{

  let dinero = req.params.dinero;
  let url = `https://api.frankfurter.app/latest?${dinero}&from=USD&to=PEN`; 
    
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
app.get('/pokemonActual', async(req, res) => {

  //let cantidad = req.query.cantidad

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

  let name = req.params.name //para llamar el numero del pokemon especifico

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

  //Este codigo es para todos los personajes creando un arrary
  //con un for del 1 al 183 que son los persosnajes actuales
  //const personajes = [];
  // for (let i = 1; i <= 183; i++) {
  //personajes.push(i);
  // }
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    //url: `https://rickandmortyapi.com/api/character/${personajes}`, // para llamar a todos los personajes
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
app.get('/rickandmorty/characters/:id', async(req, res) => {

  let id = req.params.id //para llamar el numero del pokemon especifico

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
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
 
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
app.get('/foto', async(req, res) => {

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
// Consulta 11 : Consultar citas famosas 
app.get('/citasfamosas', async(req, res) => {

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
app.get('/usuarioFicticio', async(req, res) => {

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

  //APIKEY creada en themoviedb
  let APIKEYE = '9e5e64c28d27f5229b1770841a11d3a7';
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
  //APIKEY creada en themoviedb
  let APIKEYESP = '9e5e64c28d27f5229b1770841a11d3a7';
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
app.get('/datosEspMar', async(req, res) => {

  //APIKEY creada en NASA APIKEY
  let APIKEYNASA = 'RNesqmpVeeIXL9aJeyXD7oh6oZK3tem9Ri30e1Y4';
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
