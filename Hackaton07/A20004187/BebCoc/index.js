const express = require('express')
require('dotenv').config()

const axios = require('axios');


const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hola. Esta es una lista de bebidas y cocteles /BebCoc')
})

app.get("/BebCoc", (req,res)=>{
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a',
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