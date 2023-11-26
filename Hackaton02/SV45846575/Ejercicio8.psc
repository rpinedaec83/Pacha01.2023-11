//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso Ejercicio8
	definir notas Como Entero
	definir sumas Como Real
	definir prom Como Real
	definir n Como Real
	definir acum Como Entero
	acum <- 1
	suma <-0
	escribir "Cuantas notas desea promemdiar?"
	leer notas
	mientras acum<= notas hacer
		escribir " Ingrese la nota numero: ",acum
		leer n
		suma <- suma +n
		acum <- acum +1
		
	FinMientras
	prom <-suma/notas
	escribir " El promedio del estudiant es ",prom
	si prom >= 11 Entonces
		escribir "El estudiante paso el curso"
	SiNo
	escribir "El estudiante desaprobo el curso"
	
	FinSi
FinProceso
