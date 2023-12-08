class Productos{
    constructor(marca, modelo, serie){
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
    }
}

let prod1 = new Productos("LG","LG550011","SR00000001");
let prod2 = new Productos("SONY","STK002003","SERIE01");

console.log(prod1.modelo)
console.log(prod2.serie)