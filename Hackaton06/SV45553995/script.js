let celularesReportados = [
  {
    "ID": Math.floor(Math.random() * 999999),
    "numeroSerie": "123",
    "imei": "123456",
    "marca": "Xiaomi"
  },
  {
    "ID": Math.floor(Math.random() * 999999),
    "numeroSerie": "321",
    "imei": "6543321",
    "marca": "Samsung"
  },
  {
    "ID": Math.floor(Math.random() * 999999),
    "numeroSerie": "213",
    "imei": "321456",
    "marca": "Huawei"
  } 
]

let tecnicosExpertos = [
  {
    "ID": Math.floor(Math.random() * 999999),
    "nombre": "Diego",
    "expertoMarcas": ["Xiaomi","Samsung"]
  },
  {
    "ID": Math.floor(Math.random() * 999999),
    "nombre": "Cindy",
    "expertoMarcas": ["Huawei","Xiaomi"]
  },
  {
    "ID": Math.floor(Math.random() * 999999),
    "nombre": "Jose",
    "expertoMarcas": ["iPhone","Samsung"]
  } 
]

let repuestos = [
  {
    "ID": Math.floor(Math.random() * 999999),
    "nombreRespuesto": "Pantalla",
    "cantidad": Math.round(Math.random() * (5 - 1) + 1)
  },
  {
    "ID": Math.floor(Math.random() * 999999),
    "nombreRespuesto": "Camara",
    "cantidad": Math.round(Math.random() * (5 - 1) + 1)
  },
  {
    "ID": Math.floor(Math.random() * 999999),
    "nombreRespuesto": "Bateria",
    "cantidad": Math.round(Math.random() * (5 - 1) + 1)
  } 
]

let diagnisticos = []

function validarAutorizacionCliente(){
  let autorizacionCliente = document.getElementById('autorizacionCliente');
  autorizacionCliente.checked?validarPagoMitad():alert("No se tiene la autorización del cliente")
}

function validarPagoMitad(){
  let pagoMitad = document.getElementById('pagoMitad');
  pagoMitad.checked?validarCelularReportado():alert("No se ha pagado el 50%")
}

function validarCelularReportado(){
  let nombreCliente = document.getElementById("nombreCliente").value; 
  let numeroSerie = document.getElementById("numeroSerie").value;
  let imei = document.getElementById("imei").value;
  let marca = document.getElementById("marca").value;
  
  let celularIngresado = new Celular(numeroSerie, imei, marca);

  let mensaje="";

  for(i=0;i<celularesReportados.length;i++){
    if(celularIngresado.numeroSerie == celularesReportados[i].numeroSerie &&
      celularIngresado.imei == celularesReportados[i].imei){
        mensaje = "El celular esta reportado como robado";
        break;
    }else{
      mensaje = "El celular no esta reportado y puedes acceder al servicio";
    }
  }
  alert(mensaje);

  var idTecnigoAsignado = Math.round(Math.random() * (2 - 0) + 0)
  var tecnicoAsignado = tecnicosExpertos[idTecnigoAsignado]
  alert("Se esta revisando el celular por el técnico "+tecnicoAsignado.nombre);
  alert("Guardando primer diagnóstico");

  guardarDiagnostico(marca, numeroSerie, imei, nombreCliente, tecnicoAsignado.nombre)
}
  
function guardarDiagnostico(marca, numeroSerie, imei, nombreCliente, nombre_tecnico){
  let idDiagnotico = Math.floor(Math.random() * 999999);
  var diagnistico = new Diagnotico(
  idDiagnotico,
  Math.random() < 0.5, 
  Math.random() < 0.5, 
  Math.random() < 0.5,
  Math.random() < 0.5,
  marca,
  numeroSerie,
  imei,
  nombreCliente,
  nombre_tecnico
  )
  diagnisticos.push(diagnistico);

  localStorage.setItem(idDiagnotico,JSON.stringify(diagnistico))
}

function atenderDiagnostico(idEncontrar){
  var diagnosticoEncontrado = null;

  let respuestoPantalla = repuestos.filter(repuesto=>repuesto.nombreRespuesto=='Pantalla')
  var respuestoCamara = repuestos.filter(repuesto=>repuesto.nombreRespuesto=='Camara')
  var respuestoBateria= repuestos.filter(repuesto=>repuesto.nombreRespuesto=='Bateria')

  console.log(JSON.stringify(respuestoPantalla))
  console.log(JSON.stringify(respuestoCamara))
  console.log(JSON.stringify(respuestoBateria))

  for(i=0;diagnisticos.length;i++){
    if(diagnisticos[i].idDiagnotico == idEncontrar){
      diagnosticoEncontrado = diagnisticos[i]
      console.log("Diagnostico encontrado ->"+JSON.stringify(diagnosticoEncontrado))
      /*if(!diagnosticoEncontrado.bateria_estado){
        actualizarStockRepuesto("Bateria")
        diagnosticoEncontrado.bateria_estado=true
      }*/
      break;
    }
  }
}

