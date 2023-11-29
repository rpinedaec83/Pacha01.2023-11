// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//    Cajero (56$/día).

//    Servidor (64$/día).

//    Preparador de mezclas (80$/día).

//    Mantenimiento (48$/día).

//    El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Algoritmo Ejercicio19
    Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDiario Como Real
	
    Escribir "Ingrese el número identificador del empleado:"
    Leer idEmpleado
	
    Segun idEmpleado Hacer
        1:
            salarioDiario = 56
        2:
            salarioDiario = 64
        3:
            salarioDiario = 80
        4:
            salarioDiario = 48
        De Otro Modo:
            Escribir "Número de empleado no válido."
		
Fin Segun

Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"
Leer diasTrabajados

Si diasTrabajados > 6 Entonces
	Escribir "La cantidad de días trabajados no puede ser mayor a 6."
Sino
	totalPagar = diasTrabajados * salarioDiario
	Escribir "El dueño debe pagar al empleado $", totalPagar
Fin Si
FinAlgoritmo