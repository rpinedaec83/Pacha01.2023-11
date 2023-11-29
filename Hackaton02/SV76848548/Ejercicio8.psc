//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso Ejercicio8
	nota1 = 0
	nota2 = 0
	nota3 = 0
	Escribir "Ingrese nota 1: "
	Leer nota1
	Escribir "Ingrese nota 2: "
	Leer nota2
	Escribir "Ingrese nota 3: "
	Leer nota3
	
	nota_minima = 13
	
	promedio = (nota1+nota2+nota3)/3
	
	si promedio < nota_minima Entonces
		Escribir "El alumno desaprobo con una nota de ",promedio
	SiNo
		Escribir "El alumno aprobo con una nota de ",promedio
	FinSi
FinProceso
