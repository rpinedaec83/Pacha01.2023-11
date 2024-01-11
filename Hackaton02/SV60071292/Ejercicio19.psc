Proceso Ejercicio19

//Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente:
//				
//				Cajero (56$/d�a).
	
//				Servidor (64$/d�a).
//				
//				Preparador de mezclas (80$/d�a).
//				
//				Mantenimiento (48$/d�a).
//				
	//El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero identificador del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�

		// Definir variables
		Definir idEmpleado, diasTrabajados Como Entero
		Definir salarioDiario, totalPago Como Real
		
		// Solicitar al usuario ingresar el n�mero identificador del empleado
		Escribir "Ingrese el n�mero identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento): "
		Leer idEmpleado
		
		// Solicitar al usuario ingresar la cantidad de d�as trabajados
		Escribir "Ingrese la cantidad de d�as trabajados (1 a 6): "
		Leer diasTrabajados
		
		// Asignar el salario diario seg�n el tipo de empleado
		Segun idEmpleado Hacer
			1: salarioDiario <- 56
			2: salarioDiario <- 64
			3: salarioDiario <- 80
			4: salarioDiario <- 48
			De Otro Modo: Escribir "N�mero de empleado no v�lido"
		FinSegun
		
		// Calcular el total a pagar
		totalPago <- salarioDiario * diasTrabajados
		
		// Mostrar el resultado
		Si idEmpleado >= 1 Y idEmpleado <= 4 Entonces
			Escribir "El empleado con identificador ", idEmpleado, " debe recibir $", totalPago, " por ", diasTrabajados, " d�as trabajados."
		FinSi
		
FinProceso
