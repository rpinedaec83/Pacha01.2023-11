console.log("Funcionando con nodemon")
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
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
//run().catch(console.error);

async function crud(base, colleccion, accion) {
  try {
    await client.connect();
    const db = client.db(base);
    const collection = db.collection(colleccion);
    let respuesta = null;

    switch (accion) {
      case "leerUno":
        // Find the first document in the collection
        const first = await collection.findOne();
        console.log(first);
        return first;
      case "leerTodos":
        const all = await collection.find();
        console.log(all)
        return all;
      default:
        break;
    }
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}





let resultado2 = crud("sample_mflix","movies","leerTodos").then(res => console.log(res)) 

let resultado = crud("sample_mflix","movies","leerUno").then(res => console.log(res)) 