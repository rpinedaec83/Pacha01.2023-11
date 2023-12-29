class Telefono 
{
    constructor(imei, marca)
     {
        this.imei = imei;
        this.marca = marca;
        this.reportado = false;
    }
}

class Tecnico
 {
    constructor(nombre, skills)
    {
        this.nombre = nombre;
        this.skills = skills;
    }
}

class FalloHardware 
{
    constructor(bateria, pantalla, botoneslaterales, camara, ram) 
    {
        this.bateria = bateria;
        this.pantalla = pantalla;
        this.botoneslaterales = botoneslaterales;
        this.camara = camara;
        this.ram = ram;
    }
}

class NuevosFallosHardware 
{
    constructor(altavoz, microfono, puertodecarga, puertosim, puertoaux) 
    {
        this.altavoz = altavoz;
        this.microfono = microfono;
        this.puertodecarga = puertodecarga;
        this.puertosim = puertosim;
        this.puertoaux = puertoaux;
    }
}




document.addEventListener("DOMContentLoaded", () => 
{
    const iniciarReparacionButton = document.getElementById("iniciarReparacion");
    const reiniciarSistemaButton = document.getElementById("reiniciarSistema");

    iniciarReparacionButton.addEventListener("click", iniciarReparacion);
    reiniciarSistemaButton.addEventListener("click", reiniciarSistema);

    const telefonos = [];

    

     //PROCEDIMIENTO 1
    async function iniciarReparacion()
     {
        // Solicitar el número de IMEI a través de un cuadro de diálogo
        const imei = prompt("Ingrese el número de IMEI:");

        if (!imei) 
        {
            alert("El IMEI es obligatorio. No se puede proceder con la reparación.");
            return;
        }

        // Crear un nuevo objeto Telefono con el IMEI ingresado
        const telefonoNuevo = new Telefono(imei, "");

        // Agregar el nuevo teléfono al arreglo de telefonos
        telefonos.push(telefonoNuevo);

        const infoContainer = document.getElementById("infoReparacion");



        // Preguntar  si el teléfono está reportado a través de un cuadro de diálogo
        telefonoNuevo.reportado = await confirmDialog("¿El teléfono está reportado?", "Sí", "No");

        if (telefonoNuevo.reportado) 
        {
            alert("Lo sentimos, no se puede reparar un teléfono reportado.");
            return;
        }

        // Preguntar la marca del teléfono a través de un cuadro de diálogo
        const esIOS = await confirmDialog("¿Qué tipo de marca es tu celular: Android o iOS?", "Android", "iOS");
        telefonoNuevo.marca = esIOS ? "Android" : "iOS";

        // Elegir un técnico aleatorio en función de la marca del teléfono
        const tecnicoAsignado = elegirTecnico(telefonoNuevo.marca);

        // Mostrar la primera información final 
        infoContainer.innerHTML = `<p>IMEI: ${telefonoNuevo.imei}</p>
                                  <p>Marca: ${telefonoNuevo.marca}</p>
                                  <p>Reportado: ${telefonoNuevo.reportado ? "Sí" : "No"}</p>
                                  <p>Técnico Asignado: ${tecnicoAsignado.nombre}</p>`;



        // Mostrar alerta de ejecución del diagnóstico 1 después de 1 segundo
        setTimeout(async () =>
         {
            alert("Ejecutando Diagnóstico 1...");


            // MOSTRAR DIAGNOSTICO1
            await mostrarDiagnosticoHardware(telefonoNuevo.marca);

            // Preguntar si desea iniciar la reparación
            const iniciarReparacion = await confirmDialog("¿Quieres iniciar con la reparación del celular?", "Sí", "No");

            if (iniciarReparacion) 
            {
                let abonoNum;
                do 
                {
                    const abono = prompt("Total aproximado $300. Ingrese el abono del 50% de la reparación ($150):");
                    abonoNum = parseFloat(abono);

                    if (abonoNum !== 150) 
                    {
                        alert("Debe ingresar exactamente $150 para continuar con la reparación.");
                    }
                } while (abonoNum !== 150);

                alert("La reparación se está ejecutando.");

                // MOSTRAR DIAGNOSTICO 2 NUEVAS FALLAS
                await mostrarDiagnosticoNuevasFallas();

                // Realizar reparación de las nuevas fallas
                await realizarReparacionNuevasFallas();
            } 
            else 
            {
                alert("No se procedió con la reparación.");
            }
        }, 1000);

            
          // Almacenar diagnóstico 1 en el almacenamiento web
        guardarEnAlmacenamiento("IMEI", telefonoNuevo.imei);
        guardarEnAlmacenamiento("Marca", telefonoNuevo.marca);
        guardarEnAlmacenamiento("Reportado", telefonoNuevo.reportado ? "Sí" : "No");
        guardarEnAlmacenamiento("TecnicoAsignado", tecnicoAsignado.nombre);

        
         const diagnostico1 = await obtenerDiagnosticoHardware(telefonoNuevo.marca);
        guardarEnAlmacenamiento("Diagnostico1", diagnostico1);


    }


     

     //DIAGNOSTICO 1
    async function mostrarDiagnosticoHardware(marca)
    {
        const analisisFalla = marca === "Android" ? AnalisisdeFallaAndroid : AnalisisdeFallaIOS;
        const diagnosticoAleatorio = analisisFalla[Math.floor(Math.random() * analisisFalla.length)];
    
        const infoContainer = document.getElementById("infoReparacion");
        const diagnosticoContainer = document.createElement("div");
        diagnosticoContainer.classList.add("info-container");
    
        diagnosticoContainer.innerHTML = `<p>Diagnóstico 1:</p>
                                          <p>${diagnosticoAleatorio.bateria}</p>
                                          <p>${diagnosticoAleatorio.pantalla}</p>
                                          <p>${diagnosticoAleatorio.botoneslaterales}</p>
                                          <p>${diagnosticoAleatorio.camara}</p>
                                          <p>${diagnosticoAleatorio.ram}</p>`;
    
        infoContainer.appendChild(diagnosticoContainer);
    }

    // DAIGNOSTICO 1
     async function obtenerDiagnosticoHardware(marca) 
     {
     const analisisFalla = marca === "Android" ? AnalisisdeFallaAndroid : AnalisisdeFallaIOS;
     const diagnosticoAleatorio = analisisFalla[Math.floor(Math.random() * analisisFalla.length)];

      return `Batería: ${diagnosticoAleatorio.bateria}, 
     Pantalla: ${diagnosticoAleatorio.pantalla}, Botones Laterales: ${diagnosticoAleatorio.botoneslaterales}, 
     Cámara: ${diagnosticoAleatorio.camara}, RAM: ${diagnosticoAleatorio.ram}`;





}
    //DIAGNOSTICO 2

    async function mostrarDiagnosticoNuevasFallas() 
    {
        const infoContainer = document.getElementById("infoReparacion");
        infoContainer.innerHTML += "<p>Diagnóstico 2:</p>";
    
        const fallosAleatorios = NuevasFallas[Math.floor(Math.random() * NuevasFallas.length)];
    
        // Almacenar diagnóstico 2 en el almacenamiento web
        const diagnostico2 = await obtenerDiagnosticoNuevasFallas(fallosAleatorios);
        guardarEnAlmacenamiento("Diagnostico2", diagnostico2);
    
        for (const fallo in fallosAleatorios) 
        {
            infoContainer.innerHTML += `<p>${fallo}: ${fallosAleatorios[fallo]}</p>`;
        }
    }
    

    //DIAGNOSTICO 2
    async function obtenerDiagnosticoNuevasFallas(fallos) 
    {
        let diagnostico = "Diagnóstico 2:";
        for (const fallo in fallos) {

            diagnostico += `${fallo}: ${fallos[fallo]}`;
        }
        return diagnostico;
    }

    //PROCEDIMIENTO 2
    async function realizarReparacionNuevasFallas() 
    {
        const reparacionNuevasFallas = await confirmDialog("¿Desea realizar la reparación de las nuevas fallas?", "Sí", "No");

        if (reparacionNuevasFallas) 
        {
            let abonoNum;
            do
             {
                const abono = prompt("Inserte los $450 faltantes para culminar la operación:");
                abonoNum = parseFloat(abono);

                if (abonoNum !== 450) 
                {
                    alert("Debe ingresar exactamente $450 para continuar con la reparación.");
                }
            } 
            while (abonoNum !== 450);

            mostrarDiagnosticoFinalBuenEstado();

            alert("Gracias por preferirnos.");

            // Almacenar información en el almacenamiento web
            guardarEnAlmacenamiento("DiagnosticoFinal", "Todos los componentes están en buen estado.");
        
        } 
        else 
        {
            do 
            {
                const abono = prompt("Inserte los $150 faltantes para culminar la operación:");
                abonoNum = parseFloat(abono);

                if (abonoNum !== 150)
                 {
                    alert("Debe ingresar exactamente $150 para continuar con la reparación.");
                }
            } while (abonoNum !== 150);

            alert("Gracias por preferirnos.");
            // Mostrar en la página web el diagnóstico final con fallas
          mostrarDiagnosticoFinalConFallas();
          // Almacenar información en el almacenamiento web
          guardarEnAlmacenamiento("DiagnosticoFinal", "Diagnóstico 1: Completado, Diagnóstico 2: Fallando");
      
        
        }





          //DIAGNOSTICO FINAL BUENO
         function mostrarDiagnosticoFinalBuenEstado() 
         {
           const infoContainer = document.getElementById("infoReparacion");
           infoContainer.innerHTML += "<p>DIAGNOSTICO FINAL:</p>";
          // Aquí puedes mostrar los detalles del diagnóstico final en buen estado
         infoContainer.innerHTML += "<p>TODOS LOS COMPONENTES ESTAN EN BUEN ESTADO.</p>";
         }


          //DIAGNOSTICO FINAL MALO

          function mostrarDiagnosticoFinalConFallas() 
         {
          const infoContainer = document.getElementById("infoReparacion");
          infoContainer.innerHTML += `<p>DIAGNOSTICO FINAL:</p> 
                                 <p>Diagnostico 1 : COMPLETADO</p>
                                 <p>Diagnostico 2: FALLANDO</p>`;
 
    
         }








    }
        

        
        function guardarEnAlmacenamiento(clave, valor)
        {
        // Seleccionar el tipo de almacenamiento web (LocalStorage o SessionStorage)
        const storage =  window.sessionStorage;

        // Guardar la clave y el valor en el almacenamiento web
        storage.setItem(clave, valor);
    }


   



    function elegirTecnico(marca) 
    {
        const tecnicosDisponibles = marca === "iOS" ? tecnicosIOS : tecnicosAndroid;
        return tecnicosDisponibles[Math.floor(Math.random() * tecnicosDisponibles.length)];
    }




    // Recargar la página para reiniciar el sistema
    function reiniciarSistema() 
    {
        location.reload(); 
    }





    async function confirmDialog(message, btnTrue, btnFalse) 
    {
        const dialog = document.createElement("div");
        dialog.classList.add("dialog-container");
    
        const texto = document.createElement("p");
        texto.textContent = message;
        dialog.appendChild(texto);
    
        const botonSi = document.createElement("button");
        botonSi.textContent = btnTrue;
        botonSi.addEventListener("click", () => 
        {
            dialog.returnValue = true;
            cerrarCuadroDialogo(dialog);
        });
        dialog.appendChild(botonSi);
    
        const botonNo = document.createElement("button");
        botonNo.textContent = btnFalse;
        botonNo.addEventListener("click", () => 
        {
            dialog.returnValue = false;
            cerrarCuadroDialogo(dialog);
        });
        dialog.appendChild(botonNo);
    
        document.body.appendChild(dialog);
    
        return new Promise(resolve => 
            {
            const interval = setInterval(() => 
            {
                if (dialog.returnValue !== undefined) 
                {
                    resolve(dialog.returnValue);
                    clearInterval(interval);
                }
            }, 100);
        });
    }






    function cerrarCuadroDialogo(dialog) 
    {
        if (dialog) 
        {
            dialog.parentNode.removeChild(dialog);
        }
    }










});





