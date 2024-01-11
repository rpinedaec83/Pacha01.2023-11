const express = require('express');
const axios  = require('axios');
const app = express();
const port = 3000;
app.use(express.json())

app.get('/github-api-H07/:username', (req, res) => {
    const username = req.params.username;

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://api.github.com/users/${username}`,
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