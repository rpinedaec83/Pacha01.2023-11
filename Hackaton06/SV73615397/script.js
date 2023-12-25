document.addEventListener("DOMContentLoaded", function(e) {
    loadSelectTecnicos();
    loadSelectCelulares();
});
class Telefono{
    constructor(numeroTelefono, imei, marca, modelo, estado = "En Revisión", diagnostico = "") {
        this.numeroTelefono = numeroTelefono;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
        this.diagnostico = diagnostico;
    }

    realizarRevision(tecnico,diagnostico){
        const revision = new Revision(tecnico);
        revision.realizarDiagnostico(this,diagnostico);
    }

    static listar(){
        return localStorage.getItem('celulares')!== null ? JSON.parse(localStorage.getItem('celulares')) : [];
    }
}
class Cliente {
    constructor(nombre, autorizacion, abono,numeroTelefono) {
      this.nombre = nombre;
      this.autorizacion = autorizacion;
      this.abono = abono
      this.numeroTelefono = numeroTelefono
    }
    static listar(){
        return localStorage.getItem('clientes') !== null ? JSON.parse(localStorage.getItem('clientes')):[];
    }
  }
class Revision{
    constructor(tecnico){
        this.fecha = Date.now();
        this.tecnico = tecnico;
        this.telefono = null;
        this.diagnostico = "";
        this.primeraRevision = true;
    }
    
    realizarDiagnostico(telefono,diagnostico){
        let esPrimeraRevision = this.listar() && !this.listar().find(r=>r.telefono.numeroTelefono === telefonoEncontrado.numeroTelefono);
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.primeraRevision = esPrimeraRevision;
        this.estado = esPrimeraRevision ? 'Reportado' : 'En revision';
    }

    static listar(){
        return localStorage.getItem('revisiones') !== null ? JSON.parse(localStorage.getItem('revisiones')):[];
    }
}
class Tecnico {
    constructor(nombre, skills) {
        this.nombre = nombre;
        this.skills = skills;
    }
    static listar(){
        return localStorage.getItem('tecnicos')!== null ? JSON.parse(localStorage.getItem('tecnicos')) : [];
    }
}

let currentArraySkills =[];

function loadSelectCelulares() {
    const selectTelefonos= document.getElementById('revisionTelefono');
    // let telefonos = localStorage.getItem('celulares')!== null ? JSON.parse(localStorage.getItem('celulares')) : [];
    selectTelefonos.innerHTML = Telefono.listar().length>0 ? `<option value=''>--------------</option>`+Telefono.listar().map(e=>`<option value="${e.imei}"> ${e.numeroTelefono} </option>`).join('') : "<option value=''>No hay tecnicos registrados</option>";
    
}
function loadSelectTecnicos(){
    const selectTecnicos = document.getElementById('revisionTecnico');
    // let tecnicos = localStorage.getItem('tecnicos')!== null ? JSON.parse(localStorage.getItem('tecnicos')) : [];
    selectTecnicos.innerHTML = Tecnico.listar().length>0 ? `<option value=''>--------------</option>`+Tecnico.listar().map(e=>`<option value="${e.nombre}"> ${e.nombre} </option>`).join('') : "<option value=''>No hay tecnicos registrados</option>";
    
}
function loadSkillsByTecnico(event){
    let tecnicoSeleccionado =  Tecnico.listar().find(x=>x.nombre === event.target.value);
    const divSkills = document.getElementById('skillsTecnicoSeleccionado');
    if(tecnicoSeleccionado !== undefined){
        divSkills.innerHTML = tecnicoSeleccionado.skills.length>0 ? tecnicoSeleccionado.skills.map(e=>`<li> ${e} </li>`).join('') : "";
    }
    else{
        divSkills.innerHTML ="";
    }
}
function loadPhoneInfo(event) {
let imei = event.target.value;
const outputDiv = document.getElementById('outputTelefono');    
phone = localStorage.getItem('celulares') !== null ? JSON.parse(localStorage.getItem('celulares')).find(ph=> ph.imei === imei) : null;
if(phone !== undefined){
    outputDiv.innerHTML = "";
    phoneInfo = `
            <p><strong>Número de telefono:</strong> ${phone.numeroTelefono} </p>
            <p><strong>IMEI:</strong>  ${phone.imei} </p>
            <p><strong>Marca:</strong>  ${phone.marca} </p>
            <p><strong>Modelo:</strong>  ${phone.modelo} </p>
            <p><strong>Estado:</strong>  ${phone.estado} </p>
    `;
    outputDiv.innerHTML += phoneInfo;
    document.getElementById('outputTelefono').style.display = 'block';
}
else{
    document.getElementById('outputTelefono').style.display = 'none';
}
}

