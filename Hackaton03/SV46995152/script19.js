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

  function ejercicio19() {
    let identity = parseInt(prompt('ingrese el ID del empleado: '))
    let dia = parseInt(prompt('ingrese el numeor de dias trabajados: '))
    let tipoEmpleado;
    let sueldo;
    let salario;

    switch (identity) {
        case 10:
            tipoEmpleado = 'Cajero'
            sueldo = 56
            break;
        case 20:
            tipoEmpleado = 'Servidor'
            sueldo = 64
            break;
        case 30:
            tipoEmpleado = 'Preparador'
            sueldo = 80
            break;
        case 40:
            tipoEmpleado = 'Mantenimiento'
            sueldo = 48
            break;    
        default:
            tipoEmpleado = 'no identificado'
            sueldo = 0
            break;
    }

    
    if(dia>= 1 && dia<= 6){
        salario = (sueldo * dia)
    } else {
        alert('ingresar un numero entre 1  al 6')
        return
    }

    alert('El empleado con el cargo de ' + tipoEmpleado + ', ' + ' trabajo durante  ' + dia + ' dias, ' + ' se le debe pagar s/ ' + salario)

  }