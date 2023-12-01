//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados 
//ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

//Cajero (56$/día).

//Servidor (64$/día).

//Preparador de mezclas (80$/día).

//Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros 
//que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Ejercicio19
	
	// Definir variables
	Definir idEmpleado, diasTrabajados Como Entero
	Definir salarioDiario, totalPago Como Real
	
	// Solicitar al usuario ingresar el número identificador del empleado
	Escribir "Ingrese el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento): "
	Leer idEmpleado
	
	// Solicitar al usuario ingresar la cantidad de días trabajados
	Escribir "Ingrese la cantidad de días trabajados (1 a 6): "
	Leer diasTrabajados
	
	// Asignar el salario diario según el tipo de empleado
	Segun idEmpleado Hacer
		1: salarioDiario <- 56
		2: salarioDiario <- 64
		3: salarioDiario <- 80
		4: salarioDiario <- 48
		De Otro Modo: Escribir "Número de empleado no válido"
	FinSegun
	
	// Calcular el total a pagar
	totalPago <- salarioDiario * diasTrabajados
	
	// Mostrar el resultado
	Si idEmpleado >= 1 Y idEmpleado <= 4 Entonces
		Escribir "El empleado con identificador ", idEmpleado, " debe recibir $", totalPago, " por ", diasTrabajados, " días trabajados."
	FinSi
	
FinProceso