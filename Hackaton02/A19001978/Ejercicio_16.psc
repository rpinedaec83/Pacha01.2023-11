// 16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio_16
	
	Escribir "Ingrese un numero de 1 al 7:"
	leer numeroIngresado
	
	dia = ""
	
	Segun numeroIngresado Hacer
		1:
			dia <- "Lunes"
		2:
			dia <- "Martes"
		3:
			dia <- "Miercoles"
		4:
			dia <- "Jueves"
		5:
			dia <- "Viernes"
		6:
			dia <- "Sabado"
		7:
			dia <- "Domingo"
		De Otro Modo:
			Escribir "El numero ingresado no se encuentra en el rango (1 - 7) indicado"
	FinSegun
	
	Escribir "El dia es: ", dia
	
FinProceso
