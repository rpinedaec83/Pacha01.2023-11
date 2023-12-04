//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas
Proceso Ejercicio26
	escribir " Ingrese el primer numero A"
	leer A
	escribir "Ingrese el segundo numero B"
	leer B
	cociente <- 0
	mientras A>=B Hacer
		A<-A - B
		Cociente<- cociente +1
		ESCRIBIR " El cociente es:", cociente
		escribir " El resto es :", A
		
	FinMientras
FinProceso
