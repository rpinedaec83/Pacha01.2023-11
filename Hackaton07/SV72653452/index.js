const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;



// Ruta principal para la página de inicio
app.get('/', (req, res) => { 
  // HTML básico con enlaces a las rutas de las APIs
  const paginaInicioHTML = `
    <html>
      <head>
        <title>API Gateway</title>
      </head>
      <body>
        <h1>Bienvenido al API Gateway</h1>
        <h2>Selecciona una API:</h2>
        <ul>

          <li><a href="/consultar-github/usuario">API de GitHub</a></li>
          <li><a href="/clima">API de Clima</a></li>
          <li><a href="/tipo-cambio">API de cambio de dolar en Peru</a></li>
          <li><a href="/consultar-pokemon">API de todos los Pokémon</a></li>
          <li><a href="/consultar-pokemon/scyther">API de detalles de Pokémon</a></li>
          <li><a href="/personajes-rick-morty">API de principales personajes de Rick and Morty  </a></li>
          <li><a href="/detalle-personaje-rick-morty/1">API de detalles de personajes de Rick and Morty </a></li>
          <li><a href="/consultar-top-10-cocteles">API de top 10 de bebidas y cocteles</a></li>
          <li><a href="/listado-productos-tienda">API de listado de productos de una tienda</a></li>
          <li><a href="/consultar-fotografias">API de Fotografias con un determinado tema y tamaño (para cambiar tamaño:?tamaño=1)</a></li>
          <li><a href="/consultar-cita-famosa">API de citas famosas </a></li>
          <li><a href="/consultar-datos-ficticios-usuario">API de datos ficticios de un usuario</a></li>
          <li><a href="/consultar-top-peliculas-estreno">API de top peliculas de estreno</a></li>
          <li><a href="/consultar-detalle-pelicula/2">API de detalle de una pelicula especifica(para cambiar a otra pelicula en especifico, cambiar id)</a></li>
          <li><a href="/consultar-datos-marte">API de datos especificos de Marte</a></li>
          
          
          <!-- Agrega más enlaces para otras APIs -->
        </ul>
      </body>
    </html>
  `;

  // Enviar la página HTML al navegador
  res.send(paginaInicioHTML);
});













// Clase base para representar una API
class Api {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Método para realizar la consulta específica de la API
  async consultar(parametros) {
    // Implementar la lógica de consulta específica para cada API
    return `Consulta a la API ${this.nombre} con parámetros: ${JSON.stringify(parametros)}`;
  }
}

// Clase principal para el API Gateway
class ApiGateway {
    constructor() {
      this.apis = [];
    }
  
    // Método para agregar nuevas APIs al gateway
    agregarApi(api) {
      this.apis.push(api);
    }
  
    // Método para realizar consultas a APIs disponibles
    async consultarApi(nombreApi, parametros) {
      const apiEncontrada = this.apis.find(api => api.nombre === nombreApi);
  
      if (apiEncontrada) {
        return await apiEncontrada.consultar(parametros);
      } else {
        return `API no encontrada: ${nombreApi}`;
      }
    }
  }
  
  //  instancia del API Gateway
  const apiGateway = new ApiGateway();
  





// Clase específica para la API de Pokemones
class PokemonApi extends Api {
  constructor() {
    super('Pokémon');
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async consultar(parametros) {
    try {
      if (parametros.nombre) {
        // Consultar detalles de un Pokémon específico
        const respuesta = await axios.get(`${this.baseURL}${parametros.nombre}`);
        const datosPokemon = respuesta.data;
        return `Datos del Pokémon ${parametros.nombre}: ${JSON.stringify(datosPokemon)}`;
      } else {
        // Consultar la lista completa de todos los Pokémon con paginación
        const listaPokemon = await this.obtenerListaCompleta();
        return `Lista de todos los Pokémon: ${listaPokemon.join(', ')}`;
      }
    } catch (error) {
      return `Error al consultar la API de Pokémon: ${error.message}`;
    }
  }

  async obtenerListaCompleta() {
    let listaPokemon = [];
    let pagina = 1;
    let tieneResultados = true;

    while (tieneResultados) {
      const respuesta = await axios.get(`${this.baseURL}?offset=${(pagina - 1) * 20}&limit=20`);
      const resultados = respuesta.data.results;

      if (resultados.length === 0) {
        tieneResultados = false;
      } else {
        listaPokemon = listaPokemon.concat(resultados.map(pokemon => pokemon.name));
        pagina++;
      }
    }

    return listaPokemon;
  }
}


// Ruta para la consulta de Pokémon en la página web
app.get('/consultar-pokemon/:nombre?', async (req, res) => {
    const nombrePokemon = req.params.nombre;
    const resultadoConsultaPokemon = await apiGateway.consultarApi('Pokémon', { nombre: nombrePokemon });
    res.send(resultadoConsultaPokemon);
  });
  
