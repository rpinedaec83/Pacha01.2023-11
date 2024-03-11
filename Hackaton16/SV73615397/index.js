const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 
const bodyParser = require("body-parser");
require("dotenv").config(); 

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
res.sendFile(__dirname + '/paymentForm.html');
});

app.post("/pago",async (req, res) => {
    const {cantidad, precio, nombre, moneda } = req.body;
    console.log(req.body)
    console.log(`producto:{${nombre},${cantidad},${precio},${moneda}}`);
    try {
      const {cantidad, precio, nombre, moneda } = req.body;
      console.log(`producto:{${nombre},${cantidad},${precio},${moneda}}`);
      const session = await stripe.checkout.sessions.create({ 
        payment_method_types: ["card"], 
        line_items: [ 
          { 
            price_data: { 
              currency: moneda, 
              product_data: { 
                name: nombre, 
              }, 
              unit_amount: precio * 100, 
            }, 
            quantity: cantidad, 
          }, 
        ], 
        mode: "payment", 
        success_url: "http://localhost:5500/success", 
        cancel_url: "http://localhost:5500/cancel", 
      }); 
  
      res.status(200).json({ message: 'Pago procesado con éxito, session ID: '+session.id, charge });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });

app.listen(PORT,()=>{console.log(`Escuchando puerto ${PORT}...`)});