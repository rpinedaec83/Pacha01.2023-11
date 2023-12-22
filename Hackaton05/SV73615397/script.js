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
class Revision{
    constructor(tecnico){
        this.fecha = Date.now();
        this.tecnico = tecnico;
        this.telefono = null;
        this.diagnostico = "";
        this.primeraRevision = true;
    }
    
    realizarDiagnostico(telefono,diagnostico){
        let esPrimeraRevision = ListRevisiones && !ListRevisiones.find(r=>r.telefono === telefonoEncontrado);
        this.telefono = telefono;
        this.diagnostico = diagnostico;
        this.primeraRevision = esPrimeraRevision;
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
if(phone !== null){
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
    ListRevisiones = Revision.listar();

    tecnicoEncontrado = Tecnico.listar().find(t => t.nombre === document.getElementById('revisionTecnico').value);
    telefonoEncontrado = Telefono.listar().find(tlf => tlf.imei === document.getElementById('revisionTelefono').value);
    diagnosticoIngresado = document.getElementById('revisionDiagnostico').value;

    console.log(tecnicoEncontrado);
    console.log(telefonoEncontrado);

    let revisionRealizada = telefonoEncontrado.realizarRevision(tecnicoEncontrado,diagnosticoIngresado);

    ListRevisiones.push(revisionRealizada);
    console.log(revisionRealizada);
    localStorage.setItem('revisiones',JSON.stringify(ListRevisiones));
}
function submitPhoneForm() {
    let phoneNumber = document.getElementById('phoneNumber').value;
    let imei = document.getElementById('imei').value;
    let marca = document.getElementById('brand').value;
    let modelo = document.getElementById('model').value;

    const phoneInfo = {
        phoneNumber,
        imei,
        brand,
        model,
    };
    const objTelefono = new Telefono(phoneNumber,imei,marca,modelo)
    document.getElementById('phoneNumber').value = "";
    document.getElementById('imei').value = "";
    document.getElementById('brand').value = "";
    document.getElementById('model').value = "";

    localStorage.setItem('celular', JSON.stringify(objTelefono));
    listCelulares = localStorage.getItem('celulares') !== null ? JSON.parse(localStorage.getItem('celulares')):[];
    listCelulares.push(objTelefono);
    localStorage.setItem('celulares', JSON.stringify(listCelulares));
}
function agregarSkill(event) {
    event.preventDefault();
    try {
        let skill = document.getElementById('skillTecnico').value;
        if(skill !== "" && confirm("Está de acuerdo con ingresar esta skill?")){
            currentArraySkills.push(skill);
            displaySkills(currentArraySkills);
            document.getElementById('skillTecnico').value = "";
        }
        else if (skill === ""){
            throw new Error("No se aceptan nulos")
        }
    } catch (error) {
        alert(`Error:${error.message}`)
    }
}
function displaySkills(array) {
    const divSkills = document.getElementById('skillsTecnico');
    divSkills.innerHTML = array.length>0 ? array.map(e=>`<li> ${e} </li>`).join('') : "";
}
function submitTecnico(){
    try {
        let nombre = document.getElementById('tecnicoNombre').value;
        if(nombre===""){throw new Error("No se aceptan campos Nulos")}
        const nuevoTecnico = new Tecnico(nombre,currentArraySkills);
        let tecnicos = localStorage.getItem('tecnicos')!== null ? JSON.parse(localStorage.getItem('tecnicos')) : [];
        tecnicos.push(nuevoTecnico);
        localStorage.setItem('tecnicos', JSON.stringify(tecnicos));
        currentArraySkills = [];
        displaySkills(currentArraySkills);
    } catch (error) {
        alert(`Error: ${error.message}`)
    }
}