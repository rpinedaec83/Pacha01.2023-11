class Telefono {
    constructor(numeroSerie, imei, marca) {
      this.numeroSerie = numeroSerie;
      this.imei = imei;
      this.marca = marca;
      this.reportado = false;
      this.diagnostico = '';
    }

    primeraRevision() {
      if (!this.reportado) {
        this.diagnostico = 'Primera revision realizada corretamente.'
      } else {
        alert('El telofono esta reportado. Nose pudo realizar la revision.')
      }
    }

  }

  class Cliente {
    constructor(nombre, autorizacion, abono) {
      this.nombre = nombre;
      this.autorizacion = autorizacion;
      this.abono = abono
    }
  }

  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  }

  class Reparacion {
    constructor(telefono, cliente, tecnico) {
      this.telefono = telefono;
      this.cliente = cliente;
      this.tecnico = tecnico;
      this.repuestos = [];
      this.estado = 'En espera de la autorizacion.'
    }

    agegrarRepuestos(repuesto) {
      this.repuestos.push(repuesto)
      console.log('Se agrego el repuesto: ', repuesto)
    }

    verEstado() {
      console.log('Estado del equipo', this.estado)
    }

  }
  const listReparaciones = [];
  const telefono1 = new Telefono('123', '987654321', 'Samsung')
  const telefono2 = new Telefono('321', '786543264', 'Xiaomi')
  const telefono3 = new Telefono('125', '125364585', 'Apple')
  const client1 = new Cliente('Erick', true, 0.5)
  const client2 = new Cliente('Juan', false, 0.5)
  const tecnico1 = new Tecnico('Johana', ['Samsung'])
  const tecnico2 = new Tecnico('Miguel', ['Xiaomi'])
  const tecnico3 = new Tecnico('Miguel', ['Apple'])


  const reparacion1 = new Reparacion(telefono1, client1, tecnico1);

  const reparacion2 = new Reparacion(telefono2, client2, tecnico2);

  const reparacion3 = new Reparacion(telefono3, client2, tecnico3);




  listReparaciones.push(reparacion1);
  listReparaciones.push(reparacion2);
  listReparaciones.push(reparacion3);

  reparacion1.verEstado()

  if(client1.autorizacion && client1.abono === 0.5) {
    reparacion1.estado = 'En reparacion';

    telefono1.primeraRevision();

    reparacion1.agegrarRepuestos('Pantalla nueva')


    reparacion1.estado = 'Finalizado'
    
    reparacion1.verEstado()

  } else {
    alert('El usuario debe validar su permiso y abonar el 50%')
  }

  const storage  = window.localStorage || window.sessionStorage;

  storage.setItem('reparacion', JSON.stringify(listReparaciones));

  const reparacion = JSON.parse(localStorage.getItem('reparacion'))
  document.addEventListener("DOMContentLoaded", function () {
    const reparacionDiv = document.getElementById('reparacion');
  
    if (reparacion.length === 0) {
      reparacionDiv.innerHTML = '<p>No hay reparaciones. </p>';
    } else {
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
  
      const headers = ['Teléfono', 'Cliente', 'Técnico'];
  
      const headerRow = document.createElement('tr');
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
          reparacion.forEach(element => {
        const row = document.createElement('tr');
  
        const telefonoCell = document.createElement('td');
        telefonoCell.textContent = element.telefono.numeroSerie;
        row.appendChild(telefonoCell);
  
        const clienteCell = document.createElement('td');
        clienteCell.textContent = element.cliente.nombre;
        row.appendChild(clienteCell);
  
        const tecnicoCell = document.createElement('td');
        tecnicoCell.textContent = element.tecnico.nombre;
        row.appendChild(tecnicoCell);
  
        tbody.appendChild(row);
      });
  
      table.appendChild(tbody);
      reparacionDiv.appendChild(table);
    }
  });