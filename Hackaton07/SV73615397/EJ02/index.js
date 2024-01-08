const express = require('express');
const axios  = require('axios');
const app = express();
const port = 3002;
app.use(express.json())

app.get('/clima-api-h07', (req, res) => {
    // const ciudad = req.params.ciudad;
    const apiKey = 'rkdMQPsleZFvJJjbq093QNIF1GJGLGJDQZy4oueL';
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.nasa.gov/DONKI/FLR?startDate=2011-09-19&endDate=2011-09-20&api_key=${apiKey}`,
        Headers: {}
    }

    axios.request(config).then((response) => {

    const data = response.data;

    res.send(JSON.stringify(data))

    }).catch((error) => {
    res.send(`Error: ${error.message}`);
    })
    // res.send(req.params);
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});