// Hacer un algoritmo en Pseint para calcular la serie de Fibonacci
Proceso Ejercicio_36
	Definir a,b,c,terminos Como Entero
	
	a <- 0
	b <- 1
	
	Escribir "Ingrese la cantidad de terminos: "
	Leer terminos
	
	Escribir "La serie de Fibonacci para ",terminos," terminos"
	Para i <- 1 Hasta terminos Con Paso 1 Hacer
		Escribir a
		c <- a + b
		a <- b
		b <- c
	FinPara
FinProceso
