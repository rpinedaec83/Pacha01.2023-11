Proceso Ejercicio16
	
//	Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
	
		// Definir variable
		Definir numeroDia Como Entero
		
		// Solicitar al usuario ingresar un número
		Escribir "Ingrese un número del 1 al 7: "
		Leer numeroDia
		
		// Evaluar el número para determinar el día
		Segun numeroDia Hacer
				Caso 1:
				Escribir "Lunes"
				Caso 2:
				Escribir "Martes"
				Caso 3:
				Escribir "Miércoles"
				Caso 4:
				Escribir "Jueves"
				Caso 5:
				Escribir "Viernes"
				Caso 6:
				Escribir "Sábado"
				Caso 7:
				Escribir "Domingo"
			    De Otro Modo: 
				Escribir "Número no válido. Ingrese un número del 1 al 7."
		FinSegun
		
FinProceso
