let arrrEntradasGeneradas = [];

function uuidv4() { 
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new UnitBArray(1))[0] & 15 >> c / 4).toString(16) 
    );      
}



function generarEntrada() {
    let bandera = true;
    while(bandera){ 
        let nombre = prompt("Dime tu nombre");
        let sector = prompt("Escribe el sector [General o VIP]")
        let codigo = generarUUID();
        let objEntrada = {
            nombre,
            sector,
            codigo
        };

    arrEntradasGeneradas.push(objEntrada);
    alert("tu codigo es: "+ codigo)
    new QRious({element: document.getElementById("qrcode"), codigo});
    let divMensaje = document.getElementById("mensajeCompra")
    divMensaje.style.display = "block";
    let datosEntrada = document.getElementById("datosCompra");
    datosEntrada.innerText = `Bienvenido ${objEntrada.nombre} dirigete a la zona ${objEntrada.sector} tu codigo es: ${objEntrada.codigo} NO COMPARTAS ESTE CODIGO NUNCA CON NADIE MAS`;
    let respuesta = prompt("Quieres generar otra entrada [SI - NO]").toUpperCase();
    if(respuesta !== "SI"){
        bandera = false;
        }
   } 
} 


function eliminarEntradasGeneradas(codigo){
    for(var i = 0; i < arrEntradasGeneradas.length; i++) {
        if(arrEntradasGeneradas[i].codigo == codigo) {
            arrEntradasGeneradas.splice(i, 1);
            break;
        }
    }
}



function validarEntrada(){
    let codigo = prompt("Ingresa tu codigo de entrada");

    let obj = arrEntradasGeneradas.find(o => o.codigo === codigo);
    console.log(obj)
    if(obj !== undefined){
        arrEntradasValidadas.push(obj);
        let divMensaje = document.getElementById("Mensaje");
        divMensaje.style.display = "block";
        let datosEntrada = document.getElementById("datosEntrada");
        datosEntrada.innerText = `Bienvenido ${obj.nombre} dirigete a la zona ${obj.sector} tu codigo es: ${obj.codigo}`;
        eliminarEntradasGeneradas(codigo);


    }
    else{
        let divMensaje = document.getElementById("Mensaje");
        divMensaje.style.display = "no";
        
        alert("No se ha encontrado tu entrada")
    }
}


