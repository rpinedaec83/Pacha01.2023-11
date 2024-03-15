const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
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

require("./app/routes/doctor.routes")(app);
require("./app/routes/enfermero.routes")(app);
require("./app/routes/propietario.routes")(app);
require("./app/routes/mascota.routes")(app);
require("./app/routes/procedimiento.routes")(app);
require("./app/routes/historia.routes")(app);
require("./app/routes/operacion.routes")(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