// Diagnósticos para Android
const AnalisisdeFallaAndroid = 
[
    new FalloHardware("BATERIA = Buen estado", "PANTALLA = En revisión", "BOTONES LATERALES = En revisión", "CAMARA = Buen estado", 4),
    new FalloHardware("BATERIA = En revisión", "PANTALLA = Buen estado", "BOTONES LATERALES = Buen estado", "CAMARA = En revisión", 16),
];

// Diagnósticos para iOS
const AnalisisdeFallaIOS =
 [
    new FalloHardware("BATERIA = Buen estado", "PANTALLA = En revisión", "BOTONES LATERALES = Buen estado", "CAMARA = En revisión", 8),
    new FalloHardware("BATERIA = En revisión", "PANTALLA = Buen estado", "BOTONES LATERALES = En revisión", "CAMARA = Buen estado", 12),
];


// Tecnicos especializados
const tecnicosAndroid =
[
    new Tecnico("Técnico Carlos (especialista en android)", ["Android"]),
    new Tecnico("Técnico Javier (especialista en android)", ["Android"]),
    new Tecnico("Técnico Alex (especialista en android)", ["Android"]),
];

const tecnicosIOS = 
[
    new Tecnico("Técnico Marco (especialista en ios)", ["iOS"]),
    new Tecnico("Técnico Joaquin (especialista en ios)", ["iOS"]),
    new Tecnico("Técnico Dylan (especialista en ios)", ["iOS"]),
];



const NuevasFallas = 
        [
        new NuevosFallosHardware("Altavoz dañado", "Microfono no funciona", "Puerto de carga defectuoso", "Problemas con el puerto SIM", "Problemas con el puerto auxiliar"),
        new NuevosFallosHardware("Altavoz funciona intermitentemente", "Microfono con interferencias", "Puerto de carga no reconoce el cable", "Problemas con la tarjeta SIM", "Puerto auxiliar no responde"),
        new NuevosFallosHardware("Altavoz produce sonido distorsionado", "Microfono demasiado bajo", "Problemas de conexión en el puerto de carga", "No detecta la tarjeta SIM", "Puerto auxiliar no detecta dispositivos"),
                        
        ];