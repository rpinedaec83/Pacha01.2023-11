const express = require("express")
const axios = require("axios")
const productModel = require("./model/Product")


const app = express();
const PORT = 3000 || 3002

app.use(express.json())


///OBTENER LISTA DE PRODUCTOS --- LINK : https://fakestoreapi.com/

let products = []

app.get("/productos" , ( req , res) => {

    config = {
        method : "get",
        maxBodyLength : Infinity,
        url : "https://fakestoreapi.com/products/",
        Headers :{}
    }


    axios.request(config).then(response => {
            const data = response.data

            for (let i = 0 ; i < data.length ; i++){

                const product = new productModel(
                    data[i].id,
                    data[i].title,
                    data[i].price,
                    data[i].image,
                )

                    products.push(product)
            }

            res.send(products)

    }).catch((error) => {
        res.status(500, send(error))
    })

})






app.listen(PORT , ()=>{
    console.log("Server is running on Port " + PORT)
})