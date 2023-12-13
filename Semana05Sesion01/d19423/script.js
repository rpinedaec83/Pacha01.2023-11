class Vehiculo {
    constructor(numPlaca, color, marca, velocidad) {
        this.numPlaca = numPlaca;
        this.color = color;
        this.marca = marca;
        this.velocidad = velocidad;
    }

    acelerar() {
        return `El vehiculo ${this.marca} esta acelerando a ${this.velocidad} kph`;
    }
    frenar() {
        return `El vehiculo ${this.marca} esta frenando`;
    }

}

class Auto extends Vehiculo {
    #aireAcondicionado = false;
    constructor(numPlaca, color, marca, velocidad) {
        super(numPlaca, color, marca, velocidad);
        
    }
    get AireAcondicionado(){
        return this.#aireAcondicionado;
    }
    set AireAcondicionado(value){
        if (typeof value === 'boolean'){
            this.#aireAcondicionado=value;
        }
    }


    encenderAireAcondicionado() {
        if (!this.#aireAcondicionado) {
            this.#aireAcondicionado = true;
            return "Se ha activado el aire acondicionado";
        } else {
            return "Ya se encuentra el aire acondicionado en funcionamiento";
        }
    }
}

class Moto extends Vehiculo{
    constructor(numPlaca, color, marca, velocidad){
        super (numPlaca, color, marca, velocidad); 
        this.enUnaSolaRueda = false;
    }

    correrEnUnaSolaRueda(){
        if(!this.enUnaSolaRueda){
            this.enUnaSolaRueda=true;
            return "Corriendo en una sola rueda";
        }
        else{
            return "Ya esta corriendo en una sola rueda"
        }
    }
    acelerar() {
        return `La Moto ${this.marca} esta acelerando a ${this.velocidad} kph`;
    }
    frenar() {
        return `La Moto ${this.marca} esta frenando`;
    }
}

let bmw = new Auto("00121314","Azul","BMW",250);
console.log(bmw.acelerar()); // El vehiculo BMW esta acelerando a 250 kph
console.log(bmw.frenar()); // El vehiculo BMW esta frenando
console.log(bmw.encenderAireAcondicionado()) // Se ha activado el aire acondicionado
console.log(bmw.encenderAireAcondicionado()) // Se ha activado el aire acondicionado

bmw.AireAcondicionado=false;
console.log(bmw.AireAcondicionado)
bmw.AireAcondicionado=true;
console.log(bmw.AireAcondicionado)



let yamaha = new Moto ("00789654","Negro","Yamaha",120)
console.log(yamaha.correrEnUnaSolaRueda())// Corriendo en una sola rueda
console.log(yamaha.correrEnUnaSolaRueda())// Corriendo en una sola rueda
console.log(yamaha.acelerar())
console.log(yamaha.frenar())