function submitRevision(){
    try {
        listRevisiones = Revision.listar();
        
        tecnicoEncontrado = Tecnico.listar().find(t => t.nombre === document.getElementById('revisionTecnico').value);
        telefonoEncontrado = Telefono.listar().find(tlf => tlf.imei === document.getElementById('revisionTelefono').value);

        if(tecnicoEncontrado === undefined){
            throw new Error("Seleccione un Técnico");
        }
        if(telefonoEncontrado === undefined){
            throw new Error("Seleccione un Telefono");
        }

        diagnosticoIngresado = document.getElementById('revisionDiagnostico').value;

        if(diagnosticoIngresado === "        " || diagnosticoIngresado === ""){
            throw new Error("Ingrese un diagnostico");
        }

        console.log(tecnicoEncontrado);
        console.log(telefonoEncontrado);

        let revisionRealizada = telefonoEncontrado.realizarRevision(tecnicoEncontrado,diagnosticoIngresado);
        listRevisiones.push(revisionRealizada);
        console.log(revisionRealizada);
        localStorage.setItem('revisiones',JSON.stringify(listRevisiones));
        
    } catch (error) {
        Swal.fire(`Error:${error.message}`, "", "error");
    }
}
function submitPhoneForm() {
    try {
        let phoneNumber = document.getElementById('phoneNumber').value;
        let imei = document.getElementById('imei').value;
        let marca = document.getElementById('brand').value;
        let modelo = document.getElementById('model').value;

        if(phoneNumber.length === 0 || imei.length === 0 || marca.length === 0 || modelo.length === 0){throw new Error("no se aceptan campos NULOS");}
        if(Telefono.listar().find(t=>t.imei === imei || t.numeroTelefono === phoneNumber)){throw new Error("Duplicado!");}
        const objTelefono = new Telefono(phoneNumber,imei,marca,modelo)
        document.getElementById('phoneNumber').value = "";
        document.getElementById('imei').value = "";
        document.getElementById('brand').value = "";
        document.getElementById('model').value = "";
        let nombreCliente = "";
        let autoriza = null;
        let abono = 0;
        Swal.fire({
            title: "Ingresa tu nombre:",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Ingresar",
            showLoaderOnConfirm: true,}).then((result) => {
            console.log(result);
            console.log(result.value);
            if(result.isConfirmed && result.value!==""){
                nombreCliente = result.value;
                console.log(nombreCliente);
                Swal.fire({
                    title: "Autoriza la revisión?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "SI",
                    denyButtonText: `NO`
                }).then((result) => {
                    autoriza = result.isConfirmed;
                    if (result.isConfirmed) {
                        Swal.fire({
                            title:"Ingrese el '%' abonado",
                            input: 'range',
                            inputAttributes: {
                              min: 0,
                              max: 100,
                            },
                            inputValue: 25
                          }).then((result)=>{
                            console.log(result);
                            abono = Number(result.value);
                            if(Number(result.value)>=50 && autoriza){
                                const nuevoCliente = new Cliente(nombreCliente,autoriza,abono,phoneNumber);
                                localStorage.setItem('clientes', JSON.stringify(Cliente.listar().push(nuevoCliente)));
                                localStorage.setItem('celular', JSON.stringify(objTelefono));
                                listCelulares = localStorage.getItem('celulares') !== null ? JSON.parse(localStorage.getItem('celulares')):[];
                                listCelulares.push(objTelefono);
                                localStorage.setItem('celulares', JSON.stringify(listCelulares));
                            }
                          })
                    }
                });    
            }
          });
        loadSelectTecnicos();
        loadSelectCelulares();
    } catch (error) {
        Swal.fire(`Error:${error.message}`, "", "error");
    }
}
function agregarSkill(event) {
    event.preventDefault();
    try {
        let skill = document.getElementById('skillTecnico').value;
        let nombreTecnico = document.getElementById('tecnicoNombre').value;

        if(skill !== ""){
            Swal.fire({
                title: "Está de acuerdo con ingresar esta skill?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "SI",
                denyButtonText: `NO`
            }).then((result) => {
                if (result.isConfirmed) {
                    currentArraySkills.push(skill);
                    displaySkills(currentArraySkills);
                }
                document.getElementById('skillTecnico').value = "";
            });
        }
        else if (skill === "" || nombreTecnico === ""){
            throw new Error("No se aceptan nulos")
        }
    } catch (error) {
        Swal.fire(`Error:${error.message}`, "", "error");
    }
}
function displaySkills(array) {
    const divSkills = document.getElementById('skillsTecnico');
    divSkills.innerHTML = array.length>0 ? array.map(e=>`<li> ${e} </li>`).join('') : "";
}
function submitTecnico(){
    try {
        let nombre = document.getElementById('tecnicoNombre').value;
        if(nombre==="" || currentArraySkills.length === 0){throw new Error("No se aceptan campos Nulos")}
        const nuevoTecnico = new Tecnico(nombre,currentArraySkills);
        let tecnicos = localStorage.getItem('tecnicos')!== null ? JSON.parse(localStorage.getItem('tecnicos')) : [];
        tecnicos.push(nuevoTecnico);
        localStorage.setItem('tecnicos', JSON.stringify(tecnicos));
        currentArraySkills = [];
        displaySkills(currentArraySkills);
        loadSelectTecnicos();
        loadSelectCelulares();
    } catch (error) {
        Swal.fire(`Error:${error.message}`, "", "error");
    }
}