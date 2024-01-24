const express = require("express")
const axios = require("axios")


const app = express();
const PORT = 3000 || 3002

app.use(express.json())

//Cambio de divisas a dolar -- LINK : https://www.frankfurter.app/
/*
    LISTA DE DIVISAS (ISO) -- Algunas divisas no están incluidas en la API

    Dólar estadounidense: USD
    Euro: EUR
    Yen japonés: JPY
    Libra esterlina: GBP
    Dólar australiano: AUD
    Dólar canadiense: CAD
    Franco suizo: CHF
    Corona sueca: SEK
    Corona noruega: NOK
    Real brasileño: BRL
    Yuan chino: CNY
    Rupia india: INR
    Peso mexicano: MXN
    Rublo ruso: RUB
    Lira turca: TRY
    Dólar neozelandés: NZD
    Rand sudafricano: ZAR
    Dólar singapurense: SGD
    Won surcoreano: KRW
    Dólar hongkonés: HKD
    Dólar de Singapur: SGD
    Baht tailandés: THB
    Dólar taiwanés: TWD
    Dólar de Hong Kong: HKD
    Zloty polaco: PLN
    Forint húngaro: HUF
    Franco CFA de África Occidental: XOF
    Dirham de los Emiratos Árabes Unidos: AED
    Rupia indonesia: IDR
*/

app.get("/convert/:cantidad/:divisa", (req, res) => {

    const cantidad = req.params.cantidad
    const divisa = req.params.divisa

    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://api.frankfurter.app/latest?amount=${cantidad}&from=${divisa}&to=USD`,
        Headers: {}
    }

    axios.request(config).then((response) => {
        console.log(response)
        res.send(response.data)
    }).catch((error) => {
        res.status(500, send("Error"))
    })

})


app.listen(PORT, () => {
    console.log("Server is" + PORT)
})