const express = require('express')
require('dotenv').config()

const axios = require('axios');


const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/clima", (req,res)=>{
    let ubicacion = req.query.ubicacion;
    console.log(ubicacion);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.tomorrow.io/v4/weather/forecast?location='+ubicacion+'&apikey='+process.env.APIKEY,
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        res.send(JSON.stringify(response.data));
      })
      .catch((error) => {
        res.status(500).send("Hubo un error en la aplicacion")
      });
      
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})