const express = require("express");
const cors = require("cors");
// require('dotenv').config();
const app = express();
const db = require("./config/db.js")

var corsOptions = {
    origin: "*"
};
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/index.js'))

db.sequelize.sync().then(() => {
  console.log("Synced db.")
}).catch((error) => {
  console.log("Failed to Sync."+error)
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});