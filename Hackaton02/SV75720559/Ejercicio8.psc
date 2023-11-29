//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio8
	Definir n1, n2, n3, promedio Como real
	Definir nota_A Como real
		
	Escribir "Ingrese la primera nota: "
	Leer n1
		
	Escribir "Ingrese la segunda nota: "
	Leer n2
		
	Escribir "Ingrese la tercera nota: "
	Leer n3
		
	promedio = (n1 + n2 + n3) / 3 
		
	nota_A = 10.5 
 	
	Si promedio >= nota_A Entonces
		Escribir "El estudiante llego a aprobar con un promedio de: ", promedio
	Sino
		Escribir "El estudiante desaprobo con un promedio de: ", promedio
	Fin Si
		
FinProceso
