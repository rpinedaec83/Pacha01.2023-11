Proceso ejercicio8
	Definir nota1, nota2, nota3 Como Real
	Escribir "Ingresa nota 1:"
	Leer nota1 
	Escribir "Ingresa nota 2:"
	Leer nota2 
	Escribir "Ingresa nota 3:"
	Leer nota3 
	
	Si nota1 > 20 o nota2 > 20 o nota3 > 20 Entonces
		Escribir "Por favor, ingresa notas válidas menores o iguales a 20."
	Sino
		promedio <- (nota1 + nota2 + nota3) / 3
		Escribir "El promedio del alumno es ", promedio
		
		Si promedio >= 12 y promedio <= 20 Entonces
			Escribir "El alumno fue aprobado."
		FinSi
		
		Si promedio >= 0 y promedio < 12 Entonces
			Escribir "El alumno fue desaprobado."
		FinSi
		
		Si promedio < 0 o promedio > 20 Entonces
			Escribir "Por favor, ingresa un valor valido."
		FinSi
	FinSi
FinProceso
