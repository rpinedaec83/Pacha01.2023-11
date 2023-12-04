/* Hacer un algoritmo en JavaScript para una heladería se tienen 4
 tipos de empleados ordenados de la siguiente forma con su número 
 identificador y salario diario correspondiente:
 Cajero (56$/día).
 Servidor (64$/día).
 Preparador de mezclas (80$/día).
 Mantenimiento (48$/día).
 El dueño de la tienda desea tener un programa donde sólo
  ingrese dos números enteros que representen al número 
  identificador del empleado y la cantidad de días que trabajó en 
  la semana (6 días máximos). Y el programa le mostrará por pantalla 
  la cantidad de dinero que el dueño le debe pagar al empleado que ingresó*/

  function ejercicio19(){
    let numero = parseInt(prompt('ingrese numero identificador'));
    let caj = 10
    let Serv = 20
    let Prepa = 30
    let Mante = 40
    let cajero
    let servidor
    let preparador
    let mantenimiento
  
    if(numero === 10){
        numero = 'cajero'
    }else if(numero === 20){
        numero = 'servidor'
    }else if(numero === 30){
        numero = 'preparador'
    }else if(numero === 40){
        numero = 'mantenimiento'
    }else {
        numero = ' no es un identificador valido'
    }
    let sueldo = parseInt(prompt('ingrese numero identificador'));
    if(sueldo === 10){
        cajero = '56'
    }
    alert('el empleado con el cargo de ' + numero + ',' + sueldo )


  }