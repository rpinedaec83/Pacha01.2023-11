console.log("Funcionando con nodemon")
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function crud(database,colleccion,accion,filtro = null,data=null){
    try {
        await client.connect();
        const db = client.db(database);
        const collection = db.collection(colleccion);
        let response = null;

        switch (accion) {
            case "leerUno":
                if (filtro !== null) {
                    response = await collection.findOne(filtro);
                } else {
                    response = await collection.findOne();
                }
                break;

            case "leerTodos":
                if (filtro !== null) {
                    response = await collection.find(filtro).toArray();
                } else {
                    response = await collection.find().toArray();
                }
                break;
            case "agregarUno":
                if (filtro !== null) {
                    response = await collection.insertOne(filtro);
                    console.log(response)
                } else {
                    response = "no se puede agregar"
                }
                break;
            case "agregarVarios":
                if (filtro !== null) {
                    response = await collection.insertMany(filtro);
                } else {
                    response = "no se puede agregar"
                }
                break;
            case "actualizarUno":
                if (filtro !== null) {
                    response = await collection.updateOne(filtro, data);
                } else {
                    response = "no se puede actualizar"
                }
                break;
            case "actualizarVarios":
                if (filtro !== null) {
                    response = await collection.updateMany(filtro,data);
                } else {
                    response = "no se puede actualizar"
                }
                break;
            case "borrarUno":
                if (filtro !== null) {
                    response = await collection.deleteOne(filtro);
                } else {
                    response = "no se puede borrar"
                }
                break;
            case "borrarVarios":
                    if (filtro !== null) {
                        response = await collection.deleteMany(filtro);
                    } else {
                        response = "no se puede borrar"
                    }
                    break;
            default:
                break;
        }
        console.log(response);
    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}


//--------------Create ONE--------------
stringMascotaTest01 = `{
    "nombre":"Paco",
    "especie":"Gato",
    "raza":"Mestizo",
    "sexo":"Macho",
    "color":"Blanco con manchas negras",
    "edad":5,
    "propietario":{
        "tipoIdentificacion":"CE",
        "nombre":"Vicente",
        "apellido":"Medo",
        "direccion":"Lima",
        "telefono":"979295618"
    }
    ,
    "vacunas":[]
}`;

stringMascotaTest02 = `{
    "nombre":"Boby",
    "especie":"Perro",
    "raza":"Mestizo",
    "sexo":"Macho",
    "color":"Blanco con manchas negras",
    "edad":5,
    "propietario":{
        "tipoIdentificacion":"CE",
        "nombre":"Cindy",
        "apellido":"Acala",
        "direccion":"Lima",
        "telefono":"943595064"
    }
    ,
    "vacunas":["antirrabica"]
}`;
// crud('Veterinaria','Mascota',"agregarUno",JSON.parse(stringMascotaTest01));
// crud('Veterinaria','Mascota',"agregarUno",JSON.parse(stringMascotaTest02));

//--------------Create MANY--------------
arrStringTest = `[
    {
        "nombre":"Loki",
        "especie":"Perro",
        "raza":"Samoyedo",
        "sexo":"Macho",
        "color":"Blanco",
        "edad":7,
        "propietario":{
            "tipoIdentificacion":"DNI",
            "nombre":"Luis",
            "apellido":"Alca",
            "direccion":"Lima",
            "telefono":"947802616"
        }
        ,
        "vacunas":[
            "Antirabica"
        ]
    },
    {
        "nombre":"Michi",
        "especie":"Gato",
        "raza":"Mestizo",
        "sexo":"Hembra",
        "color":"Blanco",
        "edad":3,
        "propietario":{
            "tipoIdentificacion":"DNI",
            "nombre":"Rosa",
            "apellido":"Nieves",
            "direccion":"Lima",
            "telefono":"989515453"
        }
        ,
        "vacunas":[
            "Antirabica"
        ]
    }
]`
// crud('Veterinaria','Mascota',"agregarVarios",JSON.parse(arrStringTest));

//-------------- Find ONE--------------
let filter = {_id: new ObjectId("65b5d0731cb09f1856c2dbef")};
// crud('Veterinaria','Mascota',"leerUno",filter);

//-------------- Find MANY--------------
filter = {edad:{$gt:3}}; // mayor que 3 años
// crud('Veterinaria','Mascota',"leerTodos",filter);

//-------------- Uodate ONE--------------
filter = {_id: new ObjectId("65b661e47f1c3110faa7ab14")};
let dataSet = {$set: { edad: 4 }} //Actualizaremos la edad a 4 años
//crud('Veterinaria','Mascota',"actualizarUno",filter,dataSet);

//-------------- Delete ONE--------------
filter = {_id: new ObjectId("65b5d0731cb09f1856c2dbef")};
// crud('Veterinaria','Mascota',"borrarUno",filter);