Proceso CalcularSalario
	Definir idEmpleado, salarioDiario,dias Como Entero
	Definir cargoEmpleado Como Caracter
	Mientras No(idEmpleado=48 o idEmpleado=56 o idEmpleado=64 o idEmpleado=80) Hacer
		Escribir "Ingrese un identificador válido:"
		Leer idEmpleado
		Si (idEmpleado=48 o idEmpleado=56 o idEmpleado=64 o idEmpleado=80) Entonces
			Mientras dias<=0 o dias>6 Hacer
				Escribir "Ingrese el número de días trabajados: "
				Leer dias
			FinMientras
		FinSi
	FinMientras
	Segun idEmpleado Hacer
		caso 48: 
			cargoEmpleado="Mantenimiento" 
			salarioDiario= 48
		Caso 56:
			cargoEmpleado="Cajero"
			salarioDiario= 56
		Caso 64:
			cargoEmpleado="Servidor"
			salarioDiario= 64
		Caso 80:
			cargoEmpleado="Preparador de mezclas"
			salarioDiario = 80
	FinSegun
	Escribir "El empleado con el cargo de [",cargoEmpleado,"] trabajó durante ",dias," días"
	Escribir "Se le debe pagar s/",salarioDiario*dias
FinProceso
