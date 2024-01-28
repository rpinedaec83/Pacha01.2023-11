const fs = require('fs');

console.log("Hackaton funcionando");

// Función para contar la cantidad de mascotas en la base de datos
function contarMascotas() {
    const baseDeDatos = cargarBaseDeDatos();
    return baseDeDatos.length;
}

const cantidadMascotas = contarMascotas();
console.log("Cantidad de mascotas:", cantidadMascotas);




function cargarBaseDeDatos() {
    const contenido = fs.readFileSync('mascotas.json', 'utf-8');
    return JSON.parse(contenido);
}


function guardarBaseDeDatos(baseDeDatos) {
    const contenido = JSON.stringify(baseDeDatos, null, 2);
    fs.writeFileSync('mascotas.json', contenido, 'utf-8');
}

async function crud(accion, filtro = null, data = null) 
{
    try {
         // Cargar la base de datos desde el archivo JSON
         let baseDeDatos = cargarBaseDeDatos();

         let respuesta = null;

         switch (accion) {
            case "leerUno":
                if (filtro !== null) {
                    respuesta = baseDeDatos.find(item => item.nombre === filtro.nombre);
                } else {
                    respuesta = baseDeDatos[0];
                }
                break;

            case "leerTodos":
                if (filtro !== null) {
                    respuesta = baseDeDatos.filter(item => item.especie === filtro.especie);
                } else {
                    respuesta = baseDeDatos;
                }
                break;

                case "agregarUno":
                    if (filtro !== null) {
                        // Verificar si ya existe una mascota con el mismo nombre
                        const existeMascota = baseDeDatos.some(item => item.nombre === filtro.nombre);
                
                        if (!existeMascota) {
                            baseDeDatos.push(filtro);
                            guardarBaseDeDatos(baseDeDatos);
                            respuesta = "Documento agregado correctamente.";
                        } else {
                            respuesta = "Ya existe una mascota con ese nombre.";
                        }
                    } else {
                        respuesta = "No se puede agregar un documento sin datos.";
                    }
                    break;

                case "agregarVarios":
                     if (filtro !== null && filtro.length > 0) {
                     const mascotasNuevas = filtro.filter(nuevaMascota => {
                     // Verificar si ya existe una mascota con el mismo nombre
                      return !baseDeDatos.some(mascota => mascota.nombre === nuevaMascota.nombre);
                     });

                      if (mascotasNuevas.length > 0) {
                       baseDeDatos = baseDeDatos.concat(mascotasNuevas);
                     guardarBaseDeDatos(baseDeDatos);
                     respuesta = "Documentos agregados correctamente.";
                     } else {
                     respuesta = "Todas las mascotas ya existen en la base de datos.";
                     }
                     } else {
                      respuesta = "No se pueden agregar documentos sin datos.";
                     }
                      break;

                case "actualizarUno":
                      if (filtro !== null && data !== null) {
                      const index = baseDeDatos.findIndex(item => item.nombre === filtro.nombre);
                     if (index !== -1) {
                      // Verificar si la mascota ya ha sido actualizada
                      if (!baseDeDatos[index]._actualizado) {
                      baseDeDatos[index] = { ...baseDeDatos[index], ...data, _actualizado: true };
                      guardarBaseDeDatos(baseDeDatos);
                       respuesta = "Documento actualizado correctamente.";
                     } else {
                      respuesta = "Este documento ya ha sido actualizado previamente.";
                     }
                     } else {
                      respuesta = "Documento no encontrado.";
                     }
                     } else {
                     respuesta = "No se puede actualizar un documento sin filtro o datos.";
                     }
                     break;


            case "actualizarVarios":
            if (filtro !== null && data !== null) {
                //  Conjunto para  nombres de mascotas actualizados
                const nombresActualizados = new Set();
        
                baseDeDatos.forEach((item, index) => {
                    if (item.especie === filtro.especie && !item._actualizado) {
                        baseDeDatos[index] = { ...baseDeDatos[index], ...data, _actualizado: true };
                        nombresActualizados.add(item.nombre);
                    }
                });
        
                // Verificar si se realizaron actualizaciones
                if (nombresActualizados.size > 0) {
                    guardarBaseDeDatos(baseDeDatos);
                    respuesta = `Documentos ${[...nombresActualizados]} actualizados correctamente.`;
                } else {
                    respuesta = "No se encontraron documentos para actualizar o ya han sido actualizados previamente.";
                }
            } else {
                respuesta = "No se pueden actualizar documentos sin filtro o datos.";
            }
            break;

            case "borrarUno":
             if (filtro !== null) {
               const index = baseDeDatos.findIndex(item => item.nombre === filtro.nombre);
              if (index !== -1) {
               baseDeDatos.splice(index, 1);
               guardarBaseDeDatos(baseDeDatos);
               respuesta = "Documento eliminado correctamente.";
              } else {
              respuesta = "Documento no encontrado para ser eliminado.";
              }
             } else {
              respuesta = "No se puede borrar un documento sin filtro.";
             }
             break;

             case "borrarVarios":
               if (filtro !== null && filtro.length > 0) {
                 const documentosEliminados = [];
                 filtro.forEach(doc => {
                  let mascotasAEliminar = [];
            
                 if (doc.nombre) 
                 {
                 // Eliminar por nombre
                 const index = baseDeDatos.findIndex(item => item.nombre === doc.nombre);
                 if (index !== -1) {
                    baseDeDatos.splice(index, 1);
                    documentosEliminados.push(doc.nombre);
                  }
                  } 
                  else if (doc.raza) 
                  {
                  // Eliminar por especie
                  mascotasAEliminar = baseDeDatos.filter(item => item.raza === doc.raza);
                  mascotasAEliminar.forEach(mascota => {
                    const index = baseDeDatos.findIndex(item => item.nombre === mascota.nombre);
                    if (index !== -1) {
                        baseDeDatos.splice(index, 1);
                        documentosEliminados.push(mascota.nombre);
                    }
                 });
                 }
                 });

                  if (documentosEliminados.length > 0) {
                  guardarBaseDeDatos(baseDeDatos);
                  respuesta = `Documentos ${documentosEliminados.join(', ')} eliminados correctamente.`;
                 } else {
                  respuesta = "No se encontraron documentos para ser eliminados.";
                 }
                 } else {
                  respuesta = "No se pueden borrar documentos sin filtro o con filtro vacío.";
                 }
                  break;

        }

        return respuesta;
    } catch (error) {
        return error.message;
    }
}



