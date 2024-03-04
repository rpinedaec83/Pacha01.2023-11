const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieSession({
    name:"curier-session",
    keys:["COOKIE-KEY"],
    httpOnly: true
}));

app.get("/",(req,res)=>{
    res.send("Hola mundo");
});

const db = require("./app/models");

db.objSequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{console.log("Escuchando en el puerto " + PORT);});

require("./app/routes/auth.routes")(app);
