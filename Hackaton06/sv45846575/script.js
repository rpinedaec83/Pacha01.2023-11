
let btnDiagnosticar = document.getElementById("btn-diagnosticar")
let modal;

function abrirModal() {
    myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {
        keyboard: false
    })
    myModal.show();
}

btnDiagnosticar.addEventListener("click", () => {

    let nroSerie = document.getElementById("nro-serie").value
    let imei = document.getElementById("imei").value
    let diagnostico = document.getElementById("diagnostico").value
    let repuestos = document.getElementById("repuestos").value
    let autorizacion = document.getElementById("autorizacion")
    let alert = document.getElementById("alert")
    let resultado = document.getElementById("resultado")

    if (!autorizacion.checked) {
        alert.style.display = "block"
        return
    } else {
        abrirModal()
        alert.style.display = "none"
        resultado.innerText = `El diagnostico para el celular con numero ${imei} y  con serie. :${nroSerie} es ${diagnostico}` +
            `, se necesitan los siguientes repuestos ${repuestos}`
    }
    localStorage.setItem("Verificar nro-serie ", JSON.stringify(nroSerie));
    localStorage.setItem("Verificar IMEI ", JSON.stringify(imei));
    localStorage.setItem("Verificar repuestos ", JSON.stringify(repuestos));
    localStorage.setItem("Verificar diagnostico ", JSON.stringify(diagnostico));
    
        });



