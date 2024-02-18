const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let arrDatos = [];


app.get('/', (req, res) => {
    res.send('Hola, Hello, Salve!')
})
app.post('/usuarios/', (req, res) => {
    // let nombre = req.query.name;
    // let apellido = req.query.lname;
    try {
        let obj = req.body;
        if (obj.name === "" || obj.name === undefined) {
            res.status(400).send("El nombre no puede estar vacio")
        }
        arrDatos.push(obj);
        console.log(obj);
        console.log(obj.name)
        console.log(obj.lname);
        res.status(201).send(`Bienvenido ${obj.name} ${obj.lname}`)
    } catch (error) {
        res.status(500).send("Ha ocurrido un error");
    }
})

app.get("/usuarios/", (req, res) => {
    res.status(200).json(arrDatos);
})

app.put("/usuarios/", (req, res) => {
    res.status(202).send("Actualizado")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});