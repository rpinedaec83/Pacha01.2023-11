//Hacer un algoritmo en Pseint que lea un número y según ese número, 
//indique el día que corresponde.
Proceso diaSemana
	Definir dia Como Entero
	Definir diasemananombre Como Caracter
	Escribir "Ingrese un número: "
	Leer dia
	diasemananombre = ""
	Segun dia Hacer
		1:
			diasemananombre = "Lunes"
		2:
			diasemananombre = "Martes"
		3:
			diasemananombre = "Miercoles"
		4:
			diasemananombre = "Jueves"
		5:
			diasemananombre = "Viernes"
		6:
			diasemananombre = "Sábado"
		7:
			diasemananombre = "Domingo"
		De Otro Modo:
			diasemananombre = "No existe"
	Fin Segun
	Escribir "El valor ingresado corresponde al día: ",diasemananombre
FinProceso