function actualizarStockRepuesto(nombre){
  for(i=0;i<repuestos.length;i++){
    if(repuestos[i].nombreRespuesto==nombre){
      repuestos[i].cantidad=repuestos[i].cantidad-1
      console.log(repuestos[i])
      document.getElementById('tablaRepuestosHtml').remove()
      const tablaRepuestos = document.getElementById('tablaRepuestosHtml');
      for(i=0; i<repuestos.length; i++){
        tablaRepuestos.insertRow(-1).innerHTML = 
                                        '<tr><td>'+repuestos[i].ID+'</td>'+
                                        '<tr><td>'+repuestos[i].nombreRespuesto+'</td>'+
                                        '<tr><td>'+repuestos[i].cantidad+'</td>'+
                                        '<tr>';
      }
    }
  }
}

console.log("Obteniendo valores del local storage"+localStorage.getItem("diagnosticos-ids"))

  const agregarBtn = document.getElementById('validarCelular');
  const tabla = document.getElementById('tablaDiagnoticosHtml');
  const tablaTecnicos = document.getElementById('tablaTecnicosHtml');
  const tablaCelularesReportados = document.getElementById('tablaCelularesHtml');
  const tablaRepuestos = document.getElementById('tablaRepuestosHtml');

  var table = [""];
  var tableTecnicos = [""];
  var boton = '<button type="button" id="validarCelular"onclick="atenderDiagnostico()">Iniciar validación</button>'
  agregarBtn.addEventListener('click',()=> {
    for(i=0; i<table.length; i++){
        var estadoBateria =(diagnisticos[i].bateria_estado?"Buen estado":"Mal estado")
        var estadoPantalla =(diagnisticos[i].pantalla_estado?"Buen estado":"Mal estado")
        var estadoBotones =(diagnisticos[i].botones_laterales_estado?"Buen estado":"Mal estado")
        var estadoCamara =(diagnisticos[i].camara_estado?"Buen estado":"Mal estado")
        tabla.insertRow(-1).innerHTML = '<tr><td>'+diagnisticos[i].idDiagnostico+'</td>'+
                                        '<td>'+estadoBateria+'</td>'+
                                        '<td>'+estadoPantalla+'</td>'+
                                        '<td>'+estadoBotones+'</td>'+
                                        '<td>'+estadoCamara+'</td>'+
                                        '<td>'+diagnisticos[i].marca+'</td>'+
                                        '<td>'+diagnisticos[i].serie+'</td>'+
                                        '<td>'+diagnisticos[i].imei+'</td>'+
                                        '<td>'+diagnisticos[i].estado+'</td>'+
                                        '<td>'+diagnisticos[i].nombre_cliente+'</td>'+
                                        '<td>'+diagnisticos[i].nombre_tecnico+'</td>'+
        '<td><button type="button" id="validarCelular"'+
        'onclick="atenderDiagnostico('+diagnisticos[i].id+')">Iniciar validación</button></td>'+
                                        '<tr>'; 
    }
    })
    
    for(i=0; i<tecnicosExpertos.length; i++){
      tablaTecnicos.insertRow(-1).innerHTML = '<tr><td>'+tecnicosExpertos[i].ID+'</td>'+
                                      '<td>'+tecnicosExpertos[i].nombre+'</td>'+
                                      '<td>'+tecnicosExpertos[i].expertoMarcas+'</td>'+
                                      '<tr>';
    }

    for(i=0; i<celularesReportados.length; i++){
      tablaCelularesReportados.insertRow(-1).innerHTML = 
                                      '<tr><td>'+celularesReportados[i].ID+'</td>'+
                                      '<tr><td>'+celularesReportados[i].imei+'</td>'+
                                      '<tr><td>'+celularesReportados[i].marca+'</td>'+
                                      '<tr><td>'+celularesReportados[i].numeroSerie+'</td>'+
                                      '<tr>';
    }

    for(i=0; i<repuestos.length; i++){
      tablaRepuestos.insertRow(-1).innerHTML = 
                                      '<tr><td>'+repuestos[i].ID+'</td>'+
                                      '<tr><td>'+repuestos[i].nombreRespuesto+'</td>'+
                                      '<tr><td>'+repuestos[i].cantidad+'</td>'+
                                      '<tr>';
    }

function checkBoxOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function checkBoxTwo(checkbox) {
  var checkboxes = document.getElementsByName('check2')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}

function limpiar(){
  document.getElementById("nombreCliente").value = "";
  document.getElementById("numeroSerie").value = "";
  document.getElementById("imei").value = "";
  document.getElementById("marca").value = "";
  document.getElementById('autorizacionCliente').checked = false;
}

class Celular {
    constructor(numeroSerie, imei, marca) {
      this.numeroSerie = numeroSerie
      this.imei = imei;
      this.marca = marca;
    }
}

class Tecnico {
  constructor(nombre, especialidadMarca) {
    this.nombre = nombre;
    this.especialidadMarca = especialidadMarca;
  }
}

class Diagnotico {
  constructor(idDiagnostico, bateria_estado, pantalla_estado, botones_laterales_estado,
    camara_estado, marca, serie,imei,nombre_cliente, nombre_tecnico) {
    this.idDiagnostico = idDiagnostico;
    this.bateria_estado = bateria_estado;
    this.pantalla_estado = pantalla_estado;
    this.botones_laterales_estado = botones_laterales_estado;
    this.camara_estado = camara_estado;
    this.marca=marca;
    this.serie=serie;
    this.imei=imei;
    this.estado="En revisión";
    this.nombre_cliente = nombre_cliente;
    this.nombre_tecnico = nombre_tecnico;
  }
}