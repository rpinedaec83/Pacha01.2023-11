Proceso Ejercicio37
	
	Definir num1, num2, resto Como Entero
	
	Escribir "Ingrese el 1er número"
	Leer num1
	
	Escribir  "Ingrese el 2do número"
	Leer num2
	
	Mientras num2 no es 0 Hacer
		resto <- num1 % num2
		num1 <- num2
		num2 <- resto
	FinMientras
	
	Escribir "El MCD es " num1
	
	
FinProceso