  // Ruta para la consulta de la lista de todos los Pokémon
  app.get('/lista-pokemones', async (req, res) => {
    const resultadoConsultaListaPokemon = await apiGateway.consultarApi('Pokémon', {});
    res.send(resultadoConsultaListaPokemon);
  });


//  instancia de la clase PokemonApi al gateway
apiGateway.agregarApi(new PokemonApi());





// Ruta  para la consulta de clima
app.get('/clima', async (req, res) => {
  const ubicacion = req.query.ubicacion;
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://api.tomorrow.io/v4/weather/forecast?location=${ubicacion}&apikey=${process.env.APIKEY}`,
    headers: {},
  };

  try {
    const response = await axios.request(config);
    res.send(JSON.stringify(response.data));
  } catch (error) {
    res.status(500).send("Hubo un error en la aplicación");
  }
});









// Clase específica para la API de GitHub
class GithubApi extends Api {
    constructor() {
      super('GitHub');
      this.baseURL = 'https://api.github.com/users/';
    }
  
    async consultar(parametros) {
      try {
        const respuesta = await axios.get(`${this.baseURL}${parametros.usuario}`);
        const datosUsuario = respuesta.data;
        return `Datos de GitHub para el usuario ${parametros.usuario}: ${JSON.stringify(datosUsuario)}`;
      } catch (error) {
        return `Error al consultar la API de GitHub: ${error.message}`;
      }
    }
  }
  
  //  instancia de la clase GithubApi al gateway
  apiGateway.agregarApi(new GithubApi());
  
  // Ruta para la consulta de datos de GitHub en la página web
  app.get('/consultar-github/:usuario', async (req, res) => {
    const nombreUsuario = req.params.usuario;
    const resultadoConsultaGithub = await apiGateway.consultarApi('GitHub', { usuario: nombreUsuario });
    res.send(resultadoConsultaGithub);
  });









// Clase específica para la API de Tipo de Cambio
class TipoCambioApi extends Api {
  constructor() {
    super('Tipo de Cambio');
    this.baseURL = 'https://api.exchangerate-api.com/v4/latest/USD';
  }

  async consultar() {
    try {
      const respuesta = await axios.get(this.baseURL);
      const tipoCambio = respuesta.data.rates.PEN;
      return `Tipo de cambio del dólar a soles (PEN): ${tipoCambio}`;
    } catch (error) {
      return `Error al consultar el tipo de cambio: ${error.message}`;
    }
  }
}

//  instancia de la clase TipoCambioApi al gateway
apiGateway.agregarApi(new TipoCambioApi());

// Ruta para la consulta del tipo de cambio en la página web
app.get('/tipo-cambio', async (req, res) => {
  const resultadoConsultaTipoCambio = await apiGateway.consultarApi('Tipo de Cambio');
  res.send(resultadoConsultaTipoCambio);
});









// Clase específica para la API de Rick and Morty
class RickAndMortyApi extends Api {
  constructor() {
    super('Rick and Morty');
    this.baseURL = 'https://rickandmortyapi.com/api/character';
  }

  async consultar() {
    try {
      const respuesta = await axios.get(this.baseURL);
      const personajes = respuesta.data.results.map(personaje => personaje.name);
      return `Principales personajes de Rick and Morty: ${personajes.join(', ')}`;
    } catch (error) {
      return `Error al consultar los personajes de Rick and Morty: ${error.message}`;
    }
  }
}

//  instancia de la clase RickAndMortyApi al gateway
apiGateway.agregarApi(new RickAndMortyApi());

// Ruta para la consulta de personajes de Rick and Morty en la página web
app.get('/personajes-rick-morty', async (req, res) => {
  const resultadoConsultaRickAndMorty = await apiGateway.consultarApi('Rick and Morty');
  res.send(resultadoConsultaRickAndMorty);
});





// Clase específica para la API de Rick and Morty (detalles de personaje)
class RickAndMortyDetalleApi extends Api {
  constructor() {
    super('Rick and Morty Detalle');
    this.baseURL = 'https://rickandmortyapi.com/api/character/';
  }

  async consultar(parametros) {
    try {
      const idPersonaje = parametros.id;
      const respuesta = await axios.get(`${this.baseURL}${idPersonaje}`);
      const detallePersonaje = respuesta.data;
      return `Detalle del personaje de Rick and Morty (ID ${idPersonaje}): ${JSON.stringify(detallePersonaje)}`;
    } catch (error) {
      return `Error al consultar el detalle del personaje de Rick and Morty: ${error.message}`;
    }
  }
}

