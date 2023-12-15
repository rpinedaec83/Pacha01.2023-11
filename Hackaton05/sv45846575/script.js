
const ReparacionesRosita =function(){
    let nombre;
    let ubicacion;
    let tecnicos=[];
    function configurar(){
        let titulo = document.getElementById("nombre_de_la_tienda");
        titulo.innerHTML = nombre
        let sede = document.getElementById("ubicacion")
        sede.innerText = ubicacion;
    }
    function eventos(){
        document.getElementById("registro").addEventListener("click", registro_clientes);
        document.getElementById("diagnostico").addEventListener("click", primera_revision);
        document.getElementById("asignacion_de_tecnico").addEventListener("click", asignar_tecnicos);
        document.getElementById("estado").addEventListener("click", ver_estado);
    }
    function registro_clientes() {
        let nombre= prompt("Ingresa el nombre del cliente: ")
        let apellido= prompt("Ingresa los apellidos del cliente: ")
        let dni= prompt("Ingresa su numero de DNI: ")
        let marca_telefono= prompt("Ingresa la marca del celular a reparar: ")
        let imei= prompt("Ingresa el codigo IMEI del celular a reparar: ")
        if (imei!=="0000"){
            let cliente= new clientes(nombre,apellido,dni,marca_telefono,imei)
            return cliente;
        } else{
            console.log("El usuario no puede acceder al servicio")
        } 
    }

    function primera_revision() {
        let revison1= prompt("El primer diagnostico es: ")
        let diagnostico1= new diagosntico(revison1);
        return diagnostico1;
    }

    function registro_pagos(){
        let pago=  prompt("Ingrese el pago del cliente: ");
        let pago_cliente= prompt ("digite el pago")
        let abono= pago*0.5
        if (pago_cliente >= abono) {
            let pago_realizado= new pagos(pago, pago_cliente);

            return pago_realizado;
        } else {
            console.log("El pago no esta completo, porfavor completar el pago")
        }
    }

    function asignar_tecnicos(){
        let marca_asignada=registro_clientes.marca_telefono;
        let total_apagar_cliente;
        switch (marca_asignada) {
            case marca_asignada=="Apple":
                let tecnico1= prompt ("Ingrese el costo de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico1)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="Samsung":
                let tecnico2= prompt ("Ingrese el costo de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico2)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="Motorola":
                let tecnico3= prompt ("Ingrese el costo de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico3)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="Huawei":
                let tecnico4= prompt ("Ingrese el costo de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico4)+pagos.pago
                return total_apagar_cliente;
                break;
            case marca_asignada=="Google":
                let tecnico5= prompt ("Ingrese el costo de la reparacion: ");
                total_apagar_cliente= new tecnicos(tecnico5)+ pagos.pago
                return total_apagar_cliente;
                break;
            default:
                console.log("No podemos repararlo, tecnico no disponible "+registro_clientes.marca_telefono)
                break;
        }
    }

    function ver_estado() {
        if (registro_clientes.clientes!= null) {
            console.log("El cliente ya esta registrado")
        } else if (primera_revision.diagnostico1!=null){
            console.log("El celular ha sido diagnosticado")
        } else if (registro_pagos.pago_realizado!=null){
            console.log("El cliente ha pagado")
        } else if (asignar_tecnicos.total_apagar_cliente!= null){
            console.log("El celular esta listo para ser recogido ")
            if (registro_pagos.pago_cliente<= asignar_tecnicos.total_apagar_cliente) {
                console.log("El cliente tiene deuda, porfavor revise el pago" (asignar_tecnicos.total_apagar_cliente-registro_pagos.pago_cliente))
            }
        }
    }

    return {
        init: function (parametros) {
            nombre = parametros.Nombre;
            ubicacion=parametros.Ubicacion;
            configurar();
            eventos();
        },
    };
}();
class clientes{
    constructor(nombre,apellido,dni,marca_,imei){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni
        this.marca_telefono=marca_telefono;
        this.imei=imei;
    }
};
class diagosntico{
    constructor(revison1){
        this.revison1=revison1;
    }
}
class pagos{
    constructor(pago,pago_cliente){
        this.pago=pago
        this.pago_cliente=pago_cliente;
    }
};
class tecnicos {
    constructor(tecnico1,tecnico2,tecnico3,tecnico4,tecnico5 ){
        this.tecnico1=tecnico1;
        this.tecnico2=tecnico2;
        this.tecnico3=tecnico3;
        this.tecnico4=tecnico4;
        this.tecnico5=tecnico5;
    }
}