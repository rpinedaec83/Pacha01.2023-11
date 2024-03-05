const express = require('express');
const axios  = require('axios');
const app = express();
const port = 3003;
app.use(express.json())

app.get('/currency-change-api-h07/:monto/:baseCurrency/:targetCurrency', (req, res) => {
    const baseCurrency = req.params.baseCurrency.toUpperCase();
    const targetCurrency = req.params.targetCurrency.toUpperCase();
    let monto = Number(req.params.monto);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.frankfurter.app/latest?amount=${monto}&from=${baseCurrency}&to=${targetCurrency}`,
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