//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso ejercicio37
	Definir num1, num2, resto Como Entero
	Escribir "ingrese el primer numero: "
	leer num1
	Escribir "ingrese el segundo numero: "
	Leer num2
	Mientras num2 <> 0 Hacer
		resto <- num1 % num2
		num1 <- num2
		num2 <- resto
	FinMientras
	Escribir "el M.C.D es: ", num1
FinProceso