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
  res.json({ message: "Welcome to ordenes de Compra application." });
});

require("./app/routes/usuarios.routes")(app);
require("./app/routes/cursos.routes")(app);
require("./app/routes/ordenCompra.routes")(app);
require("./app/routes/cupon.routes")(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});