const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const db = require("./config/db.js")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

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
app.post("/api/create-checkout-session", async (req, res) => { 
  const { product } = req.body; 
  const session = await stripe.checkout.sessions.create({ 
    payment_method_types: ["card"], 
    line_items: [ 
      { 
        price_data: { 
          currency: "pen", 
          product_data: { 
            name: product.name, 
          }, 
          unit_amount: product.price_sale * 100, 
        }, 
        quantity: product.quantity, 
      }, 
    ], 
    mode: "payment", 
    success_url: "http://localhost:8080/success", 
    cancel_url: "http://localhost:8080/cancel", 
  }); 
  res.json({ id: session.id }); 
}); 

const PORT = 8000 || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});