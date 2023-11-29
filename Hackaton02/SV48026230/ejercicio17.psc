// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso ejercicio17
	Definir hora, minuto, segundos Como Entero
	
	Escribir "Escribe la hora actual:"
	Leer hora
	Escribir "Escribe los minutos:"
	Leer minuto
	Escribir "Escribe los segundos:"
	Leer segundos
	
	segundos <- segundos + 1
	
	Si segundos >= 60 Entonces
		segundos <- 0
		minuto <- minuto + 1
		Si minuto >= 60 Entonces
			minuto <- 0
			hora <- hora + 1
			Si hora >= 24 Entonces
				hora <- 0
			FinSi
		FinSi
	FinSi
	
	Si hora >= 0 y hora <= 23 Entonces
		Escribir "La hora actual es: ", hora, ":", minuto, ":", segundos
	Sino
		Escribir "Ingresa una hora válida."
	FinSi

FinProceso
