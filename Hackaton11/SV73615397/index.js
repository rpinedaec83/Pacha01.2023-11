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
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const port = 8000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

//-----------CRUD Raza-----------

app.get('/raza',cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_raza(1,null,null,null,null);');
    res.status(200).json(
        query
    );
});

app.post('/raza',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.descripcion==='' || obj.descripcion === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_raza(2,?,null,null,1);',[obj.descripcion]);
            res.status(200).json(
                query
            );
            res.status(201).json(
                { "message": `Raza ${obj.descripcion} creada` }
            );
            console.log(`Raza ${obj.descripcion} creada`);
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.put('/raza',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.descripcion==='' || obj.descripcion === undefined || obj.idRaza === 0 || obj.idRaza === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_raza(3,?,null,?,1);',[obj.descripcion,obj.idRaza]);
            res.status(203).json(
                {"message": `Raza id ${obj.idRaza} | desc ${obj.descripcion} actualizada`}
            );
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.delete('/raza',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.idRaza === 0 || obj.idRaza === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_raza(4,null,null,?,1);',[obj.idRaza]);
            res.status(203).json(
                {"message": `Raza eliminada`}
            );
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/raza_',cors(corsOptions), async (req, res) => {
    const idRaza = req.query.idRaza;
    console.log(idRaza);
    try {
        if (!idRaza) {
            throw "ID de Raza es requerido.";
        }

        const [query] = await connection.execute('call sp_crud_raza(5, null, null, ?, null);', [idRaza]);
        res.status(200).json(query);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Error en el servidor" });
    }
});
//-------------------------------
//-----------CRUD Nacionalidad-----------

app.get('/nacionalidad',cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_nacionalidad(1,null,null,null,null);');
    res.status(200).json(
        query
    );
});

app.post('/nacionalidad',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.descripcion==='' || obj.descripcion === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_nacionalidad(2,?,null,null,1);',[obj.descripcion]);
            res.status(200).json(
                query
            );
            res.status(201).json(
                { "message": `Raza ${obj.descripcion} creada` }
            );
            console.log(`Nacionalidad ${obj.descripcion} creada`);
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.put('/nacionalidad',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.descripcion==='' || obj.descripcion === undefined || obj.idNacionalidad === 0 || obj.idNacionalidad === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_nacionalidad(3,?,null,?,1);',[obj.descripcion,obj.idNacionalidad]);
            res.status(203).json(
                {"message": `Nacionalidad id ${obj.idRaza} | desc ${obj.descripcion} actualizada`}
            );
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.delete('/nacionalidad',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.idNacionalidad === 0 || obj.idNacionalidad === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_nacionalidad(4,null,null,?,1);',[obj.idNacionalidad]);
            res.status(203).json(
                {"message": `Nacionalidad eliminada`}
            );
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/nacionalidad_',cors(corsOptions), async (req, res) => {
    const idNacionalidad = req.query.idNacionalidad;
    console.log(idNacionalidad);
    try {
        if (!idNacionalidad) {
            throw "ID de Nacionalidad es requerido.";
        }

        const [query] = await connection.execute('call sp_crud_nacionalidad(5, null, null, ?, null);', [idNacionalidad]);
        res.status(200).json(query);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Error en el servidor" });
    }
});
//-------------------------------

//-----------CRUD Ubigeo-----------

app.get('/ubigeo',cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_ubigeo(1,null,null,null,null,null);');
    res.status(200).json(
        query
    );
});

app.post('/ubigeo',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.ubigeo==='' || obj.ubigeo === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_ubigeo(2,?,?,null,null,1);',[obj.ubigeo,obj.ubicacion]);
            res.status(200).json(
                query
            );
            res.status(201).json(
                { "message": `Raza ${obj.descripcion} creada` }
            );
            console.log(`Nacionalidad ${obj.descripcion} creada`);
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.put('/ubigeo',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.ubicacion==='' || obj.ubicacion === undefined || obj.idUbigeo === 0 || obj.idUbigeo === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_ubigeo(3,?,?,null,?,1);',[obj.ubigeo,obj.ubicacion,obj.idUbigeo]);
            res.status(203).json(
                {"message": `Nacionalidad id ${obj.idRaza} | desc ${obj.descripcion} actualizada`}
            );
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.delete('/ubigeo',cors(corsOptions), async (req, res) => {
    let obj = req.body;
    console.log(obj);
    try {
        if(obj.idUbigeo === 0 || obj.idUbigeo === undefined){
            throw "Valores nulos!";
        }
        else{
            const [query] = await connection.execute('call sp_crud_ubigeo(4,null,null,null,?,1);',[obj.idUbigeo]);
            res.status(203).json(
                {"message": `Nacionalidad eliminada`}
            );
        };
    } catch (error) {
        console.error(error.message);
    }
});

app.get('/ubigeo_',cors(corsOptions), async (req, res) => {
    const idUbigeo = req.query.idUbigeo;
    console.log(idUbigeo);
    try {
        if (!idUbigeo) {
            throw "ID de Nacionalidad es requerido.";
        }

        const [query] = await connection.execute('call sp_crud_ubigeo(5, null,null, null, ?, null);', [idUbigeo]);
        res.status(200).json(query);
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Error en el servidor" });
    }
});
//-------------------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

