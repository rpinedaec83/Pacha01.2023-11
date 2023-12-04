// Hacer un algoritmo en Pseint para calcular el promedio de tres notas y 
//determinar si el estudiante aprobó o no.
Proceso ejercicio8
	escribir "ingrese la primera nota"
	leer nota1
	escribir "ingrese la segunda nota"
	leer nota2
	escribir "ingrese la tercera nota"
	leer nota3
	promedio = (nota1 + nota2 + nota3)/3
	si(promedio >= 10)
		Entonces
		escribir "el estudiante aprobo con un promedio de "  promedio
	SiNo
		escribir "el estudiante desaprobo con un promedio de " promedio
	FinSi
	
FinProceso