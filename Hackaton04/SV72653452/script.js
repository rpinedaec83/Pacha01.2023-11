
function ejercicio01()
{

class Calculadora 
{
    
    constructor(num1, num2) 
    {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    
    sumar()
     {
      return this.num1 + this.num2;
    }
  }
  
let numero1 = parseFloat(prompt("Ingrese primer numero para la suma :"));

let numero2 = parseFloat(prompt("Ingrese segundo numero para la suma :"));

 
  let miCalculadora = new Calculadora(numero1, numero2);
  let resultado = miCalculadora.sumar();
  alert("El resultado de la suma es = " + resultado); 
}


function ejercicio02()
{

class CalculadoraPotencia 
{
 
  constructor(base, exponente) 
  {
    this.base = base;
    this.exponente = exponente;
  }

  
  calcularPotencia() 
  {
    
    return this.base ** this.exponente;
  }
}

let ponerbase = parseFloat(prompt("Ingrese la base : "));

let ponerexponente = parseInt(prompt("Ingrese el exponente:"));

let miCalculadora = new CalculadoraPotencia(ponerbase, ponerexponente);
let resultado = miCalculadora.calcularPotencia();
alert("La potencia  es : " + resultado); 



}



function ejercicio03()
{
  class CalculadoraCubos
   {
    
    constructor(...numeros) 
    {
      this.numeros = numeros;
    }
  
    
    sumarCubos() 
    {
      return this.numeros.reduce((sumartodos, numerosactuales) => sumartodos + Math.pow(numerosactuales, 3));
    }
  }
  
let numero1 = parseFloat(prompt("Primer numero EJEMPLO : 1 . Ingrese primer numero :"));

let numero2 = parseFloat(prompt("Primer numero EJEMPLO : 5 . Ingrese segundo numero :"));  

let numero3 = parseFloat(prompt("Primer numero EJEMPLO : 9 . Ingrese tercer numero :"));



  let miCalculadoraCubos = new CalculadoraCubos(numero1, numero2, numero3);
  let resultadoCubos = miCalculadoraCubos.sumarCubos();
  alert("Resultado de ejemplo : 855 .El resultado de la suma de sus cubos es : " + resultadoCubos); 
}



