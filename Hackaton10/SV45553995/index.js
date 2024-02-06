console.log("Funcionando con nodemon ")
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const base = "Hackaton10";
const mascota = "Mascota";
const dueno = "Dueno";
const vacuna = "Vacuna";
const vacunacion = "Vacunacion";

const client = new MongoClient(uri);

async function crud(base, coleccion, accion, filtro = null, data = null) {
    try {
        await client.connect();
        const db = client.db(base);
        const collection = db.collection(coleccion);
        let respuesta = null;

        switch (accion) {
            case "getOne":
              if (filtro !== null) {
                  respuesta = await collection.findOne(filtro);
              } else {
                  respuesta = await collection.findOne();
              }
              break;
            case "getAll":
              if (filtro !== null) {
                  respuesta = await collection.find(filtro).toArray();
              } else {
                  respuesta = await collection.find().toArray();
              }
              break;
            case "insertOne":
              if (filtro !== null) {
                  respuesta = await collection.insertOne(filtro);
              } else {
                  respuesta = "no se puede agregar"
              }
              break;
            case "insertMany":
              if (filtro !== null) {
                  respuesta = await collection.insertMany(filtro);
              } else {
                  respuesta = "no se puede agregar"
              }
              break;
            case "updateOne":
              if (filtro !== null) {
                  respuesta = await collection.updateOne(filtro, data);
              } else {
                  respuesta = "no se puede actualizar"
              }
              break;
            case "updateMany":
              if (filtro !== null) {
                  respuesta = await collection.updateMany(filtro,data);
              } else {
                  respuesta = "no se puede actualizar"
              }
              break;
            case "deleteOne":
              if (filtro !== null) {
                  respuesta = await collection.deleteOne(filtro);
              } else {
                  respuesta = "no se puede borrar"
              }
              break;
            case "deleteMany":
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


//Registrar una mascota
let mascotaUno = 
`{
  "nombre" : "Caramelo",
  "edad" : 13,
  "raza" : "Meztiso",
  "tipo" : "Perro"
}`;

let mascotaUnoJson = JSON.parse(mascotaUno);
console.log(mascotaUnoJson)
 res2 =  crud(base, mascota, "insertOne", mascotaUnoJson).then((res)=>{
    console.log(res);
    console.log("Se inserto la mascota uno en MongoDB")
 });


 let mascotaDos = 
`{
  "nombre" : "Boby",
  "edad" : 15,
  "raza" : "Meztiso",
  "tipo" : "Perro"
}`;
//Registrar otra mascota
let mascotaDosJson = JSON.parse(mascotaDos);
console.log(mascotaDosJson)
 res3 =  crud(base, mascota, "insertOne", mascotaDosJson).then((res)=>{
  console.log(res);
  console.log("Se inserto la mascota dos en MongoDB")
 });



//Filtro de una mascota por nombre Caramelo
 let filtroNombreUno = { nombre: "Caramelo" }
 res3 =  crud(base, mascota, "getOne", filtroNombreUno).then((res)=>{
  console.log("Los datos de la mascota "+ filtroNombreUno.nombre+" es :"+JSON.stringify(res));
 });

 //Filtro de una mascota por nombre Boby
 let filtroNombreDos = { nombre: "Boby" }
 res3 =  crud(base, mascota, "getOne", filtroNombreDos).then((res)=>{
  console.log("Los datos de la mascota "+ filtroNombreDos.nombre+" es :"+JSON.stringify(res));
 });

//Obtener todas las mascotas almacenadas en base de datos
 res3 =  crud(base, mascota, "getAll", null).then((res)=>{
  console.log("Obtener todas las mascotas");
  console.log("Las mascotas guardadas son :"+JSON.stringify(res));
 });



//Actualización de datos de raza de una mascota por el tipo
 let filtroUpdateTipoUno = { tipo: "Boby" }
 let dataUpdateRazaUno =  { $set: { raza: "Mestizo" } } 
 res3 =  crud(base, mascota, "updateOne", filtroUpdateTipoUno, dataUpdateRazaUno).then((res)=>{
  console.log("Los datos de la mascota "+ filtroUpdateTipoUno.nombre+" fueron actualiazadas correctamente.");
 });
 
//Actualización de datos de edad de una mascota por el tipo
 let filtroUpdateDos = { tipo: "Perro" }
 let data =  { $set: { edad: 20 } } 
 res3 =  crud(base, mascota, "updateMany", filtroUpdateDos, data).then((res)=>{
  console.log("Los datos de las mascotas fueron actualizadas correctamente");
 });

 
//Eliminar un registro por el filtro de tipo de mascota Gato
 let filtroDeleteTipoUno = { tipo: "Gato" }
 res3 =  crud(base, mascota, "deleteOne", filtroDeleteTipoUno).then((res)=>{
  console.log("Los datos de la mascota fueron eliminados");
 });

//Eliminar varios registros por el filtro de tipo de mascota Perro
let filtroDeleteManyUno = { tipo: "Perro" }
 res3 =  crud(base, mascota, "deleteMany", filtroDeleteManyUno).then((res)=>{
  console.log("Los datos de las mascotas fueron eliminados");
 });


//Registrar un dueño
let duenoUno = 
`{
  "nombre" : "Cindy",
  "apellidos" : "Alcala Arata",
  "dni" : "45553995",
  "celular" : "943595064"
}`;

let duenoDos = 
`{
  "nombre" : "Diego",
  "apellidos" : "Alcala Arata",
  "dni" : "75553897",
  "celular" : "943595064"
}`;

let duenoJsonUno = JSON.parse(duenoUno);
 res2 =  crud(base, dueno, "insertOne", duenoJsonUno).then((res)=>{
    console.log(res);
    console.log("Se inserto el dueño uno en MongoDB")
 });

 let duenoJsonDos = JSON.parse(duenoDos);
 res2 =  crud(base, dueno, "insertOne", duenoJsonDos).then((res)=>{
    console.log(res);
    console.log("Se inserto el dueño Dos en MongoDB")
 });
 
//Filtro de un dueno por nombre Cindy
let filtroUno = { nombre: "Cindy" }
res3 =  crud(base, dueno, "getOne", filtroUno).then((res)=>{
 console.log("Los datos de un dueno "+ filtroUno.nombre+" es :"+JSON.stringify(res));
});

//Filtro de una dueno por nombre Diego
let filtroDos = { nombre: "Diego" }
res3 =  crud(base, dueno, "getOne", filtroDos).then((res)=>{
 console.log("Los datos del dueno "+ filtroDos.nombre+" es :"+JSON.stringify(res));
});

//Actualización de datos del dueno 
let filtroUpdateUno = { nombre: "Cindy" }
let dataUpdateUno =  { $set: { celular: "944739927"} } 
res3 =  crud(base, dueno, "updateOne", filtroUpdateUno, dataUpdateUno).then((res)=>{
 console.log("Los datos del dueno "+ filtroUpdateUno.nombre+" fueron actualiazadas correctamente.");
});

//Eliminar un registro por el filtro de tipo de dato
let filtroDeleteUno = { dni: "45553995" }
res3 =  crud(base,dueno, "deleteOne", filtroDeleteUno).then((res)=>{
 console.log("Los datos deL dueno fueron eliminados");
});

//Registrar vacunas
let vacunaUno = 
`{
  "nombre" : "antirabica"
}`; 

let vacunaDos = 
`{
 "nombre" : "parvovirus"
}`;

let vacunaUnoJson = JSON.parse(vacunaUno);
res2 =  crud(base, vacuna, "insertOne", vacunaUnoJson).then((res)=>{
  console.log(res);
  console.log("Se inserto la vacuna uno en MongoDB") 
});

let vacunaDosJson = JSON.parse(vacunaDos);
res2 =  crud(base, vacuna, "insertOne", vacunaDosJson).then((res)=>{
  console.log(res);
  console.log("Se inserto la vacuna dos en MongoDB") 
});


let vacunacionUno = 
`{
    "mascota" : {
      "nombre" : "Caramelo",
      "edad" : 13,
      "raza" : "Mestizo",
      "tipo" : "Perro"
    },
    "dueno" : {
      "nombre" : "Cindy",
      "apellidos" : "Alcala Arata",
      "dni": "45553995",
      "celular" : "943595064"
    },
    "vacunas" : [
      {"nombre" : "antirabica"},
      {"nombre" : "parvovirus"}
    ]
}`;


let vacunacionUnoJson = JSON.parse(vacunacionUno);
res2 =  crud(base, vacunacion, "insertOne", vacunacionUnoJson).then((res)=>{
  console.log(res);
  console.log("Se inserto la vacunación uno en MongoDB") 
});

let vacunacionDos = 
`{
    "mascota" : {
      "nombre" : "Boby",
      "edad" : 15,
      "raza" : "Mestizo",
      "tipo" : "Perro"
    },
    "dueno" : {
      "nombre" : "Diego",
      "apellidos" : "Alcala Arata",
      "dni": "75427436",
      "celular" : "944739927"
    },
    "vacunas" : [
      {"nombre" : "antirabica"}
    ]
}`;


let vacunacionDosJson = JSON.parse(vacunacionDos);
res2 =  crud(base, vacunacion, "insertOne", vacunacionDosJson).then((res)=>{
  console.log(res);
  console.log("Se inserto la vacunación uno en MongoDB") 
});