const express = require('express');
const dbConfig = require("./config/db.config");
const db = require("./models");
var bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");

const authRouter = require('./routes/auth.routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
      name: "bezkoder-session",
      keys: ["COOKIE_SECRET"], // should use as secret environment variable
      httpOnly: true
    })
  );
  
db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
    console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
    console.error("Connection error", err);
    process.exit();
    });
app.use("/auth",authRouter);


app.listen(PORT,()=>{console.log(`Escuchando el puerto ${PORT}...`)});
