//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

Proceso Ejercicio19
	definir cargoempleado Como Caracter
	mientras no(idempleado=48 o idempleado=56 o idempleado=64 o idempleado=80) Hacer
		escribir" Ingrese un identificador valido:"
		leer idempleado
		si(idempleado=48 o idempleado=56 o idempleado=64 o idempleado=80) entonces
			mientras dias<=0 o dias>6 Hacer
				escribir " Ingrese el numero de dias trabajados:"
			Leer dias	
			FinMientras
		FinSi
	FinMientras
	segun idempleado hacer
		caso 48:
			cargoempleado=" Mantenimiento"
			saladiodiario=48
		caso 56:
			cargoempleado="Cajero"
		caso 64:
			cargoempleado="Servidor"
			salariodiario=64
		caso 80:
			cargoempleado=" Preparador de Mezclas"
			salariodiario=80
	FinSegun
	escribir " El empleado con el cargo de [",cargoempleado,"] trabajo durante ",dias," dias"
	escribir " se le debe pagar s/", salariodiario*dias
FinProceso
