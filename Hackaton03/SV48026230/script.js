function ejercicio01(){
    //1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.

    let numero = parseInt( prompt("Escribe un numero"))
    if(numero>100 && numero< 999){
        alert("Este numero tiene 3 digitos")
    }
    else{
        alert("Este numero no tiene 3 digitos")
    }
}
function ejercicio02(){
//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero<0){
        alert("Este es un numero negativo")
    }
    else{
        alert("Este numero no es negativo")
    }
}
function ejercicio03(){
//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
    let numero = parseInt( prompt("Escribe un numero"))
    if(numero % 10 === 4 ){
        alert("El numero termina en 4.")
    }
    else{
        alert("El numero no termina en 4.")
    }
}
function ejercicio04(){
//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

const numero1 = parseInt(prompt("Ingrese el primer número:"));
const numero2 = parseInt(prompt("Ingrese el segundo número:"));
const numero3 = parseInt(prompt("Ingrese el tercer número:"));

if (numero1 <= numero2 && numero1 <= numero3) {
    if (numero2 <= numero3) {
        alert(`Los números ordenados de menor a mayor son: ${numero1}, ${numero2}, ${numero3}`);
    } else {
        alert(`Los números ordenados de menor a mayor son: ${numero1}, ${numero3}, ${numero2}`);
    }
} else if (numero2 <= numero1 && numero2 <= numero3) {
    if (numero1 <= numero3) {
        alert(`Los números ordenados de menor a mayor son: ${numero2}, ${numero1}, ${numero3}`);
    } else {
        alert(`Los números ordenados de menor a mayor son: ${numero2}, ${numero3}, ${numero1}`);
    }
} else {
    if (numero1 <= numero2) {
        alert(`Los números ordenados de menor a mayor son: ${numero3}, ${numero1}, ${numero2}`);
    } else {
        alert(`Los números ordenados de menor a mayor son: ${numero3}, ${numero2}, ${numero1}`);
    }
}
}
function ejercicio05(){
/*5.5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una  promoción de descuento para vender al mayor,
esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total
de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80. */
const precioPorZapato = 80;
const cantidadDeZapatos = parseInt(prompt("Cantidad de zapatos:"));

let descuento = 0;

if (cantidadDeZapatos > 10 && cantidadDeZapatos <20 ) {
    descuento = 0.1;
} else if (cantidadDeZapatos > 20 && cantidadDeZapatos <30) {
    descuento = 0.2;
} else if (cantidadDeZapatos > 30) {
    descuento = 0.4;
}

const totalSinDescuento = cantidadDeZapatos * precioPorZapato;
const totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento);

