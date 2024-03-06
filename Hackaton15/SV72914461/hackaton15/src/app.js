const express = require("express");
const cors = require("cors");
// require('dotenv').config();
const app = express();
const db = require("./config/db.js")

var corsOptions = {
    origin: "*"
};
  
app.use(cors(corsOptions));
  
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/index.js'))

db.sequelize.sync().then(() => {
  console.log("Synced db.")
}).catch((error) => {
  console.log("Failed to Sync."+error)
})

const PORT = 3000 || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});