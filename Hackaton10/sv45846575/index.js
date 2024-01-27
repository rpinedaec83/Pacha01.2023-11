console.log("Hackaton10")
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function run() {
    try {
        await client.connect();
        const db = client.db('Veterinaria');
        const collection = db.collection('Mascotas');

        // Find the first document in the collection
        const first = await collection.findOne();
        console.log(first);
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}
//run().catch(console.error);
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
        // Find the first document in the collection
        return respuesta;
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}

let res = crud("Veterinaria", "Mascotas", "leerUno").then((res)=>{
   console.log(res);
});

let opciones = { edad: 2 };
 let res2 = crud("Veterinaria", "Mascotas", "leerTodos", opciones).then((res) => {
console.log(res)
});
let strIngresar = `{
    
    "_id": {
      "$oid": "65b44c790e911ffa27acb42b"
    },
    "nombre": "Michi",
    "especie": "Gato",
    "raza": "Mestizo",
    "sexo": "Hembra",
    "color": "Blanco",
    "edad": 1,
    "propietario": {
      "tipoIdentificacion": "CE",
      "nombre": "Rosa",
      "apellido": "Nieves",
      "direccion": "Lima",
      "telefono": "5189515453"
    },
    "vacunas": [
      "TripleFelina",
      "Antirabica"
    ]
  }
  _id":{"$oid":"65b44c660e911ffa27acb429"},
    "nombre": "Pancho",
    "especie": "Gato",
    "raza": "Mestizo",
    "sexo": "Macho",
    "color": "Atigrado",
    "edad": 1.5,
    "propietario": {
      "tipoIdentificacion": "CE",
      "nombre": "Roberto",
      "apellido": "Pineda",
      "direccion": "Lima",
      "telefono": "916730940"
    },
    "vacunas": [
      "TripleFelina",
      "Antirabica"
    }
    {
        "_id": {
          "$oid": "65b44cbb0e911ffa27acb433"
        },
        "nombre": "Flor",
        "especie": "Gato",
        "raza": "Mestizo",
        "sexo": "Hembra",
        "color": "Atigrado",
        "edad": 1,
        "propietario": {
          "tipoIdentificacion": "CE",
          "nombre": "Cris",
          "apellido": "Valencia",
          "direccion": "Lima",
          "telefono": "988730940"
        },
        "vacunas": [
          "TripleFelina",
          "Antirabica"
        ]
      }
      {
        "_id": {
          "$oid": "65b44cd10e911ffa27acb437"
        },
        "nombre": "Panchita",
        "especie": "Gato",
        "raza": "Mestizo",
        "sexo": "Hembra",
        "color": "Blanco",
        "edad": 3,
        "propietario": {
          "tipoIdentificacion": "CE",
          "nombre": "Nancy",
          "apellido": "Ayala",
          "direccion": "Lima",
          "telefono": "922730940"
        },
        "vacunas": [
          "TripleFelina",
          "Antirabica"
        ]
      }
    ]
  }`;


let objIngreso = JSON.parse(strIngresar);
console.log(objIngreso)
res2 =  crud("Veterinaria", "Mascotas", "agregarUno",objIngreso).then((res)=>{
 console.log(res)
});

let strIngresarMuchos = `{
    
    "_id": {
      "$oid": "65b44c790e911ffa27acb42b"
    },
    "nombre": "Michi",
    "especie": "Gato",
    "raza": "Mestizo",
    "sexo": "Hembra",
    "color": "Blanco",
    "edad": 1,
    "propietario": {
      "tipoIdentificacion": "CE",
      "nombre": "Rosa",
      "apellido": "Nieves",
      "direccion": "Lima",
      "telefono": "5189515453"
    },
    "vacunas": [
      "TripleFelina",
      "Antirabica"
    ]
  }
  _id":{"$oid":"65b44c660e911ffa27acb429"},
    "nombre": "Pancho",
    "especie": "Gato",
    "raza": "Mestizo",
    "sexo": "Macho",
    "color": "Atigrado",
    "edad": 1.5,
    "propietario": {
      "tipoIdentificacion": "CE",
      "nombre": "Roberto",
      "apellido": "Pineda",
      "direccion": "Lima",
      "telefono": "916730940"
    },
    "vacunas": [
      "TripleFelina",
      "Antirabica"
    }
    {
        "_id": {
          "$oid": "65b44cbb0e911ffa27acb433"
        },
        "nombre": "Flor",
        "especie": "Gato",
        "raza": "Mestizo",
        "sexo": "Hembra",
        "color": "Atigrado",
        "edad": 1,
        "propietario": {
          "tipoIdentificacion": "CE",
          "nombre": "Cris",
          "apellido": "Valencia",
          "direccion": "Lima",
          "telefono": "988730940"
        },
        "vacunas": [
          "TripleFelina",
          "Antirabica"
        ]
      }
      {
        "_id": {
          "$oid": "65b44cd10e911ffa27acb437"
        },
        "nombre": "Panchita",
        "especie": "Gato",
        "raza": "Mestizo",
        "sexo": "Hembra",
        "color": "Blanco",
        "edad": 3,
        "propietario": {
          "tipoIdentificacion": "CE",
          "nombre": "Nancy",
          "apellido": "Ayala",
          "direccion": "Lima",
          "telefono": "922730940"
        },
        "vacunas": [
          "TripleFelina",
          "Antirabica"
        ]
      }
    ]
  }`;



let arrInsertar = JSON.parse(strIngresarMuchos);
crud("Veterinaria", "Mascotas", "agregarVarios", arrInsertar).then((res) => {
   console.log(res) });

let filtro = { especie: "Perro" }
let data =  { $set: { edad: 1 } } 
crud("Veterinaria", "Mascotas", "actualizarUno", filtro, data).then((res) => {
  console.log(res)
 });

 crud("Veterinaria", "Mascotas", "actualizarVarios", filtro, data).then((res) => {
   console.log(res)
});

crud("Veterinaria", "Mascotas", "borrarVarios", filtro).then((res) => {
    console.log(res)

});