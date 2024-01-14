const express = require("express");
const axios = require("axios");
const coctelModel = require("./model/Coctel")

const app = express();
const PORT = 3000 || 3002

app.use(express.json());

///OBTENER 10 COCTELES  -- LINK : https://www.thecocktaildb.com/



let coctels = []
app.get("/coctel", (req, res) => {

     for (let i = 1; i <= 10; i++) {

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${i}`,
            Headers:{}
        }

        axios.request(config).then(response => {

            const data = response.data

            const coctel = new coctelModel(
                data.ingredients[0].idIngredient,
                data.ingredients[0].strIngredient,
                data.ingredients[0].strAlcohol
            )

            coctels.push(coctel);

            console.log(coctels)

            if(coctels.length == 10){
                res.send(coctels)
            }
        })
        .catch((error) => {
            res.status(500, send(error))
        })
    }
    
})

app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT)
})