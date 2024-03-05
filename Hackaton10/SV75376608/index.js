const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(uri)



async function crudPetsMngoDb(db, collection_db, action, filter = null, data = null) {
    try {
        //Open the connection
        await mongoClient.connect()
        const database = mongoClient.db(db)
        const collection = database.collection(collection_db)
        let respuesta = null

        switch (action) {
            case 'getOne':

                if (filter != null) {
                    respuesta = await collection.findOne(filter)
                } else {
                    respuesta = await collection.findOne()
                }

                break;
            case 'getAll':

                if (filter != null) {
                    respuesta = await collection.find(filter).toArray()
                } else {
                    respuesta = await collection.find().toArray()
                }

                break;
            case 'saveOne':

                if (filter != null) {
                    respuesta = await collection.insertOne(data)
                } else {
                    respuesta = "No data to insert"
                }

                break;
            case 'saveMany':

                if (filter != null) {
                    respuesta = await collection.insertMany(data)
                } else {
                    respuesta = "No data to insert"
                }

                break;
            case 'editOne':

                if (filter != null) {
                    respuesta = await collection.updateOne(filter, data)
                } else {
                    respuesta = "No data to update"
                }

                break;
            case 'editMany':

                if (filter != null) {
                    respuesta = await collection.updateMany(filter, data)
                } else {
                    respuesta = "No data to update"
                }

                break;
            case 'deleteOne':

                if (filter != null) {
                    respuesta = await collection.deleteOne(filter)
                } else {
                    respuesta = "No data to delete"
                }

                break;
            case 'deleteMany':

                if (filter != null) {
                    respuesta = await collection.deleteMany(filter)
                } else {
                    respuesta = "No data to delete"
                }

                break;
            default:
                console.log("Actio not exist")
                break;
        }

        return respuesta
    } catch (error) {
        console.error(error)
    } finally {
        //Close the connection
        await mongoClient.close()
    }
}


let newPet = `
{
    "nombre": "Danna",
    "especie": "Canino",
    "raza": "Dogo Argentino",
    "sexo": "Hembra",
    "color": "Blanco",
    "propietario": {
        "tipoIdentificacio": "DNI",
        "nroIdentificacion": "7654321",
        "nombre": "Gerardo",
        "apellido": "Sanchez",
        "direccion": "Lima",
        "telefono": "987654321"
    }
}`

let insertData = JSON.parse(newPet)


//Check if the function works
//let filter  = { color : "Blanco"}
let resp1 = crudPetsMngoDb('veterinary', 'pets', 'getAll').then(resp => console.log(resp))
//let resp1 = crudPetsMngoDb('veterinary', 'pets', 'saveOne', false , insertData).then(resp => console.log(resp))


/**
 * let filter = { color : "Blanco" }
let data = { $set : { color : "Negro" }}
let resp1 = crudPetsMngoDb('veterinary', 'pets', 'editMany', filter  , data).then(resp => console.log(resp))
 * 
 */