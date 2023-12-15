class Celulares {
    constructor(issues, color, marca, imei) {
        this.issues = issues;
        this.color = color;
        this.marca = marca;
        this.imei = imei;
    }

    repuestos() {
        return `El celular ${this.marca} esta siendo reparado  ${this.imei} `;
    }
    autorizaciondelusuario() {
        return `El celular ${this.marca} esta funcionando`;
    }

}

class Celular extends imei {
    #nombrecliente = false;
    constructor(issues, color, marca, imei) {
        super(issues, color, marca, imei);
        
    }
    get nombrecliente(){
        return this.#nombrecliente;
    }
    set nombrecliente(value){
        if (typeof value === 'boolean'){
            this.#nombrecliente=value;
        }
    }


    pasarrevision() {
        if (!this.#nombrecliente) {
            this.#nombrecliente = true;
            return "El celular a pasado revision";
        } else {
            return "El celular ua esta reparado";
        }
    }
}

class cliente extends imei{
    constructor(issues, color, marca, imei){
        super (issues, color, marca, imei); 
        this.pagado = false;
    }

    correrEnUnaSolaRueda(){
        if(!this.pagado){
            this.pagado=true;
            return "La reparacion ya fue pagada";
        }
        else{
            return "La reparacion fue pagada en 50% "
        }
    }
    repuestos() {
        return `El celular ${this.marca} ha usado repuestos ${this.issues} kph`;
    }
    autorizaciondelusuario() {
        return `Esta celular  ${this.marca} ha sido autorizado`;
    }
}

let Iphone = new Celular("pantallarota","Azul","iphone13",11112);
console.log(Iphone.Iphone()); // El vehiculo BMW esta acelerando a 250 kph
console.log(Iphone.respuestos()); // El vehiculo BMW esta frenando
console.log(Iphone.nombrecliente()); // Se ha activado el aire acondicionado
console.log(Iphone.nombrecliente()) // Se ha activado el aire acondicionado

iphone13.nombrecliente=false;
console.log(iphone13.nombrecliente)
iphone13.nombrecliente=true;
console.log(iphone13.nombrecliente)



let samsung = new galaxy ("no carga bateria","Negro","samsung",11113)
console.log(samsung.correrEnUnaSolaRueda())// Corriendo en una sola rueda
console.log(samsung.correrEnUnaSolaRueda())// Corriendo en una sola rueda
console.log(samsung.repuestos())
console.log(samsung.autorizaciondelusuario())


class Person {
    constructor(first, last, age, telefono) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.telefono = telefono;
    }
    name() {
        return this.firstName + " " + this.lastName;
    }
}
  
  Person.prototype.tecnicoreparador = "Tecnico Medio";

  console.log(Person)

  let cliente01 = new Person("Rosita", "Nieves", 34, "Tecnico Medio")
  console.log(cliente01.tecnicoreparador)
  console.log(cliente01.name())

  let cliente02 = new Person("Rosa", "Carrera", 33, "Tecnico Avanzado")

  console.log(cliente02.tecnicoreparador)
  cliente02.tecnicoreparador = "Tecnico Avanzado"
  cliente02.log(cliente02.tecnicoreparador);

const Aerolinea = function () {
    let Nombre;
    let Ubicacion;

    return {
        init: function (parametros) {
            Nombre = parametros.Nombre;
            Ubicacion=parametros.Ubicacion;
            
        },
    };
}();

let parametros = {
    Nombre:"LAN",
    Ubicacion: "Lima"
}
Aerolinea.init(parametros)