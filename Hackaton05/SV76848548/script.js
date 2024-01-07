class Telefono {
    constructor(numeroSerie, IMEI, reportado) {
      this.numeroSerie = numeroSerie;
      this.IMEI = IMEI;
      this.reportado = reportado;
    }
  }

  class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }

  class Reparacion {
    constructor(telefono, tecnico, repuestos) {
      this.telefono = telefono;
      this.tecnico = tecnico;
      this.repuestos = repuestos;
      this.diagnostico = null;
      this.autorizacion = false;
      this.abono = 0;
    }

    obtenerAutorizacion(autorizacion,abono) {
      this.autorizacion = autorizacion;
      this.abono = abono;
    }
  }

  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }

    tieneSkills(telefono) {
      return this.skills.includes(telefono.marca);
    }
  }

  function iniciarReparacion() {
    const numeroSerie = prompt('Ingrese el número de serie del teléfono:')
    const IMEI = prompt('Ingrese el IMEI del teléfono:')
    let reportado = null
    let bandera = false
    do {
        reportado = prompt('El celular esta reportado? (responda con S o N)')
        if(reportado == 'N' || reportado == 'n' || reportado == 'S' || reportado == 's'){
            bandera = true
        }
    } while (!bandera)

    if(reportado == 'S' || reportado == 's'){
        alert('El teléfono está reportado y no puede acceder al servicio de reparación.')
        return false
    }

    const telefono = new Telefono(numeroSerie, IMEI, reportado)
    const tecnico = new Tecnico('Técnico x', ['SAMSUNG', 'XIAOMI', 'IPHONE', 'HUAWEI'])
    const repuestos = ['Pantalla','Parlante','Entrada de carga', 'Batería']
    const reparacion = new Reparacion(telefono, tecnico, repuestos)
    let autorizacion = null
    bandera = false
    do {
        autorizacion = prompt('Usted Autoriza la revision del celular? (responda con S o N)')
        if(autorizacion == 'N' || autorizacion == 'n' || autorizacion == 'S' || autorizacion == 's'){
            bandera = true
        }
    } while (!bandera);

    if(autorizacion == 'S' || autorizacion == 's'){
        const abono = parseFloat(prompt('Ingrese el abono (50% de la reparación):'))
        reparacion.obtenerAutorizacion(true,abono)
    }else{
        reparacion.obtenerAutorizacion(false,0)
    }
    
    document.getElementById('message').innerHTML = '<h2>Estado del equipo:</h2><pre>' + JSON.stringify(reparacion, null, 2) + '</pre>'

  }