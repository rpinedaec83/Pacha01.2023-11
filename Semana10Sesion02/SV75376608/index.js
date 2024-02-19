console.log("Working with nodemon")
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);



async function run() {
    try {
        await client.connect();
        const db = client.db('sample_mflix');
        const collection = db.collection('movies');

        // Find the first document in the collection
        const first = await collection.findOne();
        console.log(first);
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}

//run().catch(console.error)


async function crud(base, colleccion, action, opciones = null, data = null) {
    try {
        await client.connect();
        const db = client.db(base);
        const collection = db.collection(colleccion);
        let respuesta = null

        switch (action) {
            case "leerUno":
                if (opciones !== null) {
                    // Find the first document in the collection with its option
                    respuesta = await collection.findOne(opciones);
                } else {
                    // Find the first document in the collection 
                    respuesta = await collection.findOne();
                }

                break;
            case "leerTodos":

                if (opciones !== null) {
                    respuesta = await collection.find(opciones).toArray();
                } else {
                    respuesta = await collection.find().toArray();
                }

                break;

            case "agregarUno":
                if (opciones !== null) {
                    respuesta = await collection.insertOne(opciones)
                } else {
                    respuesta = "No se puede agregar "
                }
                break;
            case "agregarVarios":
                if (opciones !== null) {
                    respuesta = await collection.insertMany(opciones)
                } else {
                    respuesta = "No se puede agregar "
                }
                break;
            case "actualizarUno":
                if (opciones !== null) {
                    respuesta = await collection.updateOne(opciones, data)
                } else {
                    respuesta = "No se puede actualizar "
                }
                break;
            case "actualizarVarios":
                if (opciones !== null) {
                    respuesta = await collection.updateMany(opciones, data)
                } else {
                    respuesta = "No se puede actualizar "
                }
                break;
            case "borrarUno":
                if (opciones !== null) {
                    respuesta = await collection.deleteOne(opciones)
                } else {
                    respuesta = "No se puede eliminar "
                }
                break;
            case "borrarVarios":
                if (opciones !== null) {
                    respuesta = await collection.deleteMany(opciones)
                } else {
                    respuesta = "No se puede eliminar "
                }
                break;

            default:
                console.log("No existe la accion")
                break;
        }
        console.log(respuesta);
        return respuesta
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}
/**
 * 
crud('sample_mflix' , 'movies' , 'leerUno').catch(console.error).then(res => {
    console.log(res)
})
 */

let opciones = { year: 2000 }
//let res2 = crud('sample_mflix' , 'movies' , 'leerTodos', opciones).then(res => console.log(res))


let strObjeto = `
{
    "plot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film...",
    "genres": [
      "Short",
      "Drama"
    ],
    "runtime": 14,
    "cast": [
      "Frank Powell",
      "Grace Henderson",
      "James Kirkwood",
      "Linda Arvidson"
    ],
    "num_mflix_comments": 1,
    "title": "A Corner in Wheat",
    "fullplot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.",
    "languages": [
      "English"
    ],
    "released": {
      "$date": {
        "$numberLong": "-1895097600000"
      }
    },
    "directors": [
      "D.W. Griffith"
    ],
    "rated": "G",
    "awards": {
      "wins": 1,
      "nominations": 0,
      "text": "1 win."
    },
    "lastupdated": "2015-08-13 00:46:30.660000000",
    "year": 1909,
    "imdb": {
      "rating": 6.6,
      "votes": 1375,
      "id": 832
    },
    "countries": [
      "USA"
    ],
    "type": "movie",
    "tomatoes": {
      "viewer": {
        "rating": 3.6,
        "numReviews": 109,
        "meter": 73
      },
      "lastUpdated": {
        "$date": "2015-05-11T18:36:53.000Z"
      }
    },
    "random_review": "After viewing I am 76.30724565453497% more satisfied with life."
  }`


let objIngresar = JSON.parse(strObjeto)


//res2 = crud('sample_mflix' , 'movies' , 'agregarUno', objIngresar).then(res => console.log(res))



let strIngresarMuchos = `
[
    {
        "plot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film...",
        "genres": [
          "Short",
          "Drama"
        ],
        "runtime": 14,
        "cast": [
          "Frank Powell",
          "Grace Henderson",
          "James Kirkwood",
          "Linda Arvidson"
        ],
        "num_mflix_comments": 1,
        "title": "A Corner in Wheat",
        "fullplot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.",
        "languages": [
          "English"
        ],
        "released": {
          "$date": {
            "$numberLong": "-1895097600000"
          }
        },
        "directors": [
          "D.W. Griffith"
        ],
        "rated": "G",
        "awards": {
          "wins": 1,
          "nominations": 0,
          "text": "1 win."
        },
        "lastupdated": "2015-08-13 00:46:30.660000000",
        "year": 1909,
        "imdb": {
          "rating": 6.6,
          "votes": 1375,
          "id": 832
        },
        "countries": [
          "USA"
        ],
        "type": "movie",
        "tomatoes": {
          "viewer": {
            "rating": 3.6,
            "numReviews": 109,
            "meter": 73
          },
          "lastUpdated": {
            "$date": "2015-05-11T18:36:53.000Z"
          }
        },
        "random_review": "After viewing I am 76.30724565453497% more satisfied with life."
      },
      {
        "plot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film...",
        "genres": [
          "Short",
          "Drama"
        ],
        "runtime": 14,
        "cast": [
          "Frank Powell",
          "Grace Henderson",
          "James Kirkwood",
          "Linda Arvidson"
        ],
        "num_mflix_comments": 1,
        "title": "A Corner in Wheat",
        "fullplot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.",
        "languages": [
          "English"
        ],
        "released": {
          "$date": {
            "$numberLong": "-1895097600000"
          }
        },
        "directors": [
          "D.W. Griffith"
        ],
        "rated": "G",
        "awards": {
          "wins": 1,
          "nominations": 0,
          "text": "1 win."
        },
        "lastupdated": "2015-08-13 00:46:30.660000000",
        "year": 1909,
        "imdb": {
          "rating": 6.6,
          "votes": 1375,
          "id": 832
        },
        "countries": [
          "USA"
        ],
        "type": "movie",
        "tomatoes": {
          "viewer": {
            "rating": 3.6,
            "numReviews": 109,
            "meter": 73
          },
          "lastUpdated": {
            "$date": "2015-05-11T18:36:53.000Z"
          }
        },
        "random_review": "After viewing I am 76.30724565453497% more satisfied with life."
      },
      {
        "plot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film...",
        "genres": [
          "Short",
          "Drama"
        ],
        "runtime": 14,
        "cast": [
          "Frank Powell",
          "Grace Henderson",
          "James Kirkwood",
          "Linda Arvidson"
        ],
        "num_mflix_comments": 1,
        "title": "A Corner in Wheat",
        "fullplot": "A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain's producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.",
        "languages": [
          "English"
        ],
        "released": {
          "$date": {
            "$numberLong": "-1895097600000"
          }
        },
        "directors": [
          "D.W. Griffith"
        ],
        "rated": "G",
        "awards": {
          "wins": 1,
          "nominations": 0,
          "text": "1 win."
        },
        "lastupdated": "2015-08-13 00:46:30.660000000",
        "year": 1909,
        "imdb": {
          "rating": 6.6,
          "votes": 1375,
          "id": 832
        },
        "countries": [
          "USA"
        ],
        "type": "movie",
        "tomatoes": {
          "viewer": {
            "rating": 3.6,
            "numReviews": 109,
            "meter": 73
          },
          "lastUpdated": {
            "$date": "2015-05-11T18:36:53.000Z"
          }
        },
        "random_review": "After viewing I am 76.30724565453497% more satisfied with life."
      }
]`

let arrayInsertar = JSON.parse(strIngresarMuchos);

//res2 = crud('sample_mflix' , 'movies' , 'agregarVarios', arrayInsertar).then(res => console.log(res))

let filtro = { title: "A Corner in Wheat" }
let datos = { $set: { year: 1910 } }

//res2 = crud('sample_mflix' , 'movies' , 'actualizarUno',filtro ,datos ).then(res => console.log(res))
//res2 = crud('sample_mflix' , 'movies' , 'actualizarVarios',filtro ,datos ).then(res => console.log(res))

//res2 = crud('sample_mflix' , 'movies' , 'borrarVarios',filtro).then(res => console.log(res))