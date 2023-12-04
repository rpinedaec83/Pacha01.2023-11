Proceso calcularsalario
	definir idempleado,salariodiario,dias Como Entero
	definir cargoempleado Como Caracter
	Mientras No (idEmpleado=48 o idEmpleado=56 o idempleado=64 o idempleado=80) Hacer
		escribir "ingrese un identificador valido:"
		leer idempleado
		si (idempleado=48 o idempleado=56 o idempleado=64 o idempleado=80) entonces 
			Mientras dias <=0 o dias >6 Hacer
				escribir "ingrese el numero de dias trabajados: "
				leer dias
			FinMientras
		FinSi
	FinMientras
	segun idempleado hacer 
		caso 48:
			cargoempleado="mantenimiento"
			salariodiario=48
		caso 56:
			cargoempleado="cajero"
			salariodiario=56
		caso 64:
			cargoempleaso="servidor"
			salariodiario=64
		caso 80:
			cargoempleado="preparador de mezcla"
			salariodiario=80
	FinSegun
	Escribir "el empleado con el cargo de [",cargoempleado,"] trabajo durante ",dias ,"dias"
	escribir"se le debe pagar s/",salariodiario*dias 
FinProceso
