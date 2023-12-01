var nombre = "Giovanni";


console.log(nombre)

nombre = "Jimena"


console.log(nombre)

var primerNombre = "David" //Camelcase

/*
var PrimerApellido = "Lopez"
var segundo_apellido = "Sanches" */

//TIPOS DE DATOS
//STRING
let caracteres = "Palabra";
let caracteres2 = 'Palabra 2';
let caracteres3 = `Palabra 
3
es la mejor 
opcion para escribir`;

console.log(caracteres3);

let caracteres4 = `Hola mi nombre es ${nombre}`
console.log(caracteres4);


let caracteres5 = "Hola mi nombre es " + nombre;
console.log(caracteres5);

let text = "Hola , hoy estoy aprendiendo las base de javascript";
let length = text.length
console.log(length)

let parte = text.slice(5)//La posicion comienza desde el 1
console.log(parte)

let fecha = "1983-08-28";
let anio = fecha.substring(0,4);//La posicion comienza desde el 0
let mes = fecha.substring(5,7);
let dia = fecha.substring(8,10);
console.log(anio)
console.log(mes)
console.log(dia)

text = "Hola buenas noche";
let replace = text.replace("noche","tardes");
console.log(replace);

text = "Hola mundo"
let mayusculas = text.toUpperCase();
console.log(mayusculas)


text = "COMO ESTAS"
let minusculas = text.toLowerCase();
console.log(minusculas)


text = "        Hoy donde viajamos"
let sinEspacio = text.trim()
console.log(sinEspacio)