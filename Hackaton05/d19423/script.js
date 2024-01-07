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