// LEER UN DOCUMENTO
/*
const mascotaUno =  crud("leerUno", { nombre: "Toby" });
console.log("Leer uno:", mascotaUno);
*/

/*
// LEER TODOS LOS DOCUMENTOS
const todasLasMascotas =  crud("leerTodos");
console.log("Leer todos:", todasLasMascotas);
*/

/*
// AGREGAR UN DOCUMENTO
const nuevaMascota = {
    "nombre": "Nube",
    "especie": "Perro",
    "raza": "Labrador",
    "sexo": "Hembra",
    "color": "Blanco",
    "edad": 1.2,
    "propietario": {
        "tipoIdentificacion": "DNI",
        "nombre": "Laura",
        "apellido": "Gomez",
        "direccion": "Lima",
        "telefono": "987654321"
    },
    "vacunas": [
        "Quintuple felina",
        "Antiparasitaria"
    ]
};
const resultadoAgregarUno =  crud("agregarUno", nuevaMascota);
console.log("Agregar uno:", resultadoAgregarUno);
*/

// AGREGAR VARIOS DOCUMENTOS
/*
const mascotasNuevas = [
    {
        "nombre": "Simba",
        "especie": "Gato",
        "raza": "Mestizo",
        "sexo": "Macho",
        "color": "Amarillo",
        "edad": 2,
        "propietario": {
            "tipoIdentificacion": "DNI",
            "nombre": "Juan",
            "apellido": "Perez",
            "direccion": "Lima",
            "telefono": "987654321"
        },
        "vacunas": [
            "TripleFelina",
            "Antiparasitaria"
        ]
    },
    {
        "nombre": "Lola",
        "especie": "Perro",
        "raza": "Bulldog",
        "sexo": "Hembra",
        "color": "Blanco y Negro",
        "edad": 3,
        "propietario": {
            "tipoIdentificacion": "DNI",
            "nombre": "Maria",
            "apellido": "Gutierrez",
            "direccion": "Lima",
            "telefono": "987123456"
        },
        "vacunas": [
            "Quintuple felina",
            "Antirabica"
        ]
    },
    {
        "nombre": "Toby",
        "especie": "Perro",
        "raza": "Labrador",
        "sexo": "Macho",
        "color": "Chocolate",
        "edad": 1.5,
        "propietario": {
            "tipoIdentificacion": "CE",
            "nombre": "Carlos",
            "apellido": "Lopez",
            "direccion": "Lima",
            "telefono": "912345678"
        },
        "vacunas": [
            "Sextuple felina",
            "Antiparasitaria"
        ]
    }
];

const resultadoAgregarVarios = crud("agregarVarios", mascotasNuevas);
console.log("Agregar varios:", resultadoAgregarVarios);
*/


/*
// ACTUALIZAR UN DOCUMENTO
const filtroActualizar = { nombre: "Luna" };
const datosActualizar = { especie: "Pastor Caucasiano" };
const resultadoActualizarUno = crud("actualizarUno", filtroActualizar, datosActualizar);
console.log("Actualizar uno:", resultadoActualizarUno);
*/

/*
// ACTUALIZAR VARIOS DOCUMENTOS
const filtroActualizarVarios = { especie: "Gato" };
const datosActualizarVarios = { vacunas: [ "TripleFelina","Antirabica","antipulgas","calicivirus"] };
const resultadoActualizarVarios = crud("actualizarVarios", filtroActualizarVarios, datosActualizarVarios);
console.log("Actualizar varios:", resultadoActualizarVarios);
*/

/*
// BORRAR UN DOCUMENTO
const filtroBorrarUno = { nombre: "Michi" };
const resultadoBorrarUno = crud("borrarUno", filtroBorrarUno);
console.log("Borrar uno:", resultadoBorrarUno);
*/

/*
// BORRAR VARIOS DOCUMENTOS (por nombre o especie)
const documentosABorrar = [
    { nombre: "Pancho" },
    { nombre: "Luna" }
];

const resultadoBorrarVarios = crud("borrarVarios", documentosABorrar);
console.log("Borrar varios:", resultadoBorrarVarios);
*/