class Telefono {
    constructor(numeroSerie, imei, marca, modelo, reportado) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.reportado = reportado;
        this.diagnostico = "";
        this.autorizacion = false;
        this.abono = 0;
        this.repuestos = [];
        this.estado = "En espera de revisión";
    }
}

class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills;
    }

    puedeReparar(telefono) {
        return this.skills.includes(telefono.marca);
    }
}

class Reparacion {
    constructor(telefono, tecnico) {
        this.telefono = telefono;
        this.tecnico = tecnico;
        this.estado = "En revisión";
    }

    realizarPrimeraRevision(diagnostico) {
        this.telefono.diagnostico = diagnostico;
        this.estado = "Esperando autorización y abono";
        console.log(`Estado actual: ${this.estado}`);
    }

    obtenerAutorizacionYAbono(autorizacion, abono) {
        if (autorizacion && abono >= 0.5) {
            this.telefono.autorizacion = true;
            this.telefono.abono = abono;
            this.estado = "En reparación";
            console.log(`Estado actual: ${this.estado}`);
        } else {
            this.estado = "Reparación no autorizada o abono insuficiente";
            console.log(`Estado actual: ${this.estado}`);
        }
    }

    agregarRepuesto(repuesto) {
        this.telefono.repuestos.push(repuesto);
        console.log(`Repuesto agregado: ${repuesto}`);
    }

    finalizarReparacion() {
        this.estado = "Reparación completada";
        console.log(`Estado actual: ${this.estado}`);
    }
}

document.getElementById("iniciarReparacion").addEventListener("click", () => {
    const numeroSerie = document.getElementById("numeroSerie").value;
    const imei = document.getElementById("imei").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const reportado = document.getElementById("reportado").checked;

    const telefono = new Telefono(numeroSerie, imei, marca, modelo, reportado);
    const tecnico = new Tecnico("Juan", ["Samsung"]);

    const reparacion = new Reparacion(telefono, tecnico);

    reparacion.realizarPrimeraRevision("Problema en la pantalla");

    reparacion.obtenerAutorizacionYAbono(true, 0.6);

    reparacion.agregarRepuesto("Pantalla nueva");
    reparacion.agregarRepuesto("Batería nueva");

    reparacion.finalizarReparacion();
});