//  instancia de la clase RickAndMortyDetalleApi al gateway
apiGateway.agregarApi(new RickAndMortyDetalleApi());

// Ruta para la consulta del detalle de personajes de Rick and Morty en la página web
app.get('/detalle-personaje-rick-morty/:id', async (req, res) => {
  const idPersonaje = req.params.id;
  const resultadoConsultaDetalleRickAndMorty = await apiGateway.consultarApi('Rick and Morty Detalle', { id: idPersonaje });
  res.send(resultadoConsultaDetalleRickAndMorty);
});










// Clase específica para la API de Bebidas y Cócteles
class CoctelesApi {
  constructor() {
    this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';
  }

  async consultarTop10Cocteles() {
    try {
      const respuesta = await axios.get(`${this.baseURL}/filter.php?a=Alcoholic`);
      const cocteles = respuesta.data.drinks.slice(0, 10); // Obtener los primeros 10 cocteles
      const listadoCocteles = cocteles.map(coctel => coctel.strDrink);

      return `Top 10 bebidas y cócteles alcohólicos:
        ${listadoCocteles.join('\n')}`;
    } catch (error) {
      return `Error al consultar el top 10 de bebidas y cócteles: ${error.message}`;
    }
  }
}


const coctelesApi = new CoctelesApi();

// Ruta para la consulta del top 10 de bebidas y cócteles 
app.get('/consultar-top-10-cocteles', async (req, res) => {
  const resultadoConsultaTop10Cocteles = await coctelesApi.consultarTop10Cocteles();
  res.send(resultadoConsultaTop10Cocteles);
});









// Clase específica para la API de la Tienda
class TiendaApi {
  constructor() {
    this.baseURL = 'https://fakestoreapi.com';
  }

  async consultarListadoProductos() {
    try {
      const respuesta = await axios.get(`${this.baseURL}/products`);
      const listadoProductos = respuesta.data.map(producto => producto.title);
      return `Listado de productos de la tienda: ${listadoProductos.join(', ')}`;
    } catch (error) {
      return `Error al consultar el listado de productos de la tienda: ${error.message}`;
    }
  }
}


const tiendaApi = new TiendaApi();

// Ruta para la consulta del listado de productos de la tienda 
app.get('/listado-productos-tienda', async (req, res) => {
  const resultadoConsultaListadoProductos = await tiendaApi.consultarListadoProductos();
  res.send(resultadoConsultaListadoProductos);
});










// Clase específica para la API de Unsplash
class UnsplashApi {
  constructor() {
    this.baseURL = 'https://api.unsplash.com';
    this.accessKey = process.env.UNSPLASH_ACCESS_KEY;
  }

  async consultarFotografias(tema, tamaño) {
    try {
      const respuesta = await axios.get(`${this.baseURL}/photos/random`, {
        params: {
          query: tema,
          orientation: 'landscape', // Puedes ajustar esto según tus preferencias
          client_id: this.accessKey,
          count: tamaño,
        },
      });

      const fotografias = respuesta.data.map(foto => foto.urls.full);
      return `Fotografías de ${tema} (tamaño: ${tamaño}): ${fotografias.join(', ')}`;
    } catch (error) {
      return `Error al consultar fotografías: ${error.message}`;
    }
  }
}


const unsplashApi = new UnsplashApi();

// Ruta para la consulta de fotografías 
app.get('/consultar-fotografias', async (req, res) => {
  const tema = req.query.tema || 'landscape'; // Tema por defecto si no se proporciona
  const tamaño = req.query.tamaño || 3; // Tamaño por defecto si no se proporciona

  const resultadoConsultaFotografias = await unsplashApi.consultarFotografias(tema, tamaño);
  res.send(resultadoConsultaFotografias);
});









// Clase específica para la API de Citas
class CitasApi {
  constructor() {
    this.baseURL = 'https://api.quotable.io';
  }

  async consultarCitaFamosa() {
    try {
      const respuesta = await axios.get(`${this.baseURL}/random`);
      const cita = respuesta.data.content;
      const autor = respuesta.data.author;
      return `Cita famosa: "${cita}" - ${autor}`;
    } catch (error) {
      return `Error al consultar citas famosas: ${error.message}`;
    }
  }
}


const citasApi = new CitasApi();

// Ruta para la consulta de citas famosas 
app.get('/consultar-cita-famosa', async (req, res) => {
  const resultadoConsultaCitaFamosa = await citasApi.consultarCitaFamosa();
  res.send(resultadoConsultaCitaFamosa);
});









