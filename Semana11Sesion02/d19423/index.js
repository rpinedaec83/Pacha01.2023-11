const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 8000
app.get('/', (req, res) => {
    res.send('Hola desde Express!')
}) 
app.post('/cliente',(req, res)=>{
    let obj = req.body;
    console.log(obj)
    res.send("desde el post")
})
app.put('/cliente',(req, res)=>{
    res.send("desde el put")
})
app.delete('/cliente',(req, res)=>{
    res.send("desde el delete")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})









console.log("Inicio desde nodemon");