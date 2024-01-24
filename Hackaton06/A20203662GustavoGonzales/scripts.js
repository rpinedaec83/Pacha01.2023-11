document.getElementById('verificacionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var numeroSerie = document.getElementById('numeroSerie').value;
    var numeroIMEI = document.getElementById('numeroIMEI').value;

    var numerosRobados = {
        '24789221796205': '162196709998896',
        '33866756120692': '600574666566432',
        '10623353783219': '080749485767112',
        '86796037074992': '517510701694452',
    };

    var esRobado = numerosRobados[numeroSerie] === numeroIMEI;
    var mensaje = esRobado ? 'El equipo celular es robado y no se puede reparar.' : 'El equipo celular no está reportado como robado.';
    almacenarInformacion(numeroSerie, numeroIMEI, esRobado);
    mostrarModal(mensaje, numeroIMEI, esRobado);
});

function almacenarInformacion(numeroSerie, numeroIMEI, esRobado) {
    var dispositivoInfo = { numeroSerie: numeroSerie, numeroIMEI: numeroIMEI };
    if (esRobado) {
        sessionStorage.setItem('dispositivoInfo', JSON.stringify(dispositivoInfo));
    } else {
        localStorage.setItem('dispositivoInfo', JSON.stringify(dispositivoInfo));
    }
}

function mostrarModal(mensaje, numeroIMEI, esRobado) {
    var modal = document.getElementById('modalAlerta');
    var span = document.getElementsByClassName('close')[0];
    var modalMensaje = document.getElementById('modalMensaje');
    var continuarBtn = document.getElementById('continuarBtn');

    modalMensaje.textContent = mensaje;
    modal.className = esRobado ? 'modal modal-red' : 'modal modal-green';
    continuarBtn.style.display = esRobado ? 'none' : 'block';

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    continuarBtn.onclick = function() {
        var informacionAdicional = document.getElementById('informacionAdicional');
        var imeiCelular = document.getElementById('imeiCelular');

        imeiCelular.value = numeroIMEI;
        informacionAdicional.style.display = "block";
        modal.style.display = "none";
    }
}

var informacionDelUsuario = {};

document.getElementById('informacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    informacionDelUsuario = {
        nombreDueno: document.getElementById('nombreDueno').value,
        telefonoCelular: document.getElementById('telefonoCelular').value,
        modeloCelular: document.getElementById('modeloCelular').value,
        imeiCelular: document.getElementById('imeiCelular').value
    };
    localStorage.setItem('informacionDelUsuario', JSON.stringify(informacionDelUsuario));
    document.getElementById('diagnosticarBtn').style.display = "block";
});

var diagnosticos = [
    "Falla en la batería: necesita ser reemplazada.",
    "Problemas con la pantalla táctil: requiere calibración.",
    "Software desactualizado: necesita actualización.",
    "Daño por agua detectado: se requiere limpieza interna."
];

document.getElementById('diagnosticarBtn').addEventListener('click', function() {
    var diagnosticoAleatorio = diagnosticos[Math.floor(Math.random() * diagnosticos.length)];
    var diagnosticoCelular = document.getElementById('diagnosticoCelular');
    var diagnosticoGuardado = document.getElementById('diagnosticoGuardado');

    diagnosticoCelular.textContent = diagnosticoAleatorio;
    diagnosticoGuardado.textContent = 'Último diagnóstico: ' + diagnosticoAleatorio;
    localStorage.setItem('ultimoDiagnostico', diagnosticoAleatorio);
    diagnosticoCelular.style.display = "block"; 

    setTimeout(function() {
        mostrarModalPostDiagnostico();
    }, 3000); 
});


function mostrarModalPostDiagnostico() {
    mostrarModal("Gracias por utilizar nuestro servicio de diagnóstico.", "", false);
}

function mostrarModalPostDiagnostico() {
    var modal = document.getElementById('modalAlerta');
    var modalMensaje = document.getElementById('modalMensaje');
    var continuarBtn = document.getElementById('continuarBtn');

    continuarBtn.style.display = 'none';

    modalMensaje.innerHTML = '¿Desea continuar con la reparación?<br><br>' +
                             '<button id="btnSi">Sí</button> ' +
                             '<button id="btnNo">No</button>';

    modal.className = 'modal';
    modal.style.display = "block";

    document.getElementById('btnSi').addEventListener('click', function() {
        modal.style.display = "none";
        mostrarSeccionCostos();
    });

    document.getElementById('btnNo').addEventListener('click', function() {
        modal.style.display = "none";
        window.location.reload();
    });
}


