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





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// CRUD para la tabla nacionalidad

app.get('/nacionalidades', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('CALL sp_crud_nacionalidad(1, null);');
        res.status(200).json(query[0]);
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

app.post('/nacionalidades', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('CALL sp_crud_nacionalidad(2, ?);', [req.body.descripcion]);
        res.status(201).json({ "message": "creado" });
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

app.put('/nacionalidades', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('CALL sp_crud_nacionalidad(3, ?, ?);', [req.body.id, req.body.descripcion]);
        res.status(203).json({ "message": "Modificado" });
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});

app.delete('/nacionalidades', cors(corsOptions), async (req, res) => {
    try {
        const [query] = await connection.execute('CALL sp_crud_nacionalidad(4, ?);', [req.body.id]);
        res.status(203).json({ "message": "Borrado" });
    } catch (error) {
        console.error(error);
        res.status(500);
    }
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})









console.log("Inicio desde nodemon");