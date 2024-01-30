
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('Veterinaria');
        const collection = db.collection('Mascotas');
        const first = await collection.findOne();
    } finally {
        await client.close();
    }
}
run().catch(console.error);
async function crud(base, coleccion, accion, filtro = null, data = null) {
    try {
        await client.connect();
        const db = client.db(base);
        const collection = db.collection(coleccion);
        let respuesta = null;
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
                    respuesta = "No se puede agregar"
                }
                break;
            case "agregarVarios":
                if (filtro !== null) {
                    respuesta = await collection.insertMany(filtro);
                } else {
                    respuesta = "No se puede agregar"
                }
                break;
            case "actualizarUno":
                if (filtro !== null) {
                    respuesta = await collection.updateOne(filtro, data);
                } else {
                    respuesta = "No se puede actualizar"
                }
                break;
            case "actualizarVarios":
                if (filtro !== null) {
                    respuesta = await collection.updateMany(filtro,data);
                } else {
                    respuesta = "No se puede actualizar"
                }
                break;
                case "borrarUno":
                    if (filtro !== null) {
                        respuesta = await collection.deleteOne(filtro);
                    } else {
                        respuesta = "No se puede borrar"
                    }
                    break;
                case "borrarVarios":
                    if (filtro !== null) {
                        respuesta = await collection.deleteMany(filtro);
                    } else {
                        respuesta = "No se puede borrar"
                    }
                    break;
            default:
                break;
        }
        return respuesta;
    } finally {
        await client.close();
    }
}

let createOne = `{
    "nombre":"Poni",
    "especie":"Gato",
    "raza":"Mestizo",
    "sexo":"Hembra",
    "color":"Blanco",
    "edad":3,
    "propietario":{
        "tipoIdentificacion":"CE",
        "nombre":"Pedro",
        "apellido":"Melgarejo",
        "direccion":"Lima",
        "telefono":"972342342"
    }
    ,
    "vacunas":["antirrabica"]
}`;

let jsonObj = JSON.parse(createOne);
crud("Veterinaria", "Mascotas", "agregarUno",jsonObj).then((res)=>{
 console.log(res)
});

let createMany = `[
    {
        "nombre":"Bravo",
        "especie":"Perro",
        "raza":"Mestizo",
        "sexo":"Macho",
        "color":"Negro",
        "edad":4,
        "propietario":{
            "tipoIdentificacion":"DNI",
            "nombre":"Frank",
            "apellido":"Polacho",
            "direccion":"Lima",
            "telefono":"93888444"
        }
        ,
        "vacunas":[]
    },
    {
        "nombre":"Linda",
        "especie":"Gato",
        "raza":"Mestizo",
        "sexo":"Hembra",
        "color":"Blanco",
        "edad":4,
        "propietario":{
            "tipoIdentificacion":"DNI",
            "nombre":"Rodrigo",
            "apellido":"Perez",
            "direccion":"Lima",
            "telefono":"94534532"
        }
        ,
        "vacunas":["Antirabica"]
    }
]`

crud("Veterinaria", "Mascotas", "leerUno").then((res)=>{
    console.log(res);
});

let filtro = { edad: 2 };
crud("Veterinaria", "Mascotas", "leerTodos", opciones).then((res) => {
    console.log(res)
});

crud("Veterinaria", "Mascotas", "agregarVarios", JSON.parse(createMany)).then((res) => {
   console.log(res) });

crud("Veterinaria", "Mascotas", "borrarUno", filtro).then((res) => {
    console.log(res)

});

filtro = { especie: "Gato" }
let data =  { $set: { edad: 10 } } 
crud("Veterinaria", "Mascotas", "actualizarUno", filtro, data).then((res) => {
  console.log(res)
 });

crud("Veterinaria", "Mascotas", "actualizarVarios", filtro, data).then((res) => {
   console.log(res)
});

