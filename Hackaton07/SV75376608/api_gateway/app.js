const express = require("express")
const axios = require("axios")
const pokemonModel = require("./models/PokemonModel")

const app = express()
const PORT = 3000 || 3002


app.use(express.json())


app.get("/pokemon/:name" , (req,res) => {

    const name = req.params.name
    
    let config = {
        method: "get",
        maxBodyLength : Infinity,
        url: `https://pokeapi.co/api/v2/pokemon/${name}`,
        Headers:{}
    }

    axios.request(config).then((response) => {
        console.log(response)

        const data = response.data

        const pokemon = new pokemonModel(
            data.name,
            data.sprites.front_default,
            data.types.map(type => { return type.type.name})
        )

        res.send(JSON.stringify(pokemon))
    }).catch((error) => {
        res.status(500, send("No se pudo encontrar el pokemon"))
    })

})

app.listen(PORT, () => {
    console.log("Server is running on Port " + PORT)
})