const express = require('express');
const app = express();
var cors = require('cors')


app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const connection = require("./db");
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}




/*CRUD PARA TABLA ESPECIE*/ 
const port = 8000
app.get('/especies',cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_especie(1,null,null,null,null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/especies',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let descripcion = obj.descripcion;
    try {
        const [query] = await connection.execute('call sp_crud_especie(2,?,null,null,1);', [descripcion]);
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
        const [query] = await connection.execute('call sp_crud_especie(3,?,null,?,1);', [descripcion,id]);
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
        const [query] = await connection.execute('call sp_crud_especie(4,null,null,?,1);', [id]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
/**/ 

// CRUD para la tabla mascota

app.get('/mascotas', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('CALL sp_crud_mascota(1, null, null, null, null, null, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/mascotas', cors(corsOptions), async (req, res) => {
    const { nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_mascota(2, ?, ?, ?, ?, ?, ?, ?, null, 1);', [nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/mascotas', cors(corsOptions), async (req, res) => {
    const { id, nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_mascota(3, ?, ?, ?, ?, ?, ?, ?, ?, 1);', [nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario, activo, id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.delete('/mascotas', cors(corsOptions), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_mascota(4, null, null, null, null, null, null, null, ?, 1);', [id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


// CRUD para la tabla nacionalidad
app.get('/nacionalidades', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_nacionalidad(1, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/nacionalidades', cors(corsOptions), async (req, res) => {
    const { descripcion, activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_nacionalidad(2, ?, ?, null, 1);', [descripcion, activo]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/nacionalidades', cors(corsOptions), async (req, res) => {
    const { id, descripcion } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_nacionalidad(3, ?, null, null, ?);', [descripcion, id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


app.delete('/nacionalidades', cors(corsOptions), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_nacionalidad(4, null, null, ?, 1);', [id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});



// CRUD para la tabla propietario

app.get('/propietarios', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_propietario(1, null, null, null, null, null, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

app.post('/propietarios', cors(corsOptions), async (req, res) => {
    const { nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_propietario(2, ?, ?, ?, ?, ?, ?, ?, null, 1);', [nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/propietarios', cors(corsOptions), async (req, res) => {
    const {  nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo,id } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_propietario(3, ?, ?, ?, ?, ?, ?, ?, ?, null);', [nombre, apellido, direccion, telefono, idNacionalidad, cedula, activo, id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.delete('/propietarios', cors(corsOptions), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_propietario(4, null, null, null, null, null, null, null, ?, 1);', [id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});



// CRUD para la tabla raza
app.get('/razas', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_raza(1, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/razas', cors(corsOptions), async (req, res) => {
    const { descripcion, activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_raza(2, ?, ?, null, 1);', [descripcion, activo]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/razas', cors(corsOptions), async (req, res) => {
    const {  id,descripcion,activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_raza(3, ?, ?, ?, null);', [descripcion,activo,id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


app.delete('/razas', cors(corsOptions), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_raza(4, null, null, ?, 1);', [id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});




// CRUD para la tabla sexo
app.get('/sexos', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_sexo(1, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/sexos', cors(corsOptions), async (req, res) => {
    const { descripcion, activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_sexo(2, ?, ?, null, 1);', [descripcion, activo]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/sexos', cors(corsOptions), async (req, res) => {
    const {  id,descripcion,activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_sexo(3, ?, ?, ?, null);', [descripcion,activo,id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


app.delete('/sexos', cors(corsOptions), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_sexo(4, null, null, ?, 1);', [id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});






// CRUD para la tabla ubigeo
app.get('/ubigeos', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_ubigeo(1, null, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/ubigeos', cors(corsOptions), async (req, res) => {
    const { ubigeo, ubicacion, activo, usuario } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_ubigeo(2, ?, ?, ?, null, ?);', [ubigeo, ubicacion, activo, usuario]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/ubigeos', cors(corsOptions), async (req, res) => {
    const { ubigeo, ubicacion, activo, usuario  } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_ubigeo(3, ?, ?, ?, null, ?);', [ubigeo, ubicacion, activo, usuario]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


app.delete('/ubigeos', cors(corsOptions), async (req, res) => {
    const { ubigeo } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_ubigeo(4,?, null, null, null, null);', [ubigeo]);
        res.status(204).json({ "message": "Eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});





// CRUD para la tabla usuario
app.get('/usuarios', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_usuario(1, null, null, null, null, null, null, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/usuarios', cors(), async (req, res) => {
    const { username, email, nombre, apellido, edad } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_usuario(2, ?, ?, ?, ?, null, null, ?, true, null, 1);', [username, email, nombre, apellido, edad]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/usuarios', cors(), async (req, res) => {
    const { id, username, email, nombre, apellido, edad } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_usuario(3, ?, ?, ?, ?, null, null, ?, true, ?, 1);', [username, email, nombre, apellido, edad, id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


app.delete('/usuarios', cors(corsOptions), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_usuario(4, null, null, null, null, null, null, null, null, ?, 1);', [id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});





// CRUD para la tabla vacuna
app.get('/vacunas', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('call sp_crud_vacunas(1, null, null, null, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.post('/vacunas', cors(corsOptions), async (req, res) => {
    const { descripcion, activo } = req.body;
    try {
        const [query] = await connection.execute('call sp_crud_vacunas(2, ?, ?, null, 1);', [descripcion, activo]);
        res.status(201).json({ "message": "Creado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});

app.put('/vacunas', cors(), async (req, res) => {
    const { id, descripcion, activo } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_vacunas(3, ?, ?, ?, 1);', [descripcion, activo, id]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});


app.delete('/vacunas', cors(), async (req, res) => {
    const { id } = req.body;
    try {
        const [query] = await connection.execute('CALL sp_crud_vacunas(4, null, null, ?, 1);', [id]);
        res.status(204).json({ "message": "Eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" });
    }
});







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});



console.log("Inicio desde nodemon");