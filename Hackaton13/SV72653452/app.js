const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();


// Importar las rutas de usuario
const userRoutes = require('./routes/userRoutes');


var corsOptions = {
    origin: "*"
};
  
app.use(cors(corsOptions));


// Utilizar las rutas de usuario en la aplicación
app.use('/api/users', userRoutes);
  
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to veterinaria application." });
});

require("./app/routes/cursos.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
