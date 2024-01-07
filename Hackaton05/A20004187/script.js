let arrTelefonos = [];
const Reparaciones = function () {
    let Nombre;
    let Ubicacion;

    function eventos() {
        document.getElementById("ingresoTelefono").addEventListener("click", ingresarTelefono);
        document.getElementById("diagnostico").addEventListener("click",diagnostico);
        document.getElementById("myCheck").addEventListener("click",Abono)
        document.getElementById("autorizacion").addEventListener("click",confirmacion);
        document.getElementById("finalizado").addEventListener("click",terminado);
    }
    function ingresarTelefono() {
        let IMEI = prompt("Ingresa el IMEI");
        let nuevoTelefono = new Telefono(IMEI);
        nuevoTelefono.verificarIMEI();
        document.getElementById("estado").innerHTML = "Inicio";
    }
   return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion = parametros.Ubicacion;
            eventos();
        },
    };
}();

class Telefono {
    constructor(imei, estado = false) {
        this.imei = imei;
        this.estado = estado;
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
}

function confirmacion() {
        Swal.fire({
            title: "La reparación esta por empezar",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "SI",
            denyButtonText: `NO`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
                arrTelefonos.push(this);
                console.log(arrTelefonos)
                document.getElementById("finalizado").disabled=false;
                document.getElementById("estado").innerHTML = "Empezando";
            } else if (result.isDenied) {
                Swal.fire("En caso cambie de opinion, lo esperamos", "", "info");
                document.getElementById("estado").innerHTML = "Rechazado";
            }
        });
}

function diagnostico(){
    diagN=`DIAGNOSTICO: Se encontró dañado la unidad de carga, por lo que el costo seria 150 soles`;
    alert(diagN)
    document.getElementById("myCheck").disabled=false;
    document.getElementById("mySelect").disabled=false;
    document.getElementById("estado").innerHTML = "Diagnostico";
}

function Abono() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
        if (checkBox.checked == true){
          text.style.display = "block";
          document.getElementById("autorizacion").disabled=false;
          document.getElementById("estado").innerHTML = "Cotizado";
        } else {
           text.style.display = "none";
           document.getElementById("autorizacion").disabled=true;
        }
      }

function seleccionMarca() {
    var marca = document.getElementById("mySelect").value;
    var tecn;
switch(marca){
    case "Samsung":
        tecn="Jose Lopez"
        break;
    case "Apple":
        tecn="Alberto Fernandez"
        break;
    case "Xiaomi":
        tecn="Carlos Dominguez"
        break;
    case "Oppo":
        tecn="Jesus Martinez"
        break;
    case "Motorola":
        tecn="Eduardo Jimenez"
        break;
    case "Huawei":
        tecn="Renzo Paredes"
        break;
    case "Realme":
        tecn="Alex Galvez"
        break;
    default:
        tecn="Cesar Vasquez"
        break;
}  

  document.getElementById("tecnico").innerHTML = "El técnico especialista es: " + tecn;
}
function terminado(){
    document.getElementById("estado").innerHTML = "Terminado";
}