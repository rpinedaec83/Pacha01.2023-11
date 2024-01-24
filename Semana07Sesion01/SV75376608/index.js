
const express = require('express')
require("dotenv").config()
const app = express()
const port = process.env.PORT
app.get('/', (req, res) => {
  res.send('Hello World! I am Giovanni ndhaaa')
})

const usr = [
    {
        nombre : "Roberto",
        apellido : "Pineda"
    },
    {
        nombre : "Davis",
        apellido : "Lopez"
    }
]


app.get('/usuarios', (req, res) => {
    res.send(usr)
  })
  

app.get('/cliente', (req, res) => {
    let nombre = req.query.nombre;
    let respuesta;
    usr.forEach(element => {
        if (element.nombre == nombre){
            respuesta = element;
            res.send(respuesta)
        }
    });

  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})