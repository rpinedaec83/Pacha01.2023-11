const express = require("express");
const axios = require("axios")
const personModelo = require("./model/Person")

const app = express();
const PORT = 3000 || 3002

app.use(express.json())


//OBTENER DATOS DE PERSONAS FALSAS -- LINK : https://randomuser.me/

app.get("/people" , (req,res) => {

    config = {
        method : "get",
        maxBodyLength : Infinity,
        url : "https://randomuser.me/api/",
        Headers : {}
    }

    axios.request(config).then(response => {
        const data = response.data.results
        console.log(data)
        const person = new personModelo(
            data[0].id.value,
            data[0].gender,
            data[0].name.first,
            data[0].name.last,
            data[0].dob.age,
            data[0].picture.large
        )

        res.send(person);

    }).catch((error) => {
        res.status(500, send(error))
    })
})



app.listen(PORT , () => {
    console.log("Server is running on Port " + PORT)
})