//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados 
//ordenados de la siguiente forma con su número identificador y 
//salario diario correspondiente:				
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos
//números enteros que representen al número identificador del empleado y 
//la cantidad de días que trabajó en la semana (6 días máximos). Y el programa 
//le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al 
//empleado que ingresó
Proceso ejercicio19
	Definir id_empleado, salariodiario,dias Como Entero
	Definir cargoempleado Como Caracter
	mientras No( id_empleado = 48 o id_empleado = 56 o id_empleado =64 o id_empleado =80) Hacer
		Escribir "ingrese un identificador valido: "
		leer id_empleado
		si (id_empleado = 48 o id_empleado = 64 o id_empleado =64 o id_empleado =80) Entonces
			Mientras  dias <= 0 o dias > 6 Hacer
				Escribir "ingrese el numero de dias trabajados: "
				leer dias
			FinMientras
		FinSi
	FinMientras
	Segun id_empleado Hacer
		Caso 48:
			cargoempleado = "mantenimiento"
			salariodiario = 48
		Caso 56:
			cargoempleado = "cajero"
			salariodiario = 56
		Caso 64:
			cargoempleado = "servidor"
			salariodiario = 64
		Caso 80:
			cargoempleado = "preparador de mezclas"
			salariodiario = 80
	FinSegun
	Escribir "el empleado con el cargo de [",cargoempleado,"] trabajo durante ",dias," dias"
	Escribir "se le debe pagar s/", salariodiario * dias
FinProceso
