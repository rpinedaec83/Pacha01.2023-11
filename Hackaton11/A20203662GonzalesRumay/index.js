const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const connection = require('./db');
var cors = require('cors');

app.use(cors());
const bodyParser = require('body-parser');
const { throws } = require('assert');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
};

const port = 8000

//VACUNAS
app.get('/vacunas', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_vacunas(1, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No Leido" });
  }
});

app.post('/vacunas', cors(corsOptions), async (req, res) => {
  const { descripcion, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_vacunas(2, "Vacuna contra la rabia", 1, NULL, 1);', [descripcion, activo]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No Creado" });
  }
});

app.put('/vacunas', cors(), async (req, res) => {
  const { id, descripcion, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_vacunas(3, "Vacuna Quintuple", 1, 2, 1);', [descripcion, activo, id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No Modificado" });
  }
});


app.delete('/vacunas', cors(), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_vacunas(4, NULL, NULL, 3, 1);', [id]);
      res.status(204).json({ "message": "Eliminado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No Eliminado" });
  }
});

//USUARIOS
app.get('/usuarios', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_usuario(1, NULL, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No leido" });
  }
});

app.post('/usuarios', cors(), async (req, res) => {
  const { username, email, nombre, apellido, edad } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_usuario(2, "Juan Perez", "juanperez@eyahoo.com", NULL, NULL, 1);', [username, email, nombre, apellido, edad]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/usuarios', cors(), async (req, res) => {
  const { id, username, email, nombre, apellido, edad } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_usuario(3, "Juan Perez. Actualizado", "juanperez345@gmail.com", 1, 3, 1);', [username, email, nombre, apellido, edad, id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});


app.delete('/usuarios', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_usuario(4, NULL, NULL, 0, 3, 1);', [id]);
      res.status(203).json({ "message": "Borrado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No eliminado" });
  }
});

//UBIGEO
app.get('/ubigeos', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_ubigeo(1, NULL, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No leido" });
  }
});

app.post('/ubigeos', cors(corsOptions), async (req, res) => {
  const { ubigeo, ubicacion, activo, usuario } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_ubigeo(2, "150101", "Lima Centro", NULL, NULL, 1);', [ubigeo, ubicacion, activo, usuario]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/ubigeos', cors(corsOptions), async (req, res) => {
  const { ubigeo, ubicacion, activo, usuario  } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_ubigeo(3, NULL, "Lima Provincias", 1, 2, 1);', [ubigeo, ubicacion, activo, usuario]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});


app.delete('/ubigeos', cors(corsOptions), async (req, res) => {
  const { ubigeo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_ubigeo(4, NULL, NULL, NULL, 3, 1);', [ubigeo]);
      res.status(204).json({ "message": "Eliminado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No borrado" });
  }
});

//SEXO
app.get('/sexos', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_sexo(1, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No leido" });
  }
});

app.post('/sexos', cors(corsOptions), async (req, res) => {
  const { descripcion, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_sexo(2, "Macho", NULL, NULL, 1);', [descripcion, activo]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/sexos', cors(corsOptions), async (req, res) => {
  const {  id,descripcion,activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_sexo(3, "Hembra", 1, 3, 1);', [descripcion,activo,id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});


app.delete('/sexos', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_sexo(4, NULL, 0, 3, 1);', [id]);
      res.status(203).json({ "message": "Borrado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No eliminado" });
  }
});

//RAZA
app.get('/razas', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_raza(1, NULL, NULL, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No leido" });
  }
});

app.post('/razas', cors(corsOptions), async (req, res) => {
  const { descripcion, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_raza(2, "Labrador Retriever", 1, "Descripción de Labrador Retriever", NULL, NULL, 1);', [descripcion, activo]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/razas', cors(corsOptions), async (req, res) => {
  const {  id,descripcion,activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_raza(3, "Golden Retriever", 1, "Descripción del Golden Retriever", 1, 2, 1);', [descripcion,activo,id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});


app.delete('/razas', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_raza(4, NULL, NULL, NULL, 0, 3, 1);', [id]);
      res.status(203).json({ "message": "Borrado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No borrado" });
  }
});


//PROPIETARIO
app.get('/propietarios', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_propietario(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500);
  }
});

app.post('/propietarios', cors(corsOptions), async (req, res) => {
  const { nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_propietario(2, "Juan Pérez", 2Calle Faisanes 123", "555-1234", "juanperez@eyahoo.com2, NULL, NULL, 1);', [nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/propietarios', cors(corsOptions), async (req, res) => {
  const {  nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo,id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_propietario(3, "Juan Pérez. Actualizado", "Calle Real 456", "555-5678", "juanperez@eyahoo.com", 1, 3, 1);', [nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo, id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});

app.delete('/propietarios', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_propietario(4, NULL, NULL, NULL, NULL, 0, 3, 1);', [id]);
      res.status(203).json({ "message": "Borrado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No eliminado" });
  }
});


//NACIONALIDAD
app.get('/nacionalidades', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_nacionalidad(1, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No leido" });
  }
});

app.post('/nacionalidades', cors(corsOptions), async (req, res) => {
  const { descripcion, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_nacionalidad(2, "Española", NULL, NULL, 1);', [descripcion, activo]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/nacionalidades', cors(corsOptions), async (req, res) => {
  const { id, descripcion } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_nacionalidad(3, "Mexicana", 1, 3, 1);', [descripcion, id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});


app.delete('/nacionalidades', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_nacionalidad(4, NULL, 0, 3, 1);', [id]);
      res.status(203).json({ "message": "Borrado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No eliminado" });
  }
});

//Mascota
app.get('/mascotas', cors(corsOptions), async (req, res) => {
  try {
      const [query] = await connection.execute('CALL sp_crud_mascota(1, NULL, NULL, NULL, NULL, NULL, NULL);');
      res.status(200).json(query[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No leido" });
  }
});

app.post('/mascotas', cors(corsOptions), async (req, res) => {
  const { nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_mascota(2, "Cabra", 1, 2, 1, NULL, 1);', [nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo]);
      res.status(201).json({ "message": "Creado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No creado" });
  }
});

app.put('/mascotas', cors(corsOptions), async (req, res) => {
  const { id, nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_mascota(3, "Borrego", 1, 2, 1, 9, 1);', [nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo, id]);
      res.status(203).json({ "message": "Modificado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No modificado" });
  }
});

app.delete('/mascotas', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  try {
      const [query] = await connection.execute('CALL sp_crud_mascota(4, NULL, NULL, NULL, 0, 9, 1);', [id]);
      res.status(203).json({ "message": "Borrado" });
  } catch (error) {
      console.error(error);
      res.status(500).json({ "error": "No borrado" });
  }
});


//ESPECIE
app.get('/especies',cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('CALL sp_crud_especie(1, NULL, NULL, NULL, NULL);');
    res.status(200).json(
        query[0]
    );
})
app.post('/especies',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let descripcion = obj.descripcion;
    try {
        const [query] = await connection.execute('CALL sp_crud_especie(2, "Felis catus", NULL, NULL, 1);', [descripcion]);
        res.status(201).json(
            { "message": "creado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.put('/especies',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let descripcion = obj.descripcion;
    let id = obj.id;
    try {
        const [query] = await connection.execute('CALL sp_crud_especie(3, "Canis lupus", 1, 2, 1);', [descripcion,id]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/especies',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.id;
    try {
        const [query] = await connection.execute('CALL sp_crud_especie(4, NULL, NULL, 3, 1);', [id]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
console.log("Inicio desde nodemon");