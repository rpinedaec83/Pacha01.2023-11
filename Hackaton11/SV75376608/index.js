const express = require('express')
const body_parse = require('body-parser')
const cors = require('cors')
const connection = require('./db')
const port = 3100
const app = express()
app.use(body_parse.json())
app.use(cors())

//Cors options
var corsOptions = {
    origin: '*',
    optionSuccessStatus: 200
}

//CRUD MASCOTAS

//Get all active pets
app.get('/mascotas', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_mascotas(1,null,null,null,null,null,null,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})

//Create a pet
app.post('/mascotas', cors(corsOptions), async (req, res) => {
    let objMascota = req.body
    let nombre = objMascota.nombre
    let idEspecie = objMascota.idEspecie
    let idRaza = objMascota.idRaza
    let idSexo = objMascota.idSexo
    let idColor = objMascota.idColor
    let edad = objMascota.edad
    let idPropietario = objMascota.idPropietario
    try {
        const [query] = await connection.execute('call sp_crud_mascotas(2,?,?,?,?,?,?,?,null,null,1);', [nombre, idEspecie, idRaza, idSexo, idColor, edad, idPropietario])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})

//Update a pet
app.put('/mascotas', cors(corsOptions), async (req, res) => {
    let objMascota = req.body
    let id = objMascota.id
    let nombre = objMascota.nombre
    let idEspecie = objMascota.idEspecie
    let idRaza = objMascota.idRaza
    let idSexo = objMascota.idSexo
    let idColor = objMascota.idColor
    let edad = objMascota.edad
    let idPropietario = objMascota.idPropietario
    try {
        const [query] = await connection.execute('call sp_crud_mascotas(3,?,?,?,?,?,?,?,null,?,1);', [nombre, idEspecie, idRaza, idSexo, idColor, edad, idPropietario,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

//disable a pet
app.delete('/mascotas', cors(corsOptions), async (req, res) => {
    let objMascota = req.body
    let id = objMascota.id
    try {
        const [query] = await connection.execute('call sp_crud_mascotas(4,null,null,null,null,null,null,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})


//CRUD PARA COLORES
//Get all active colors
app.get('/colores', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_color(1,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/colores', cors(corsOptions), async (req, res) => {
    let objColor = req.body
    let detalle = objColor.detalle

    try {
        const [query] = await connection.execute('call sp_crud_color(2,?,null,null,1);', [detalle])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.put('/colores', cors(corsOptions), async (req, res) => {
    let objColor = req.body
    let id = objColor.id
    let detalle = objColor.detalle

    try {
        const [query] = await connection.execute('call sp_crud_color(3,?,null,?,1);', [detalle,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

app.delete('/colores', cors(corsOptions), async (req, res) => {
    let objColor = req.body
    let id = objColor.id

    try {
        const [query] = await connection.execute('call sp_crud_color(4,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA COLORES - FIN


//CRUD PARA RAZAS
app.get('/razas', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_razas(1,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/razas', cors(corsOptions), async (req, res) => {
    let objRaza = req.body
    let detalle = objRaza.detalle

    try {
        const [query] = await connection.execute('call sp_crud_razas(2,?,null,null,1);', [detalle])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.put('/razas', cors(corsOptions), async (req, res) => {
    let objRaza = req.body
    let id = objRaza.id
    let detalle = objRaza.detalle

    try {
        const [query] = await connection.execute('call sp_crud_razas(3,?,null,?,1);', [detalle,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

app.delete('/razas', cors(corsOptions), async (req, res) => {
    let objRaza = req.body
    let id = objRaza.id

    try {
        const [query] = await connection.execute('call sp_crud_razas(4,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA RAZAS -FIN


//CRUD PARA SEXO
app.get('/sexo', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_sexo(1,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/sexo', cors(corsOptions), async (req, res) => {
    let objSexo = req.body
    let detalle = objSexo.detalle

    try {
        const [query] = await connection.execute('call sp_crud_sexo(2,?,null,null,1);', [detalle])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.put('/sexo', cors(corsOptions), async (req, res) => {
    let objSexo = req.body
    let id = objSexo.id
    let detalle = objSexo.detalle

    try {
        const [query] = await connection.execute('call sp_crud_sexo(3,?,null,?,1);', [detalle,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

app.delete('/sexo', cors(corsOptions), async (req, res) => {
    let objSexo = req.body
    let id = objSexo.id

    try {
        const [query] = await connection.execute('call sp_crud_sexo(4,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA SEXO -FIN

//CRUD PARA TIPOIDENTI
app.get('/identificacion', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_tipoidentificacion(1,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/identificacion', cors(corsOptions), async (req, res) => {
    let objIden = req.body
    let detalle = objIden.detalle

    try {
        const [query] = await connection.execute('call sp_crud_tipoidentificacion(2,?,null,null,1);', [detalle])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.put('/identificacion', cors(corsOptions), async (req, res) => {
    let objIden = req.body
    let id = objIden.id
    let detalle = objIden.detalle

    try {
        const [query] = await connection.execute('call sp_crud_tipoidentificacion(3,?,null,?,1);', [detalle,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

app.delete('/identificacion', cors(corsOptions), async (req, res) => {
    let objIden = req.body
    let id = objIden.id

    try {
        const [query] = await connection.execute('call sp_crud_tipoidentificacion(4,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA TIPOIDENTI -FIN



//CRUD PARA PROPIETARIOS
app.get('/propietarios', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_propietarios(1,null,null,null,null,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/propietarios', cors(corsOptions), async (req, res) => {
    let objPropi = req.body
    let tipoIdenti = objPropi.idTipoIdentificacion
    let nombre = objPropi.nombre
    let apellido = objPropi.apellido
    let direccion = objPropi.direccion
    let telefono = objPropi.telefono

    try {
        const [query] = await connection.execute('call sp_crud_propietarios(2,?,?,?,?,?,null,null,1);', [tipoIdenti,nombre,apellido,direccion,telefono])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.put('/propietarios', cors(corsOptions), async (req, res) => {
    let objPropi = req.body
    let id = objPropi.id
    let tipoIdenti = objPropi.idTipoIdentificacion
    let nombre = objPropi.nombre
    let apellido = objPropi.apellido
    let direccion = objPropi.direccion
    let telefono = objPropi.telefono

    try {
        const [query] = await connection.execute('call sp_crud_propietarios(3,?,?,?,?,?,null,?,1);', [tipoIdenti,nombre,apellido,direccion,telefono,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

app.delete('/propietarios', cors(corsOptions), async (req, res) => {
    let objPropi = req.body
    let id = objPropi.id

    try {
        const [query] = await connection.execute('call sp_crud_propietarios(4,null,null,null,null,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA PROPIETARIOS -FIN


//CRUD PARA VACUNAS
app.get('/vacunas', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_vacunas(1,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/vacunas', cors(corsOptions), async (req, res) => {
    let objVacuna = req.body
    let detalle = objVacuna.detalle

    try {
        const [query] = await connection.execute('call sp_crud_vacunas(2,?,null,null,1);', [detalle])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.put('/vacunas', cors(corsOptions), async (req, res) => {
    let objVacuna = req.body
    let id = objVacuna.id
    let detalle = objVacuna.detalle

    try {
        const [query] = await connection.execute('call sp_crud_vacunas(3,?,null,?,1);', [detalle,id])
        res.status(201).json(
            { "message": "modificado" }
        )
    } catch (error) {
        console.error(error)
    }
})

app.delete('/vacunas', cors(corsOptions), async (req, res) => {
    let objVacuna = req.body
    let id = objVacuna.id

    try {
        const [query] = await connection.execute('call sp_crud_vacunas(4,null,null,?,1);', [id])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA VACUNAS -FIN


//CRUD PARA VACUNASMASCOTAS
app.get('/masco-vacuna', cors(corsOptions), async (req, res) => {
    const [query] = await connection.execute('call sp_crud_mascotavacunas(1,null,null,null,null);')
    res.status(202).json(
        query[0]
    )
})


app.post('/masco-vacuna', cors(corsOptions), async (req, res) => {
    let objMacoVacu = req.body
    let idMascota = objMacoVacu.idMascota
    let idVacuna = objMacoVacu.idVacuna

    try {
        const [query] = await connection.execute('call sp_crud_mascotavacunas(2,?,?,null,1);', [idMascota,idVacuna])
        res.status(201).json(
            { "message": "creado" }
        )
    } catch (error) {
        console.error(error)
    }
})



app.delete('/masco-vacuna', cors(corsOptions), async (req, res) => {
    let objMacoVacu = req.body
    let idMascota = objMacoVacu.idMascota
    let idVacuna = objMacoVacu.idVacuna

    try {
        const [query] = await connection.execute('call sp_crud_mascotavacunas(4,?,?,null,1);', [idMascota , idVacuna])
        res.status(201).json(
            { "message": "inactivo" }
        )
    } catch (error) {
        console.error(error)
    }
})
//CRUD PARA VACUNASMASCOTAS -FIN









app.listen(port, () => {
    console.log("La aplicacion se esta corriendo en el puerto " + port);
})
