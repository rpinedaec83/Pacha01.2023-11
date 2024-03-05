const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");

db.objSequelize.sync()
    .then(() => {
    console.log("Synced db.");
    })
    .catch((err) => {
    console.log("Failed to sync db: " + err.message);
    });

require('./app/routes/user.routes')(app);
require('./app/routes/curso.routes')(app);

app.listen(port,()=>{console.log(`Escuchando el puerto ${port}...`)});