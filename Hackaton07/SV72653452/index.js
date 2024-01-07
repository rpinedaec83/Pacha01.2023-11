const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

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
  
  // Crear una instancia del API Gateway
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


// Agregar instancia de la clase PokemonApi al gateway
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
  
  // Agregar instancia de la clase GithubApi al gateway
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
    this.baseURL = 'https://www.frankfurter.app/latest';
  }

  async consultar(parametros) {
    try {
      const respuesta = await axios.get(`${this.baseURL}?from=USD&to=PEN`);
      const tipoCambio = respuesta.data.rates.PEN;
      return `Tipo de cambio del dólar a soles (PEN): ${tipoCambio}`;
    } catch (error) {
      return `Error al consultar el tipo de cambio: ${error.message}`;
    }
  }
}

// Agregar instancia de la clase TipoCambioApi al gateway
apiGateway.agregarApi(new TipoCambioApi());

// Ruta para la consulta del tipo de cambio en la página web
app.get('/tipo-cambio', async (req, res) => {
  const resultadoConsultaTipoCambio = await apiGateway.consultarApi('Tipo de Cambio', {});
  res.send(resultadoConsultaTipoCambio);
});










// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});