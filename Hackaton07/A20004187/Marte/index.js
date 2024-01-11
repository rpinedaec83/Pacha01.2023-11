const express = require('express')
require('dotenv').config()

const axios = require('axios');


const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/marte", (req,res)=>{
    let foto = req.query.foto;
    console.log(foto);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+foto+'&api_key='+process.env.APIKEY,
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