function mostrarSeccionCostos() {
    var diagnostico = document.getElementById('diagnosticoCelular').textContent;
    var seccionCostos = document.getElementById('seccionCostos');
    var costoRepuesto, nombreRepuesto, costoServicio, tecnico;

    switch (diagnostico) {
        case "Falla en la batería: necesita ser reemplazada.":
            nombreRepuesto = "Batería";
            costoRepuesto = Math.random() * 100; 
            tecnico = "Técnico en Baterías";
            break;
        case "Problemas con la pantalla táctil: requiere calibración.":
            nombreRepuesto = "Pantalla";
            costoRepuesto = Math.random() * 200;
            tecnico = "Técnico en Pantallas";
            break;
        case "Software desactualizado: necesita actualización.":
            nombreRepuesto = "";
            costoRepuesto = 0;
            tecnico = "Técnico de Software";
            break;
        case "Daño por agua detectado: se requiere limpieza interna.":
            nombreRepuesto = "Capacitor";
            costoRepuesto = Math.random() * 150;
            tecnico = "Técnico de Hardware";
            break;
        default:
            nombreRepuesto = "";
            costoRepuesto = 0;
            tecnico = "";
    }

    costoServicio = Math.random() * 200;
    var montoTotal = costoRepuesto + costoServicio;
    var montoAbonar = montoTotal / 2;

    document.getElementById('costoRepuesto').textContent = 'Costo por el repuesto (' + nombreRepuesto + '): ' + costoRepuesto.toFixed(2) + ' USD';
    document.getElementById('costoServicio').textContent = 'Costo por el servicio de reparación: ' + costoServicio.toFixed(2) + ' USD';
    document.getElementById('montoTotal').textContent = 'Monto total: ' + montoTotal.toFixed(2) + ' USD';
    document.getElementById('montoAbonar').textContent = 'Monto a abonar para empezar la reparación (50%): ' + montoAbonar.toFixed(2) + ' USD';
    document.getElementById('tecnicoSeleccionado').textContent = 'Técnico Seleccionado: ' + tecnico;
    document.getElementById('nombreAutorizacion').textContent = informacionDelUsuario.nombreDueno;

    document.getElementById('seccionCostos').style.display = "block";
    
}

document.getElementById('btnComenzarReparacion').addEventListener('click', function() {
    document.getElementById('seccionProgresoReparacion').style.display = 'block';
    iniciarProgreso('progreso1', function() {
        iniciarProgreso('progreso2', function() {
            iniciarProgreso('progreso3', function() {
                iniciarProgreso('progreso4', function() {
                    mostrarModalFinal();
                });
            });
        });
    });
});

function iniciarProgreso(id, callback) {
    var elem = document.getElementById(id).getElementsByClassName('progreso')[0];
    var width = 0;
    var idInterval = setInterval(frame, 100); 

    function frame() {
        if (width >= 100) {
            clearInterval(idInterval);
            if (callback) callback();
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function mostrarModalFinal() {
    var modal = document.getElementById('modalAlerta');
    var modalMensaje = document.getElementById('modalMensaje');

    modalMensaje.innerHTML = 'Reparación exitosa completada. Ya puede recoger su equipo.<br><br>' +
                             '<button id="btnAceptar">Aceptar</button>';

    modal.className = 'modal';
    modal.style.display = "block";

    document.getElementById('btnAceptar').addEventListener('click', function() {
        modal.style.display = "none";
        resetearPagina(); 
    });
}

function mostrarInformacionAlmacenada() {
    console.log('Información Almacenada en WebStorage:');
    var dispositivoInfo = sessionStorage.getItem('dispositivoInfo');
    var infoUsuario = localStorage.getItem('informacionDelUsuario');
    var ultimoDiagnostico = localStorage.getItem('ultimoDiagnostico');

    console.log('Información del Dispositivo:', dispositivoInfo ? JSON.parse(dispositivoInfo) : 'No hay datos');
    console.log('Información del Usuario:', infoUsuario ? JSON.parse(infoUsuario) : 'No hay datos');
    console.log('Último Diagnóstico:', ultimoDiagnostico ? ultimoDiagnostico : 'No hay datos');
}

mostrarInformacionAlmacenada();

function resetearPagina() {
    localStorage.removeItem('informacionDelUsuario');
    localStorage.removeItem('ultimoDiagnostico');
    sessionStorage.removeItem('dispositivoInfo');
    document.getElementById('numeroSerie').value = '';
    document.getElementById('numeroIMEI').value = '';
    document.getElementById('informacionAdicional').style.display = 'none';
    document.getElementById('seccionCostos').style.display = 'none';
    document.getElementById('seccionProgresoReparacion').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
}

document.getElementById('btnAceptar').addEventListener('click', function() {
    var modal = document.getElementById('modalAlerta');
    modal.style.display = "none";
    resetearPagina();
});









