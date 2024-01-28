console.log("Funcionando con nodemon")
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('Veterinaria');
        const collection = db.collection('Mascota');

        // Find the first document in the collection
        const first = await collection.findOne();
        console.log(first);
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}

async function crud(database,colleccion,accion,filtro = null,data=null){
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection(colleccion);
        let response = null;

        switch (accion) {
            case "leerUno":
                if (filtro !== null) {
                    respuesta = await collection.findOne(filtro);
                } else {
                    respuesta = await collection.findOne();
                }
                break;

            case "leerTodos":
                if (filtro !== null) {
                    respuesta = await collection.find(filtro).toArray();
                } else {
                    respuesta = await collection.find().toArray();
                }
                break;
            case "agregarUno":
                if (filtro !== null) {
                    respuesta = await collection.insertOne(filtro);
                } else {
                    respuesta = "no se puede agregar"
                }
                break;
            case "agregarVarios":
                if (filtro !== null) {
                    respuesta = await collection.insertMany(filtro);
                } else {
                    respuesta = "no se puede agregar"
                }
                break;
            case "actualizarUno":
                if (filtro !== null) {
                    respuesta = await collection.updateOne(filtro, data);
                } else {
                    respuesta = "no se puede actualizar"
                }
                break;
            case "actualizarVarios":
                if (filtro !== null) {
                    respuesta = await collection.updateMany(filtro,data);
                } else {
                    respuesta = "no se puede actualizar"
                }
                break;
            case "borrarUno":
                if (filtro !== null) {
                    respuesta = await collection.deleteOne(filtro);
                } else {
                    respuesta = "no se puede borrar"
                }
                break;
            case "borrarVarios":
                    if (filtro !== null) {
                        respuesta = await collection.deleteMany(filtro);
                    } else {
                        respuesta = "no se puede borrar"
                    }
                    break;
            default:
                break;
        }
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}

run().catch(console.error);