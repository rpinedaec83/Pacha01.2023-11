console.log("Base de datos Veterinaria")
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
                    response = "No se pudo agregar"
                }
                break;
            case "agregarVarios":
                if (filtro !== null) {
                    response = await collection.insertMany(filtro);
                } else {
                    response = "No se pudo agregar"
                }
                break;
            case "actualizarUno":
                if (filtro !== null) {
                    response = await collection.updateOne(filtro, data);
                } else {
                    response = "No se pudo actualizar"
                }
                break;
            case "actualizarVarios":
                if (filtro !== null) {
                    response = await collection.updateMany(filtro,data);
                } else {
                    response = "No se pudo actualizar"
                }
                break;
            case "borrarUno":
                if (filtro !== null) {
                    response = await collection.deleteOne(filtro);
                } else {
                    response = "No se pudo borrar"
                }
                break;
            case "borrarVarios":
                    if (filtro !== null) {
                        response = await collection.deleteMany(filtro);
                    } else {
                        response = "No se pudo borrar"
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

let Mascota01 = `{
    "nombre":"Enki",
    "especie":"Gato",
    "raza":"Meztizo",
    "sexo":"Macho",
    "color":"Gris Atrigrado",
    "edad":2,
    "propietario":{
        "tipoIdentificacion":"DNI",
        "nombre":"Jim Gustavo",
        "apellido":"Gonzales Herrera",
        "direccion":"San Juan de Lurigancho",
        "telefono":"936468992"
    }
    ,
    "vacunas":["Triple Felina"]
}`;

//let agregaruno = JSON.parse(Mascota01);
//crud("Veterinaria", "Mascotas", "agregarUno",agregaruno).then((res)=>{
//console.log(res)
//});

let variasMascotas = `[
    {
        "nombre":"Luna",
        "especie":"Gato",
        "raza":"Mestizo",
        "sexo":"Hembra",
        "color":"Blanco con Mancha Negras",
        "edad":5,
        "propietario":{
            "tipoIdentificacion":"DNI",
            "nombre":"Maria",
            "apellido":"Esperanza Rumay",
            "direccion":"San Juan de Lurigancho",
            "telefono":"998564347"
        }
        ,
        "vacunas":["Triple Felina",
                   "Antirrabica"]
    },
    {
        "nombre":"Polly",
        "especie":"Perro",
        "raza":"Labrador",
        "sexo":"Hembra",
        "color":"Dorada",
        "edad":9,
        "propietario":{
            "tipoIdentificacion":"DNI",
            "nombre":"Gustavo Fabricio",
            "apellido":"Gonzales Rumay",
            "direccion":"San Juan de Lurigancho",
            "telefono":"978543276"
        }
        ,
        "vacunas":["Antirabica",
                   "Quintuple"]
    }
]`;

/*let agregarvarios = JSON.parse(variasMascotas);
crud("Veterinaria", "Mascotas", "agregarVarios",agregarvarios).then((res)=>{
 console.log(res)
});*/

//Filtrar Uno
/*let filtroUno = { nombre: "Polly" }
crud("Veterinaria", "Mascotas", "leerUno", filtroUno).then((res)=>{
console.log(res);
});*/

//Filtrar Varios
/*let filtroTodos =  crud("Veterinaria", "Mascotas", "leerTodos", null).then((res)=>{
console.log(res)
});*/

//Actualizar un registro
/*let filtronombre = { nombre: "Enki" }
let actualziarraza=  { $set: { raza: "Bengali" } } 
crud("Veterinaria", "Mascotas", "actualizarUno", filtronombre, actualziarraza).then((res)=>{
console.log(res)
});*/

//Actualizar varios registro
/*let filtroespecie = { especie: "Gato" }
let actualziaredad =  { $set: { edad: 6 } } 
crud("Veterinaria", "Mascotas", "actualizarVarios", filtroespecie, actualziaredad).then((res)=>{
console.log(res)
});*/

//Eliminar un registro
/*let filtronombre = { nombre: "Enki" }
crud("Veterinaria", "Mascotas", "borrarUno", filtronombre).then((res)=>{
console.log("Los datos de la mascota fueron eliminados");
});*/

//Eliminar varios registros 
/*let filtroespecie = { especie: "Gato" }
crud("Veterinaria", "Mascotas", "borrarVarios", filtroespecie).then((res)=>{
console.log("Los datos de las mascotas fueron eliminados");
 });*/

 //Gustavo Fabricio Gonzales Rumay

