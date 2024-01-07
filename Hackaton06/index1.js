
let arrTelefonos = [];
const Reparaciones = function () {
    let Nombre;
    let Ubicacion;

    function eventos() {
        document.getElementById("ingresoTelefono").addEventListener("click", ingresarTelefono);
    }
    function ingresarTelefono() {
        let IMEI = prompt("Ingresa el IMEI");
        let nuevoTelefono = new Telefono(IMEI);
        nuevoTelefono.verificarIMEI();

    }
    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            eventos();

        },
    };
}();
///-------------------------------------------------------------------------------------------------------------------

let arrDiagnosticos = [];
const Diagnosticaremos = function () {
    let Nombre;
    let Ubicacion;

    function eventos() {
        document.getElementById("diagnostico").addEventListener("click", Diagnosticar);
    }

    function Diagnosticar() {
        let diagnostico = ("El telefono pasara a su primera revision ");
        alert(diagnostico)
        console.log(diagnostico)
       

    }
    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            eventos();
        },
    };
}();
//---------------------------------------------------------------------------------------------------------------

let arrAutorizacion = [];
const autorizaremos = function () {
    let Nombre;
    let Ubicacion;

    function eventos() {
        document.getElementById("autorizar").addEventListener("click", Autorizar);
    }
    function Autorizar() {
        let IMEI = prompt("Autorizo para realizar la repacion ");
        let nuevoTelefono = new Telefono(IMEI);
        nuevoTelefono.AUTO();

    }
    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            eventos();

        },
    };
}();







  class Cliente {
    constructor(nombre, autorizacion, abono) {
      this.nombre = nombre;
      this.autorizacion = autorizacion;
      this.abono = abono
    }
  }

  class Telefono {
    constructor(numeroSerie, imei, marca,diagnostico) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.reportado = false;
      this.diagnostico = 'El telefono pasara a primera';
    }
    
    
  
      verificarIMEI() {
        // this.estado = confirm("El IMEI esta reportado");
        Swal.fire({
            title: "El IMEI esta libre?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "SI",
            denyButtonText: `NO`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
                arrTelefonos.push(this);
                document.getElementById("diagnostico").disabled=false;
                console.log(arrTelefonos)
            } else if (result.isDenied) {
                Swal.fire("No se puede proveer el servicio", "", "info");
            }
        });
      }
    verdiagnostico() {
                    Swal.fire({
                title: "Se realizar el primer diagnostico",
                
               
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                    arrDiagnosticos.push(this);
                    document.getElementById("diagnostico").disabled=false;
                    console.log(arrDiagnosticos)
                } else if (result.isDenied) {
                    Swal.fire("No se puede proveer el servicio", "", "info");
                }
            });
    }


    AUTO() {
        // this.estado = confirm("El IMEI esta reportado");
        Swal.fire({
            title: " PRECIONE OK SI REALIZO EL ABONO DEL 50%",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "SI",
            denyButtonText: `NO`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
                arrTelefonos.push(this);
                document.getElementById("diagnostico").disabled=false;
                console.log(arrTelefonos)
            } else if (result.isDenied) {
                Swal.fire("No se puede proveer el servicio", "", "info");
            }
        });
      }







    }



















  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }

  class Reparacion {
    constructor(telefono, cliente, tecnico) {
      this.telefono = telefono;
      this.cliente = cliente;
      this.tecnico = tecnico;
      this.repuestos = [];
      this.estado = 'En espera de la autorizacion.'
    }

    agegrarRepuestos(repuesto) {
      this.repuestos.push(repuesto)
      console.log('Se agrego el repuesto: ', repuesto)
    }

    verEstado() {
      console.log('Estado del equipo', this.estado)
    }

  }
  const listReparaciones = [];
  const telefono1 = new Telefono('999-555-555',   '987654321',   'Samsung')
  const client1 = new Cliente('Erick', true, 0.5)
  const client2 = new Cliente('Juan', false, 0.5)
  const tecnico1 = new Tecnico('Johana', ['Samsung'])
  const telefono2 = new Telefono('995-999-999', '786543264', 'Xiaomi')
  // telefono1.reportado = true
  // console.log(telefono1)

  const reparacion1 = new Reparacion(telefono1, client1, tecnico1);

  const reparacion2 = new Reparacion(telefono2, client1, tecnico1);


  listReparaciones.push(reparacion1);
  listReparaciones.push(reparacion2);

  reparacion1.verEstado()

  if(client1.autorizacion && client1.abono === 0.5) {
    reparacion1.estado = 'En reparacion';

   

    reparacion1.agegrarRepuestos('Pantalla nueva')


    reparacion1.estado = 'Finalizado'
    
    reparacion1.verEstado()

  } else {
    alert('El usuario debe validar su permiso y abonar el 50%')
  }

  const storage  = window.localStorage || window.sessionStorage;

  storage.setItem('reparacion', JSON.stringify(listReparaciones));

  const reparacion = JSON.parse(localStorage.getItem('reparacion'))

  document.addEventListener("DOMContentLoaded", function () {
    const reparacionDiv = document.getElementById('reparacion')
    
    if(reparacion.length  === 0) {
      reparacionDiv.innerHTML = '<p>No hay reparaciones. </p>'
    } else {

      const ul  = document.createElement('ul')

      // console.log(reparacion)
      reparacion.forEach((element, index) => {
        // console.log(index)
        // console.log(element.telefono)
        const li = document.createElement('li');

        li.textContent = `Telefono: ${element.telefono.numeroSerie},  Cliente: ${element.cliente.nombre}, Tecnico: ${element.tecnico.nombre}`;

        ul.appendChild(li)
      });

      reparacionDiv.appendChild(ul)
    }

  })


