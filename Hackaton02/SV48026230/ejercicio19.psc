Proceso ejercicio19
	Definir empleado, diasTrabajados Como Entero
	Definir salarioDiario, pagoTotal Como Real
	
	Escribir "Ingrese el número identificador (1-4):"
	Leer empleado
	Escribir "Ingrese la cantidad de días trabajados (1-6):"
	Leer diasTrabajados
	
	salarioDiario <- 0
	
	Segun empleado Hacer
		1: salarioDiario <- 56
		2: salarioDiario <- 64
		3: salarioDiario <- 80
		4: salarioDiario <- 48
		De Otro Modo: Escribir "Número de empleado no válido"
	FinSegun
	
	Si empleado >= 1 y empleado <= 4 Entonces
		pagoTotal <- salarioDiario * diasTrabajados
		Escribir "El monto a pagar al empleado es: ", pagoTotal, "$"
	FinSi
FinProceso
