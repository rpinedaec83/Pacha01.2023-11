Proceso Ejercicio8
	
//	Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprob� o no.

		// Definir variables
		Definir nota1, nota2, nota3, promedio Como Real
		
		// Solicitar al usuario ingresar las tres notas
		Escribir "Ingrese la primera nota: "
		Leer nota1
		
		Escribir "Ingrese la segunda nota: "
		Leer nota2
		
		Escribir "Ingrese la tercera nota: "
		Leer nota3
		
		// Calcular el promedio
		promedio <- (nota1 + nota2 + nota3) / 3
		
		// Evaluar aprobaci�n
		Si promedio >= 6 Entonces
			Escribir "El estudiante aprob� con un promedio de: ", promedio
		Sino
			Escribir "El estudiante no aprob� con un promedio de: ", promedio
		FinSi
		
FinProceso
