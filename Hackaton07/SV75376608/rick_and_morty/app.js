const express = require("express");
const axios = require("axios")
const characterModel = require("./model/Character")

const app = express()
const PORT = 3000 || 3002

app.use(express.json())

let characters = []

//Api consultando los 10 primeros personajes de Rick and Morty y sus detalles  -- LINK : https://rickandmortyapi.com/

app.get("/character", (req, res) => {

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://rickandmortyapi.com/api/character/",
        Headers: {}
    }

    axios.request(config).then(response => {
        const data = response.data

        console.log(data.results.length)
        console.log("characters", characters)

        for (let i = 0; i < data.results.length; i++) {
            if (i == 10) {
                break;
            }
            const character = new characterModel(
                data.results[i].id,
                data.results[i].name,
                data.results[i].gender,
                data.results[i].image
            )

            characters.push(character)
        }

        console.log(characters)
        res.send(JSON.stringify(characters))


    }).catch((error) => {
        res.status(500, send(error))
    })

})

app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT)
})