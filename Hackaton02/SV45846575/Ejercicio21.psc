//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	definir n,f Como Real
	f<-1
	escribir "Ingrese un numero"
	leer n
	para i<-1 Hasta n Con Paso 1 Hacer
		escribir "",i
		f<-f*i
	
	FinPara
	escribir "El factorial de ",n," Es :",f
FinProceso
