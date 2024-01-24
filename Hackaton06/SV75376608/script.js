///Parte  1
let btnDiagnosticar = document.getElementById("btn-diagnosticar")
let modal;


function abrirModal() {
    myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
        keyboard: false
    })
    myModal.show();
}



///Parte 2 
let arrCarrito = [];
let arrPiezas=[];

const reparacionCelular = function () {
    function cargarPiezas(){
        arrPiezas = [
            {
                nombre: "Pantalla",
                precio: 100.00,
                img: "patallaFix.jpg"
            },
            {
                nombre: "Puerto Carga",
                precio: 70.00,
                img: "puertoCarga.jpg"
            },
            {
                nombre: "Bateria",
                precio: 120.00,
                img: "bateryFix.jpg"
            }
        ]
    }

    function dibujarRepuestos(){
        let strHtml = ""
        arrPiezas.forEach(element=>{
            console.log(element)
            strHtml +=`<div class="col-md-4 col-sm-6">
            <div class="product-grid" style="display: flex;
            flex-direction: column;
            justify-content: center;
            height : 50vh" >
                <div class="product-image" >
                    <a href="#">
                        <img class="pic-1" src="img/${element.img}">
                        <img class="pic-2" src="img/${element.img}">
                    </a>
                    <ul class="social">
                        <li><a onclick="agregarPiezas('${element.nombre}')" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">${element.nombre}</a></h3>
                    <div class="price">${element.precio}
                    </div>
                </div>
            </div>
        </div>`;
        });

        let divRepuestos = document.getElementById("repuestos");
        divRepuestos.innerHTML=strHtml;
    }



    
function cargarRespuestos(){

        console.log("con algo", arrCarrito)
        let strHtml ="";
        let total = 0;
        arrCarrito = JSON.parse( localStorage.getItem("piezas"))
        
        if(arrCarrito == null){
            console.log("vacio",arrCarrito)
        }else{
            arrCarrito.forEach(element => {
                strHtml+=`<li class="list-group-item d-flex justify-content-between align-items-center">
                ${element.nombre}
                <span class="badge badge-primary badge-pill" style="color: black;">$${element.precio}</span>
            </li>`;
                total+=element.precio;
            });
            let lstPiezas = document.getElementById("lstPiezas");
            lstPiezas.innerHTML = strHtml;
            document.getElementById("total").innerText = `Total: $${total}`
        }

        
    
}


    return {
        init: function () {
            cargarPiezas();
            console.log(arrPiezas)
            dibujarRepuestos();
            console.log()
            cargarRespuestos;
        }
    };
}();


function agregarPiezas(nombre){

    if(arrCarrito.length == 0){
        console.log("vacio")
    }
    
    arrPiezas.forEach(element => {
        if(element.nombre === nombre){
            arrCarrito.push(element);
           
        }
    });

    let strHtml ="";
    let total = 0;
    arrCarrito.forEach(element => {
        strHtml+=`<li class="list-group-item d-flex justify-content-between align-items-center">
        ${element.nombre}
        <span class="badge badge-primary badge-pill" style="color: black;">$${element.precio}</span>
    </li>`;
        total+=element.precio;
    });
    let lstPiezas = document.getElementById("lstPiezas");
    lstPiezas.innerHTML = strHtml;
    document.getElementById("total").innerText = `Total: $${total}`
    console.log(arrCarrito)
    localStorage.setItem("piezas", JSON.stringify(arrCarrito));
    console.log("carrito",arrCarrito)
}


btnDiagnosticar.addEventListener("click", () => {
    let nroSerie = document.getElementById("nro-serie").value
    let imei = document.getElementById("imei").value
    let diagnostico = document.getElementById("diagnostico").value
    let autorizacion = document.getElementById("autorizacion")
    let alert = document.getElementById("alert")
    let resultado = document.getElementById("resultado")
    

    if (!autorizacion.checked) {
        alert.style.display = "block"
        return
    } else {
        abrirModal()
        console.log(strHtmlPiezas)
        arrCarrito.forEach(element => {
            strHtmlPiezas += `<p> ${element} </p>`
        })
        console.log(strHtmlPiezas)
        alert.style.display = "none"
        resultado.innerText = `El diagnostico para el celular con el ${imei} y  con el Nro. :${nroSerie} es ${diagnostico} .La Piezas a utilizar serán `
            
    }
})
