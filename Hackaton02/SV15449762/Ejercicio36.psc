Proceso Ejercicio36
	
	Definir a, b, c, terminos Como Entero
	
	Escribir "Ingrese la cantidad de términos de la seria Fibonacci"
	Leer terminos
	
	a <- 0
	b <- 1
	c <- 0
	
	Escribir "La serie de Fibonacci para " terminos " terminos"
	
	Para i <- 1 Hasta terminos Con Paso 1 Hacer
		Escribir c " "
		
		c <- a + b
		a <- b
		b <- c
					
	FinPara
	
FinProceso
