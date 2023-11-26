//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Ejercicio36
	Definir a,b,c Como Entero
	Escribir "Ingrese la cantidad de terminos de la serie Fibonacci"
	Leer terminos
	
	a <- 0 
	b <- 1
	
	Escribir  "La serie de Fibonacci para", terminos, "terminos"
	Para i <- 1 hasta terminos con paso 1 Hacer
		Escribir a
		
		c <- a + b 
		
		Escribir c
		
		a <- b 
		b <- c
		
	FinPara
FinProceso