// Clase específica para la API de Datos Ficticios de Usuario
class UsuarioFicticioApi {
  constructor() {
    this.baseURL = 'https://randomuser.me/api';
  }

  async consultarDatosFicticiosUsuario() {
    try {
      const respuesta = await axios.get(`${this.baseURL}`);
      const usuario = respuesta.data.results[0];
      const nombre = `${usuario.name.first} ${usuario.name.last}`;
      const correo = usuario.email;
      const ciudad = usuario.location.city;
      return `Datos ficticios del usuario:
        Nombre: ${nombre}
        Correo: ${correo}
        Ciudad: ${ciudad}`;
    } catch (error) {
      return `Error al consultar datos ficticios del usuario: ${error.message}`;
    }
  }
}


const usuarioFicticioApi = new UsuarioFicticioApi();

// Ruta para la consulta de datos ficticios de un usuario 
app.get('/consultar-datos-ficticios-usuario', async (req, res) => {
  const resultadoConsultaDatosFicticiosUsuario = await usuarioFicticioApi.consultarDatosFicticiosUsuario();
  res.send(resultadoConsultaDatosFicticiosUsuario);
});











// Clase específica para la API de Películas
class PeliculasApi {
  constructor() {
    this.apiKey = process.env.TMDB_API_KEY; // Cambié el nombre a 'apiKey' para ser consistente
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  async consultarTopPeliculasEstreno() {
    try {
      const respuesta = await axios.get(`${this.baseURL}/movie/top_rated`, {
        params: {
          api_key: this.apiKey,
        },
      });

      const peliculas = respuesta.data.results.slice(0, 5); // Obtener las primeras 5 películas
      const listadoPeliculas = peliculas.map(pelicula => pelicula.title);
      
      return `Top 5 películas de estreno:\n${listadoPeliculas.join('\n')}`;
    } catch (error) {
      return `Error al consultar el top de películas de estreno: ${error.message}`;
    }
  }




  async consultarDetallePelicula(idPelicula) {
    try {
      const respuesta = await axios.get(`${this.baseURL}/movie/${idPelicula}`, {
        params: {
          api_key: this.apiKey,
        },
      });

      const pelicula = respuesta.data;
      
      const detallePelicula = `Detalle de la película:
        Título: ${pelicula.title}
        Descripción: ${pelicula.overview}
        Fecha de lanzamiento: ${pelicula.release_date}
        Puntuación: ${pelicula.vote_average}
        Géneros: ${pelicula.genres.map(genre => genre.name).join(', ')}`;

      return detallePelicula;
    } catch (error) {
      return `Error al consultar el detalle de la película: ${error.message}`;
    }
  }


}

const peliculasApi = new PeliculasApi();

// Ruta para la consulta del top de películas de estreno 
app.get('/consultar-top-peliculas-estreno', async (req, res) => {
  const resultadoConsultaTopPeliculasEstreno = await peliculasApi.consultarTopPeliculasEstreno();
  res.send(resultadoConsultaTopPeliculasEstreno);
});


// Ruta para la consulta del detalle de una película 
app.get('/consultar-detalle-pelicula/:idPelicula', async (req, res) => {
  const idPelicula = req.params.idPelicula;
  const resultadoConsultaDetallePelicula = await peliculasApi.consultarDetallePelicula(idPelicula);
  res.send(resultadoConsultaDetallePelicula);
});








// Clase específica para la API de Marte
class MarteApi {
  constructor() {
    this.apiKey = process.env.NASA_API_KEY; // Asegúrate de tener la clave de API de la NASA configurada en tu archivo .env
    this.baseURL = 'https://api.nasa.gov/insight_weather/';
  }

  async consultarDatosMarte() {
    try {
      const respuesta = await axios.get(`${this.baseURL}?api_key=${this.apiKey}&feedtype=json&ver=1.0`);
      const datosMarte = respuesta.data;

      // Aquí puedes procesar y extraer la información específica de Marte según tus necesidades
      // En este ejemplo, simplemente devolvemos la respuesta completa
      return `Datos específicos de Marte:\n${JSON.stringify(datosMarte, null, 2)}`;
    } catch (error) {
      return `Error al consultar datos específicos de Marte: ${error.message}`;
    }
  }
}


const marteApi = new MarteApi();

// Ruta para la consulta de datos específicos de Marte 
app.get('/consultar-datos-marte', async (req, res) => {
  const resultadoConsultaDatosMarte = await marteApi.consultarDatosMarte();
  res.send(resultadoConsultaDatosMarte);
});





// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});