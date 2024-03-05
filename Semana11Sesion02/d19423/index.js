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
app.get('/especies/ubicaciones',cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_especie(1,null,null,null,null);');
    res.status(200).json(
        query[0]
    );
})
app.post('/especies/crear',cors(corsOptions), async (req, res) => {
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
app.put('/especies/actualizar',cors(corsOptions), async (req, res) => {
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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})









console.log("Inicio desde nodemon");