class Telefono {
    constructor(numeroSerie, IMEI) {
      this.numeroSerie = numeroSerie;
      this.IMEI = IMEI;
      this.reportado = false;
    }
  
    verificarReporte() {
      // Simulación de la lógica para verificar si el teléfono está reportado
      // En una implementación real, esta lógica debería ser más robusta
      return !this.reportado;
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
  
    realizarRevision(diagnostico) {
      // Lógica para realizar la revisión del teléfono
      this.diagnostico = diagnostico;
    }
  
    obtenerAutorizacion(abono) {
      // Lógica para obtener la autorización del usuario y el abono del 50%
      this.autorizacion = true;
      this.abono = abono;
    }
  }
  
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    tieneSkills(telefono) {
      // Lógica para verificar si el técnico tiene las habilidades necesarias
      return this.skills.includes(telefono.marca);
    }
  }
  
  function iniciarReparacion() {
    const numeroSerie = prompt('Ingrese el número de serie del teléfono:');
    const IMEI = prompt('Ingrese el IMEI del teléfono:');
    const nombreUsuario = prompt('Ingrese su nombre:');
  
    const telefono = new Telefono(numeroSerie, IMEI);
    const usuario = new Usuario(nombreUsuario);
    const tecnico = new Tecnico('Técnico 1', ['Samsung', 'iPhone']);
    const repuestos = ['Pantalla', 'Batería'];
  
    const reparacion = new Reparacion(telefono, tecnico, repuestos);
  
    if (telefono.verificarReporte()) {
      const diagnostico = prompt('Realice la revisión y escriba el diagnóstico:');
      reparacion.realizarRevision(diagnostico);
  
      const abono = parseFloat(prompt('Ingrese el abono (50% de la reparación):'));
      reparacion.obtenerAutorizacion(abono);
  
      // Mostrar el estado del equipo en diferentes estaciones de trabajo
      document.getElementById('output').innerHTML = '<h2>Estado del equipo:</h2><pre>' + JSON.stringify(reparacion, null, 2) + '</pre>';
  
      // Guardar en WebStorage (localStorage)
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('reparacion', JSON.stringify(reparacion));
      }
    } else {
      alert('El teléfono está reportado y no puede acceder al servicio de reparación.');
    }
  }