alert(`Total a pagar: $${totalConDescuento}`);
}
function ejercicio06(){
/*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal,
se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas
entonces las horas extras se le pagarán a $25 por hora. */
    let sueldoSemnal = 0;
    let sueldoPorHora = 0;
    let horasTrabajadas = parseInt(prompt("Cantidad de horas trabajadas"));

    if (horasTrabajadas <= 40 && horasTrabajadas > 0 ) {
        sueldoPorHora = 20;
    } else {
        sueldoPorHora = 25;
    }
    let sueldoSemanal = sueldoPorHora*horasTrabajadas;
    alert(`El sueldo semanal es de: $${sueldoSemanal} porque trabajo ${horasTrabajadas} horas`)
}
function ejercicio07(){
/*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento
por compra a sus clientes con membresía dependiendo de su tipo, 
sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento
 */
    const tipoDeMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");

// Precio base del helado
const precioHelado = parseInt(prompt("Ingrese el precio del helado(10, 15 0 20)")); 

// Descuento inicialmente establecido en 0
let descuento = 0;

// Aplicar descuento según el tipo de membresía
switch (tipoDeMembresia.toUpperCase()) {
    case 'A':
        descuento = 0.1;
        break;
    case 'B':
        descuento = 0.15;
        break;
    case 'C':
        descuento = 0.2;
        break;
    default:
        console.log('Tipo de membresía no válido');
        break;
}

// Calcular el precio con descuento
const precioConDescuento = precioHelado - (precioHelado * descuento);

// Mostrar el precio final
alert(`Precio del helado con descuento: $${precioConDescuento}`);
}
function ejercicio08(){
// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

const nota1 = parseInt(prompt("Ingrese la primera nota:"));
const nota2 = parseInt(prompt("Ingrese la segunda nota:"));
const nota3 = parseInt(prompt("Ingrese la tercer nota:"));

if ((nota1+nota2+nota2)/3 > 12) {
    alert("El alumno aprobo el curso")
} else {
    alert("El alumno desaprobo el curso")
}
}
function ejercicio09(){
/*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador,
 se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
 si generaba menos de $2000 su aumento será de un 10%. */
    let sueldoTrabajador = parseInt(prompt("Ingresar el sueldo del trabajador"))
    let aumento = 0 ;

    if (sueldoTrabajador > 0 && sueldoTrabajador <= 2000) {
        aumento = 0.10 ;
    } else {
        aumento = 0.05;
    }

    const sueldoFinal = sueldoTrabajador + (aumento*sueldoTrabajador);

    alert(`El sueldo final del trabajador es : ${sueldoFinal}`);
}
function ejercicio10(){
    //10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
    let numero = parseInt(prompt("Ingrese numero para evaluar"));
    if (numero % 2 === 0 ){
        alert("El numero ingresado es par")
    } else {
        alert("El numero ingresado es impar")
    }
}
function ejercicio11(){
    // 11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
    let primerNumero = parseInt(prompt("Ingrese el primer número"));
    let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
    let tercerNumero = parseInt(prompt("Ingrese el tercer número"));

    let mayor = primerNumero;

    if (segundoNumero > mayor) {
    mayor = segundoNumero;
    }
    if (tercerNumero > mayor) {
    mayor = tercerNumero;
    }
alert("El número mayor es: " + mayor);
}
function ejercicio12(){
// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
    let primerNumero = parseInt(prompt("Ingrese el primer número"));
    let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
    let mensaje;
    
    if (primerNumero > segundoNumero) {
      mensaje = "El primer número es mayor: " + primerNumero;
    } else if (segundoNumero > primerNumero) {
      mensaje = "El segundo número es mayor: " + segundoNumero;
    } else {
      mensaje = "Ambos números son iguales";
    }
    alert(mensaje)
}
function ejercicio13(){
//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
let letra = prompt("Ingrese una letra").toLowerCase();

if (
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u"
) {
  alert("La letra ingresada es una vocal");
} else {
  alert("La letra ingresada no es una vocal");
}
}
function ejercicio14(){
//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo. 
    let numero = parseInt(prompt("Ingrese un número entre 1 y 10"));

if (numero >= 1 && numero <= 10) {
  if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 9) {
    alert("El número ingresado es primo.");
  } else {
    alert("El número ingresado no es primo.");
  }
} else {
  alert("El número ingresado no está dentro del rango válido.");
}
}
function ejercicio15(){
//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
let centimetros = parseFloat(prompt("Ingrese la longitud en centímetros"));
let libras = parseFloat(prompt("Ingrese el peso en libras"));

let pulgadas = (centimetros / 2.54).toFixed(2); 
let kilogramos = (libras / 2.205).toFixed(2); 

alert(centimetros + " centímetros son " + pulgadas + " pulgadas.");
alert(libras + " libras son " + kilogramos + " kilogramos.");
}
function ejercicio16(){
//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
let diaDeLaSemana = parseInt(prompt("Ingrese un número del 1 al 7"));

switch (diaDeLaSemana) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  case 3:
    alert("Miércoles");
    break;
  case 4:
    alert("Jueves");
    break;
  case 5:
    alert("Viernes");
    break;
  case 6:
    alert("Sábado");
    break;
  case 7:
    alert("Domingo");
    break;
  default:
    alert("Número ingresado no corresponde a un día de la semana");
    break;
}
}
function ejercicio17(){
  //  17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
  let horas = parseInt(prompt("Ingrese las horas"));
let minutos = parseInt(prompt("Ingrese los minutos"));
let segundos = parseInt(prompt("Ingrese los segundos"));

segundos++; // Aumentamos en uno los segundos

if (segundos === 60) {
  segundos = 0;
  minutos++;

  if (minutos === 60) {
    minutos = 0;
    horas++;

    if (horas === 24) {
      horas = 0; // Si son las 24 horas, volvemos a las 00 horas
    }
  }
}

if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
  alert("¡Ha ingresado valores de tiempo inválidos!");
} else {
  alert(`La hora un segundo después es: ${horas}:${minutos}:${segundos}`);
}
}
function ejercicio18(){
/*  18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
    Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.
    $8. Si se compran entre 10 unidades hasta 99.
    $7. Entre 100 y 499 unidades.
    $6. Para mas de 500 unidades.
    La ganancia para el vendedor es de 8,25 % de la venta. 
    Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor. */
  let cantidadACeder = parseInt(prompt("Ingrese la cantidad de CDs a vender"));

  let precioUnitario;
  let mensaje;

  if (cantidadACeder >= 1 && cantidadACeder <= 9) {
    precioUnitario = 10;
  } else if (cantidadACeder >= 10 && cantidadACeder <= 99) {
    precioUnitario = 8;
  } else if (cantidadACeder >= 100 && cantidadACeder <= 499) {
    precioUnitario = 7;
  } else if (cantidadACeder >= 500) {
    precioUnitario = 6;
  } else {
    mensaje = "Cantidad inválida";
  }

  if (!mensaje) {
    let precioTotal = cantidadACeder * precioUnitario;
    let gananciaVendedor = precioTotal * 0.0825;

    mensaje = `Precio total para el cliente: $${precioTotal}\nGanancia para el vendedor: $${gananciaVendedor.toFixed(2)}`;
  }

  alert(mensaje);
}
function ejercicio19(){
/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados
 ordenados de la siguiente forma con su número identificador y salario diario correspondiente: 
 
    Cajero (56$/día).
    Servidor (64$/día).
    Preparador de mezclas (80$/día).
    Mantenimiento (48$/día).

    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen
    al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
    Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó*/
    let identificador = parseInt(prompt("Ingrese el número identificador del empleado"));
  let dias = parseInt(prompt("Ingrese la cantidad de días trabajados en la semana"));

  let salarioDiario;

  switch (identificador) {
    case 1:
      salarioDiario = 56;
      break;
    case 2:
      salarioDiario = 64;
      break;
    case 3:
      salarioDiario = 80;
      break;
    case 4:
      salarioDiario = 48;
      break;
    default:
      alert("Empleado no válido");
      return;
  }

  if (dias < 1 || dias > 6) {
    alert("Cantidad de días inválida");
    return;
  }

  let salarioSemanal = salarioDiario * dias;
  alert(`El salario semanal para el empleado ${identificador} es: $${salarioSemanal}`);
}
function ejercicio20(){
    /* 20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

    ¿Cuántos números son Pares?
    ¿Cuál es el mayor de todos?

    Si el tercero es par, calcular el cuadrado del segundo.
    Si el primero es menor que el cuarto, calcular la media de los 4 números.

    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700.
    Si cumple se cumple la siguiente condición, calcular la suma de los 4 números. */
    let numero1 = parseInt(prompt("Ingrese el primer número"));
    let numero2 = parseInt(prompt("Ingrese el segundo número"));
    let numero3 = parseInt(prompt("Ingrese el tercer número"));
    let numero4 = parseInt(prompt("Ingrese el cuarto número"));
      
    if (numero1 % 2 !== 0 && numero2 % 2 !== 0 && numero3 % 2 !== 0 && numero4 % 2 !== 0) {
          alert("Todos los valores son impares");
          return;
        }
      
    let cantidadPares = +(numero1 % 2 === 0) + +(numero2 % 2 === 0) + +(numero3 % 2 === 0) + +(numero4 % 2 === 0);
    let mayor = Math.max(numero1, numero2, numero3, numero4);
      
    if (cantidadPares > 0) {
        if (numero3 % 2 === 0) {
            let cuadradoSegundo = numero2 * numero2;
            alert(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
        }
      
        if (numero1 < numero4) {
            let media = (numero1 + numero2 + numero3 + numero4) / 4;
            alert(`La media de los 4 números es: ${media}`);
          }
        }
      
        if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
          let sumaTotal = numero1 + numero2 + numero3 + numero4;
          alert(`La suma de los 4 números es: ${sumaTotal}`);
        }
}












