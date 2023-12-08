
function ejercicio01()
{

class Calculadora {
    
    constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    }
  
    
    sumar() {
      return this.num1 + this.num2;
    }
  }
  
 
  const miCalculadora = new Calculadora(5, 7);
  const resultado = miCalculadora.sumar();
  alert("El resultado de 5+7 es = " + resultado); 
}