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
const port = 8000
// CRUD especie
app.get('/especies/ubicaciones', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_especie(1,null,null,null,null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/especies/crear', cors(corsOptions), async (req, res) => {
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
app.put('/especies/actualizar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let descripcion = obj.descripcion;
    let id = obj.id;
    try {
        const [query] = await connection.execute('call sp_crud_especie(3,?,null,?,1);', [descripcion, id]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/especies', cors(corsOptions), async (req, res) => {
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
// CRUD bckubigeo
app.get('/bckubigeo/cargar', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_bckubigeo(1, null, null, 1, null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/bckubigeo/crear', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let ubigeo = obj.ubigeo;
    let ubicacion = obj.ubicacion;
    try {
        const [query] = await connection.execute('call sp_crud_bckubigeo(2, ?, ?, 1, 1);', [ubigeo, ubicacion]);
        res.status(201).json(
            { "message": "creado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }

})
app.put('/bckubigeo/actualizar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let ubigeo = obj.ubigeo;
    let ubicacion = obj.ubicacion;
    try {
        const [query] = await connection.execute('call sp_crud_bckubigeo(3, ?, ?, 1, 1);', [ubigeo, ubicacion]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/bckubigeo/eliminar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let ubigeo = obj.ubigeo;
    try {
        const [query] = await connection.execute('call sp_crud_bckubigeo(4, ?, null, null, null);', [ubigeo]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
// CRUD mascota
app.get('/mascota/cargar', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_mascota(1, null, null, null, null, null, null, null, 1, null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/mascota/crear', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.id;
    let Nombre = obj.nombre;
    let fechaNacimiento = obj.fnacimiento;
    let idEspecie = obj.idespecie;
    let idRaza = obj.idraza;
    let idSexo = obj.idsexo;
    let idPropietario = obj.idpropietario;
    try {
        const [query] = await connection.execute('call sp_crud_mascota(2, ?, ?, ?, ?, ?, ?, ?, 1, 1);', [id ,Nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario]);
        res.status(201).json(
            { "message": "creado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }

})
app.put('/mascota/actualizar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.id;
    let Nombre = obj.nombre;
    let fechaNacimiento = obj.fnacimiento;
    let idEspecie = obj.idespecie;
    let idRaza = obj.idraza;
    let idSexo = obj.idsexo;
    let idPropietario = obj.idpropietario;
    try {
        const [query] = await connection.execute('call sp_crud_mascota(3, ?, ?, ?, ?, ?, ?, ?, 1, 1);', [id ,Nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/mascota/eliminar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.id;
    try {
        const [query] = await connection.execute('call sp_crud_mascota(4, ?, null, null, null, null, null, null, null, null);', [id]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
// CRUD mascota_log
app.get('/mascota_log/cargar', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_log_mascota(1, null, null, null, null, null, null, null, 1, null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/mascota_log/crear', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.id;
    let Nombre = obj.nombre;
    let fechaNacimiento = obj.fnacimiento;
    let idEspecie = obj.idespecie;
    let idRaza = obj.idraza;
    let idSexo = obj.idsexo;
    let idPropietario = obj.idpropietario;
    try {
        const [query] = await connection.execute('call sp_crud_log_mascota(2, ?, ?, ?, 1, 1, 1, 1, 1, 1);', [id ,Nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario]);
        res.status(201).json(
            { "message": "creado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }

})
app.put('/mascota_log/actualizar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.id;
    let Nombre = obj.nombre;
    let fechaNacimiento = obj.fnacimiento;
    let idEspecie = obj.idespecie;
    let idRaza = obj.idraza;
    let idSexo = obj.idsexo;
    let idPropietario = obj.idpropietario;
    try {
        const [query] = await connection.execute('call sp_crud_log_mascota(3, ?, ?, ?, 2, 2, 2, 2, 1, 1);', [id ,Nombre, fechaNacimiento, idEspecie, idRaza, idSexo, idPropietario]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/mascota_log/eliminar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let id = obj.ubigeo;
    try {
        const [query] = await connection.execute('call sp_crud_log_mascota(4, 1, null, null, null, null, null, null, null, null);', [id]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
//CRUD nacionalidad 
app.get('/nacionalidad/cargar', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('CALL sp_crud_nacionalidad(1,null, 1, null, null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/nacionalidad/crear', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let descripcion = obj.descripcion;

    try {
        const [query] = await connection.execute('call sp_crud_nacionalidad(2,?, 1, null, 1);', [descripcion]);
        res.status(201).json(
            { "message": "creado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }

})
app.put('/nacionalidad/actualizar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let descripcion = obj.descripcion;
    try {
        const [query] = await connection.execute('call sp_crud_nacionalidad(3, ?, 1, 1 , 1);', [descripcion]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/nacionalidad/eliminar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let ubigeo = obj.ubigeo;
    try {
        const [query] = await connection.execute('call sp_crud_bckubigeo(4, ?, null, null, null);', [ubigeo]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
//CRUD propietario 
//CRUD nacionalidad 
app.get('/propietario/cargar', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_propietario(1, null, null, null,null, null, null, 1, null, null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/propietario/crear', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let Nombre = obj.Nombre;
    let Apellido = obj.Apellido;
    let Direccion = obj.Direccion;
    let Telefono = obj.Telefono;
    let idNacionalidad = obj.idNacionalidad;
    let ubigeo = obj.ubigeo;
    try {
        const [query] = await connection.execute('call sp_crud_propietario(2, ?, ?, ?, ?, 1, ?, 1, null, 1);', [Nombre,Apellido,Direccion,Telefono,idNacionalidad,ubigeo]);
        res.status(201).json(
            { "message": "creado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }

})
app.put('/propietario/actualizar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let Nombre = obj.Nombre;
    let Apellido = obj.Apellido;
    let Direccion = obj.Direccion;
    let Telefono = obj.Telefono;
    let idNacionalidad = obj.idNacionalidad;
    let ubigeo = obj.ubigeo;
    try {
        const [query] = await connection.execute('call sp_crud_propietario(3, ?, ?, ?, ?, 1, ?, null, 1, 1);', [Nombre,Apellido,Direccion,Telefono,idNacionalidad,ubigeo]);
        res.status(203).json(
            { "message": "Modificado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})
app.delete('/propietario/eliminar', cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(req.body);
    let ubigeo = obj.ubigeo;
    try {
        const [query] = await connection.execute('call sp_crud_propietario(4, null, null,null,null, null, null, null, 1, null);', [id]);
        res.status(203).json(
            { "message": "Borrado" }
        );
    } catch (error) {
        console.error(error);
        res.status(500);
    }
})

// Llamar al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log("Inicio desde nodemon");